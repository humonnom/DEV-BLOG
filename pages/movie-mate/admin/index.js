import { css } from "@emotion/react";
import React, { useMemo, useState } from "react";
import { WhitePebble } from "../../../components/pebble";
import { Container } from "../../../layouts/Layout";
import { useInput } from "../../../components/input";
import Modal from "../../../components/Modal";
import MemberModalContents from "../../../components/movie-mate/memberModalContents";
import MovieModalContents from "../../../components/movie-mate/movieModalContents";
import RegisterModalContents from "../../../components/movie-mate/registerModalContents";

function Index() {
  const { comp, value } = useInput({ type: "password" });
  const [memberModalOn, setMemberModal] = useState(false);
  const [movieModalOn, setMovieModal] = useState(false);
  const [registerModalOn, setRegisterModal] = useState(false);

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
              <WhitePebble
                inside="멤버추가"
                action={() => {
                  setMemberModal(true);
                  setMovieModal(false);
                  setRegisterModal(false);
                }}
              />
              <>
                {memberModalOn && (
                  <Modal
                    contents={<MemberModalContents />}
                    visible={memberModalOn}
                    close={() => setMemberModal(false)}
                  />
                )}
              </>
            </div>
            <div>
              <WhitePebble
                inside="영화추가"
                action={() => {
                  setMemberModal(false);
                  setMovieModal(true);
                  setRegisterModal(false);
                }}
              />
              <>
                {movieModalOn && (
                  <Modal
                    contents={<MovieModalContents />}
                    visible={movieModalOn}
                    close={() => setMovieModal(false)}
                  />
                )}
              </>
            </div>
            <div>
              <WhitePebble
                inside="예약관리"
                action={() => {
                  setMemberModal(false);
                  setMovieModal(false);
                  setRegisterModal(true);
                }}
              />
              <>
                {registerModalOn && (
                  <Modal
                    contents={<RegisterModalContents />}
                    visible={registerModalOn}
                    close={() => setRegisterModal(false)}
                  />
                )}
              </>
            </div>
          </div>
        )}
      </>
    );
  }, [
    comp,
    verified,
    setRegisterModal,
    setMovieModal,
    setMemberModal,
    registerModalOn,
    movieModalOn,
    memberModalOn,
  ]);
  return <Container contents={Contents} usage="movieMate" />;
}

export default Index;

const LinkListStyle = css`
  margin: 15px auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  div {
    padding: 3px 0px;
    margin: 5px auto;
  }
`;
