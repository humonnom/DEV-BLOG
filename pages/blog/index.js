import { Container } from "../../layouts/Layout";
import React, { useCallback, useMemo, useState } from "react";
import { BlackPebble, WhitePebble } from "../../components/pebble";
import { useInput } from "../../components/input";
import Modal from "../../components/Modal";
import { css } from "@emotion/react";
import { FlexCenter } from "../../styles/global";
import { Square } from "../../components/square";
import db from "../../utils/db";
import GuideButtons from "../../components/guideButtons";

export default function Blog({ postsData }) {
  const { comp, value } = useInput({ type: "password" });
  const [verified, setVerified] = useState(false);
  const [writingModalOn, setWritingModalOn] = useState(false);
  const [loginModalOn, setLoginModalOn] = useState(false);

  const submit = useCallback(() => {
    if (value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setVerified(true);
      setLoginModalOn(false);
    }
  }, [value]);

  const posts = useMemo(() => {
    if (postsData) {
      const datas = postsData.filter((data) => !data.deleted);
      return datas.map((data) => {
        return (
          <li key={data.id}>
            <Square
              title={data.title}
              link={`/blog/${data.slug}`}
              tags={data.tags}
            />
          </li>
        );
      });
    }
    return <></>;
  }, [postsData]);

  const list = useMemo(() => {
    if (verified) {
      return [{ inside: "+", action: () => setWritingModalOn(true) }];
    } else {
      return [{ inside: "login", action: () => setLoginModalOn(true) }];
    }
  }, [setLoginModalOn, setWritingModalOn, verified]);

  const Contents = useMemo(() => {
    return (
      <>
        {loginModalOn && (
          <div>
            <div>
              <WhitePebble inside="pw: " baby={<>{comp}</>} />
            </div>
            <div>
              <BlackPebble inside="submit" action={submit} />
            </div>
          </div>
        )}
        <GuideButtons list={list} />
        {verified && writingModalOn && (
          <Modal
            contents={<>add post comp</>}
            visible={writingModalOn}
            close={() => setWritingModalOn(false)}
          />
        )}
        <div css={postsContainerStyle}>{posts}</div>
      </>
    );
  }, [writingModalOn, comp, submit, loginModalOn, posts, list, verified]);
  return <Container contents={Contents} />;
}

export const getStaticProps = async () => {
  const posts = await db.collection("posts").orderBy("created").get();
  const postsData = posts.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return {
    props: { postsData },
    revalidate: 10,
  };
};

const postsContainerStyle = css`
  width: 100%;
  ${FlexCenter}
`;
