import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { WhitePebble } from "../../../components/pebble";
import { Container } from "../../../layouts/Layout";

function index() {
  const Contents = (
    <>
      <h1>admin</h1>
      <div css={LinkListStyle}>
        <div>
          <Link href={`/movie-mate/admin/member`}>
            <a>
              <WhitePebble inside="멤버추가" />
            </a>
          </Link>
        </div>
        <div>
          <Link href={`/movie-mate/admin/movie`}>
            <a>
              <WhitePebble inside="영화추가" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
  return <Container contents={Contents} usage="movieMate" />;
}

export default index;

const LinkListStyle = css`
  width: 80%;
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: start;
  div {
    padding: 3px;
  }
`;
