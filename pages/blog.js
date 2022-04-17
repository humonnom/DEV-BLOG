import { Container } from "../layouts/Layout";
import React, { useCallback, useMemo, useState } from "react";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { useInput } from "../components/input";
import Modal from "../components/Modal";
import { css } from "@emotion/react";

export default function Blog() {
  const { comp, value } = useInput({ type: "password" });
  const [verified, setVerified] = useState(false);
  const [writingModalOn, setWritingModalOn] = useState(false);
  const [loginModalOn, setLoginModalOn] = useState(false);

  const submit = useCallback(() => {
    console.log("??");
    if (value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setVerified(true);
      setLoginModalOn(false);
    }
  }, [value]);

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
        <div css={addPostButtonStyle}>
          {verified && (
            <WhitePebble inside="+" action={() => setWritingModalOn(true)} />
          )}
          {!verified && !loginModalOn && (
            <WhitePebble inside="login" action={() => setLoginModalOn(true)} />
          )}
          {!verified && loginModalOn && (
            <WhitePebble inside="back" action={() => setLoginModalOn(false)} />
          )}
        </div>
        {verified && writingModalOn && (
          <Modal
            contents={<>writing</>}
            visible={writingModalOn}
            close={() => setWritingModalOn(false)}
          />
        )}
      </>
    );
  }, [
    verified,
    writingModalOn,
    setWritingModalOn,
    comp,
    submit,
    loginModalOn,
    setLoginModalOn,
  ]);
  return <Container contents={Contents} />;
}

const addPostButtonStyle = css`
  position: absolute;
  top: 30px;
  left: 30px;
  height: 20px;
  width: 50px;
  z-index: 999;
`;
