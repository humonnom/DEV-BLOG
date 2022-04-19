import { css } from "@emotion/react";
import Link from "next/link";
import React, { useMemo } from "react";
import { Container } from "../layouts/Layout";
import { WhitePebble } from "./pebble";

function Post({ data }) {
  const Contents = useMemo(() => {
    return (
      <>
        <Link href={"/blog"} passHref>
          <div css={addPostButtonStyle}>
            <WhitePebble inside="back to list" />
          </div>
        </Link>
        <div>
          {data.title}
          <pre />
          {data.created}
        </div>
      </>
    );
  }, [data]);
  return <Container contents={Contents} />;
}

export default Post;

const addPostButtonStyle = css`
  position: absolute;
  top: 30px;
  left: 30px;
  height: 20px;
  width: 80px;
  z-index: 999;
`;
