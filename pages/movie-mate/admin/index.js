import { css } from "@emotion/react";
import Link from "next/link";
import React, { useMemo } from "react";
import { WhitePebble } from "../../../components/pebble";
import { Container } from "../../../layouts/Layout";
import { useInput } from "../../../components/input";

function Index() {
  const { comp, value } = useInput({ type: "password" });

  const verified = useMemo(() => {
    if (value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      return true;
    } else {
      return false;
    }
  }, [value]);

  const Contents = useMemo(() => {
    return (
      <>
        <h1>admin</h1>
        {!verified && (
          <div>
            <WhitePebble inside="pw: " baby={<>{comp}</>} />
          </div>
        )}
        {verified && (
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
        )}
      </>
    );
  }, [comp, verified]);
  return <Container contents={Contents} usage="movieMate" />;
}

export default Index;

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
