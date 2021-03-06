import { Container } from "../../layouts/Layout";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BlackPebble, WhitePebble } from "../../components/pebble";
import { useInput } from "../../components/input";
import Modal from "../../components/Modal";
import { css } from "@emotion/react";
import { COLOR_STYLE, FlexCenter } from "../../styles/global";
import { Square } from "../../components/square";
import db from "../../utils/db";
import GuideButtons from "../../components/guideButtons";
import { useRequest } from "../../hooks/useRequest";
import { arrayfy, slugify } from "../../hooks/utils";
import { BlackTofu, WhiteTofu } from "../../components/tofu";
import { ImageBox, TextBox } from "../../components/contents";
import { useRouter } from "next/router";

export default function Blog({ postsData }) {
  const categoryList = useMemo(() => {
    return [
      { label: "2022", color: COLOR_STYLE.black },
    ];
  }, []);
  const router = useRouter();
  const category = useMemo(() => {
    return router.query.category || categoryList[0].label;
  }, [router, categoryList]);
  const { comp, value } = useInput({ type: "password" });
  const [verified, setVerified] = useState(false);
  const [writingModalOn, setWritingModalOn] = useState(false);
  const [loginModalOn, setLoginModalOn] = useState(false);
  const submit = useCallback(() => {
    if (value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setVerified(true);
      setLoginModalOn(false);
      setWritingModalOn(true);
    }
  }, [value]);

  const posts = useMemo(() => {
    if (postsData) {
      const datas = postsData.filter(
        (data) => !data.deleted && data.tags.includes(category)
      );
      return datas.map((data) => {
        return (
          <li key={data.id} css={PostStyle}>
            <Square
              title={data.title}
              link={`/blog/${data.slug}?category=${category}`}
              tags={data.tags}
            />
          </li>
        );
      });
    }
    return <></>;
  }, [postsData, category]);

  const list = useMemo(() => {
    const categoryButtonList = categoryList.map((element) => {
      return {
        inside: element.label,
        action: () => {
          router.push(
            {
              pathname: "/blog",
              query: { category: element.label },
            },
            undefined,
            { shallow: true }
          );
        },
        selected: category === element.label,
      };
    });
    return [
      { inside: "+", action: () => setLoginModalOn(true) },
      ...categoryButtonList,
    ];
  }, [setLoginModalOn, categoryList, category, router]);

  const { comp: titleComp, value: titleValue } = useInput({ type: "text" });
  const { comp: tagsComp, value: tagsValue } = useInput({ type: "text" });
  const {
    comp: textComp,
    value: textValue,
    id: textId,
  } = useInput({ type: "text", textarea: true });
  const {
    comp: imgComp,
    value: imgValue,
    id: imgId,
  } = useInput({ type: "text", textarea: true });
  const [currentItem, setCurrentItem] = useState(-1);
  const [contents, setContents] = useState([]);

  const setValue = useCallback(
    (type, src) => {
      const id = type === "text" ? textId : imgId;
      if (typeof document !== "undefined") {
        const input = document.getElementById(id);
        if (input) {
          input.value = src || "";
        }
      }
    },
    [imgId, textId]
  );

  useEffect(() => {
    if (currentItem === -1) {
      setValue("text", null);
      setValue("img", null);
    } else {
      setValue(contents[currentItem].type, contents[currentItem].src);
    }
  }, [contents, currentItem, setValue]);

  const editContents = useCallback(
    (index) => {
      const newArray = contents.slice();
      const target = newArray[index];
      target.src = target.type === "text" ? textValue : imgValue;
      setContents(newArray);
      setCurrentItem(-1);
    },
    [contents, setCurrentItem, imgValue, textValue]
  );

  const addContents = useCallback(
    (type) => {
      const value = type === "text" ? textValue : imgValue;
      const current = { src: value, type };
      if (contents.length === 0) {
        setContents([current]);
      } else {
        setContents([...contents, current]);
      }
      setCurrentItem(-1);
    },
    [imgValue, textValue, contents, setCurrentItem]
  );

  const id = "post_" + new Date().toISOString();
  const { res, request } = useRequest({
    endpoint: `/api/post/${id}`,
    method: "post",
    data: {
      contents,
      deleted: false,
      slug: slugify(titleValue),
      tags: arrayfy(tagsValue),
      title: titleValue,
    },
  });

  const addContentsComp = useMemo(() => {
    return (
      <>
        <div css={addContentsStyle}>
          <WhiteTofu
            inside="(text)"
            guide="????????? ??????"
            baby={<>{textComp}</>}
          />
          <div css={addContentsButtonStyle}>
            <BlackTofu inside="add" action={() => addContents("text")} />
          </div>
        </div>
        <div css={addContentsStyle}>
          <WhiteTofu inside="(img)" guide="????????? ??????" baby={<>{imgComp}</>} />
          <div css={addContentsButtonStyle}>
            <BlackTofu inside="add" action={() => addContents("img")} />
          </div>
        </div>
      </>
    );
  }, [textComp, imgComp, addContents]);

  const contentsList = useMemo(() => {
    return (
      <>
        {contents.map((content, index) => {
          console.log("contentList rerender");
          if (currentItem === index) {
            return (
              <div css={addContentsStyle} key={Math.random()}>
                <WhiteTofu
                  inside={content.type + ": "}
                  guide={content.type}
                  baby={<>{content.type === "text" ? textComp : imgComp}</>}
                />
                <div css={addContentsButtonStyle}>
                  <BlackTofu inside="save" action={() => editContents(index)} />
                </div>
              </div>
            );
          } else {
            return (
              <div css={addContentsStyle} key={Math.random()}>
                {content.type === "text" && <TextBox inside={content.src} />}
                {content.type === "img" && <ImageBox src={content.src} />}
                <div css={addContentsButtonStyle}>
                  <BlackTofu
                    inside="edit"
                    action={() => setCurrentItem(index)}
                  />
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }, [contents, currentItem, imgComp, textComp, setCurrentItem, editContents]);

  useEffect(() => {
    if (res) {
      alert("????????????");
      setWritingModalOn(false);
    }
  }, [res]);

  const postForm = useMemo(() => {
    return (
      <>
        <div>
          <WhiteTofu inside="title: " guide="??????" baby={<>{titleComp}</>} />
          <WhiteTofu inside="tags: " guide="??????" baby={<>{tagsComp}</>} />
        </div>
        <div>
          {contentsList}
          {currentItem === -1 && <>{addContentsComp}</>}
        </div>
        <button type="button" onClick={request}>
          save post
        </button>
      </>
    );
  }, [
    titleComp,
    currentItem,
    tagsComp,
    request,
    contentsList,
    addContentsComp,
  ]);

  const Contents = useMemo(() => {
    return (
      <>
        {loginModalOn && (
          <Modal
            contents={
              <div>
                <div>
                  <WhitePebble inside="pw: " baby={<>{comp}</>} />
                </div>
                <div>
                  <BlackPebble inside="submit" action={submit} />
                </div>
              </div>
            }
            visible={loginModalOn}
            close={() => setLoginModalOn(false)}
          />
        )}
        <GuideButtons list={list} />
        {verified && writingModalOn && (
          <Modal
            contents={postForm}
            visible={writingModalOn}
            close={() => setWritingModalOn(false)}
          />
        )}
        <div css={postsContainerStyle}>{posts}</div>
      </>
    );
  }, [
    writingModalOn,
    comp,
    submit,
    loginModalOn,
    posts,
    list,
    verified,
    postForm,
  ]);
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

const PostStyle = css`
  width: 100%;
`;

const addContentsStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const addContentsButtonStyle = css`
  display: flex;
  width: 30px;
`;
