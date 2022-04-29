import { css } from "@emotion/react";
import { useCallback, useEffect, useMemo } from "react";
import { useInput } from "./input";
import { BlackPebble } from "./pebble";
import { WhiteTofu } from "./tofu";
import { useRequest } from "../hooks/useRequest";
import { FONT_SIZE } from "../styles/global";

export function ContactForm() {
  const { comp: instaComp, value: instaValue } = useInput({ type: "text" });
  const { comp: contactComp, value: contactValue } = useInput({ type: "text" });
  const { comp: memoComp, value: memoValue } = useInput({ type: "text" });
  const id = new Date().toISOString();

  const { res, request } = useRequest({
    endpoint: `/api/website/${id}`,
    method: "post",
    data: {
      info: {
        insta: instaValue,
        contact: contactValue,
        memo: memoValue,
      },
    },
  });

  useEffect(() => {
    if (res && res.status === 200) {
      alert("제출되었습니다. 감사합니다.");
    }
  }, [res]);

  const submit = useCallback(() => {
    if (contactValue !== "" && memoValue !== "") {
      request();
    } else {
      alert("이메일과 사이트 설명은 반드시 적어주세요");
    }
  }, [contactValue, memoValue, request]);

  const Contents = useMemo(() => {
    return (
      <div css={ContactFormStyle}>
        <div css={ContactTitleStyle}>
          <p>Contact</p>
        </div>
        <div>
          <div>
            <WhiteTofu
              inside="email: "
              guide=" 연락처(email) "
              baby={<>{contactComp}</>}
            />
          </div>
          <div>
            <WhiteTofu
              inside="instagram: "
              guide=" 연락처(instagram) "
              baby={<>{instaComp}</>}
            />
          </div>
          <div>
            <WhiteTofu
              inside="memo: "
              guide="남기고 싶은 말을 적어주세요"
              baby={<>{memoComp}</>}
            />
          </div>
        </div>
        <div css={RegisterButtonStyle}>
          <button
            type="button"
            onClick={submit}
            css={css`
              font-size: ${FONT_SIZE.xSmall};
              height: 20px;
            `}
          >
            <BlackPebble inside="send" />
          </button>
        </div>
      </div>
    );
  }, [contactComp, submit, memoComp, instaComp]);
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
