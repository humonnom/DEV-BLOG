import { css } from "@emotion/react";
import React, { useCallback, useMemo, useState } from "react";
import { BlackPebble, WhitePebble } from "../../../components/pebble";
import { Container } from "../../../layouts/Layout";
import { useInput } from "../../../components/input";
import Modal from "../../../components/Modal";
import MemberModalContents from "../../../components/movie-mate/memberModalContents";
import MovieModalContents from "../../../components/movie-mate/movieModalContents";
import RegisterModalContents from "../../../components/movie-mate/registerModalContents";

function Index() {
  const { comp, value } = useInput({ type: "password" });
  const [verified, setVerified] = useState(false);
  const [memberModalOn, setMemberModal] = useState(false);
  const [movieModalOn, setMovieModal] = useState(false);
  const [registerModalOn, setRegisterModal] = useState(false);

  const submit = useCallback(() => {
    if (value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setVerified(true);
    }
  }, [value]);

  const Contents = useMemo(() => {
    return (
      <>
        <h1>admin</h1>
        {!verified && (
          <div>
            <div>
              <WhitePebble inside="pw: " baby={<>{comp}</>} />
            </div>
            <div>
              <BlackPebble inside="submit" action={submit} />
            </div>
          </div>
        )}
        {verified && (
          <div css={LinkListStyle}>
            <div css={LinkStyle}>
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
            <div css={LinkStyle}>
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
            <div css={LinkStyle}>
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
    submit,
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
  width: 100%;
`;

const LinkStyle = css`
  margin: 5px auto;
  width: 30%;
`;
