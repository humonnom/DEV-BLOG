import { css } from "@emotion/react";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useInput } from "./input";
import { WhitePebble } from "./pebble";
import { WhiteTofu } from "./tofu";
import { useRequest } from "../hooks/useRequest";
import { FONT_SIZE } from "../styles/global";

export function ContactForm() {
  const { comp: nicknameComp, value: nicknameValue } = useInput({ type: "text" });
  const { comp: seatComp, value: seatValue } = useInput({ type: "text" });
  const { comp: emailComp, value: emailValue } = useInput({ type: "text" });
  const [checks, setChecks] = useReducer((prev, curr) => curr, {you: "", i: ""});
  const id = new Date().toISOString();

  const { res, request } = useRequest({
    endpoint: `/api/website/${id}`,
    method: "post",
    data: {
      info: {
        nickname: nicknameValue,
        alphabet: seatValue,
        memo: emailValue,
        knowEachOther: checks,
      },
    },
  });

  useEffect(() => {
    if (res && res.status === 200) {
      alert("제출되었습니다. 감사합니다.");
      
    }
  }, [res]);

  const submit = useCallback(() => {
    if (seatValue !== "" && nicknameValue !== ""  && emailValue !== "") {
      request();
    } else {
      alert("좌석과 닉네임, 연락처를 입력해주세요.(필수항목)");
    }
  }, [seatValue, nicknameValue, emailValue, request]);

  const Contents = useMemo(() => {
    return (
      <div css={ContactFormStyle}>
          <p>Register</p>
        <div css={ContactTitleStyle}>
        </div>
        <div>
          <div>
            <WhiteTofu
              inside="Alphabet:"
              guide="Choose your seat"
              baby={<>{seatComp}</>}
            />
          </div>
          <div>
            <WhiteTofu
              inside="Nickname: "
              baby={<>{nicknameComp}</>}
            />
          </div>
          <div>
            <WhiteTofu
              inside="Email: "
              guide="Your contact"
              baby={<>{emailComp}</>}
            />
          </div>
          <div css={css`display: flex`}>
            <label htmlFor="you">Do you know me?</label> <input id="you" type="checkbox" checked={checks['you']} onChange={(e) => setChecks({...checks, ['you']: e.target.checked})}/>
          </div>
          <div css={css`display: flex`}>
            <label htmlFor="i">Do I know you?</label> <input id="i" type="checkbox" checked={checks['i']} onChange={(e) => setChecks({...checks, ['i']: e.target.checked})}/>
          </div>
        </div>
        <div css={RegisterButtonStyle}>
          <div
            css={css`
              font-size: ${FONT_SIZE.xSmall};
              height: 20px;
              width: 50px;
              margin-top: 10px;
            `}
          >
            <WhitePebble inside="send" action={submit} />
          </div>
        </div>
      </div>
    );
  }, [seatComp, submit, emailComp, nicknameComp, checks]);
  return Contents;
}
const RegisterButtonStyle = css`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

const ContactFormStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactTitleStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${FONT_SIZE.xSmall};
  p {
    margin-bottom: 0;
  }
`;
