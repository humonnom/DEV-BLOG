import { css } from "@emotion/react";
import Link from "next/link";
import { BlackPebble, WhitePebble } from "../../components/pebble";
import { getAlphabets } from "../../hooks/utils";
import { Container } from "../../layouts/Layout";
import { BORDER_STYLE, FlexCenter, FONT_SIZE } from "../../styles/global";
import db from "../../utils/db";

const Posts = (props) => {
  const alphabets = getAlphabets();
  const { membersData } = props;
  const Contents = (
    <div css={ContentsStyle}>
      <div css={ScreenStyle}>
        <p>screen</p>
      </div>
      <div css={MemberListStyle}>
        {alphabets.map((alphabet) => {
          const found = membersData.find(
            (element) => element.slug === alphabet
          );
          if (found) {
            return (
              <div css={MemberStyle} key={found.id}>
                <Link href={`/movie-mate/${found.slug}`}>
                  <a>
                    <BlackPebble inside={found.slug} guide={found.info.name} />
                  </a>
                </Link>
              </div>
            );
          } else {
            return (
              <div css={MemberStyle} key={Math.random()}>
                <a>
                  <WhitePebble inside={alphabet} guide="empty seat" />
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
  return <Container contents={Contents} usage="movieMate" />;
};

export const getStaticProps = async () => {
  const members = await db.collection("members").orderBy("created").get();
  const membersData = members.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return {
    props: { membersData },
    revalidate: 10,
  };
};

export default Posts;

const ContentsStyle = css``;

const MemberListStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
`;

const MemberStyle = css`
  width: 80px;
  margin: 3px;
`;

const ScreenStyle = css`
  width: 100%;
  height: 12px;
  border: ${BORDER_STYLE.black};
  margin-bottom: 25px;
  p {
    ${FlexCenter}
    font-size: ${FONT_SIZE.xSmall}
  }
`;
