import { css } from "@emotion/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo } from "react";
import { useInput } from "../components/input";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { useRequest } from "../hooks/useRequest";
import { Container } from "../layouts/Layout";
import { FONT_SIZE } from "../styles/global";

export default function Website() {
  const { comp: linkComp, value: linkValue } = useInput({ type: "text" });
  const { comp: instaComp, value: instaValue } = useInput({ type: "text" });
  const { comp: contactComp, value: contactValue } = useInput({ type: "text" });
  const { comp: memoComp, value: memoValue } = useInput({ type: "text" });
  const id = new Date().toISOString();

  const { res, request } = useRequest({
    endpoint: `/api/website/${id}`,
    method: "post",
    data: {
      info: {
        link: linkValue,
        insta: instaValue,
        contact: contactValue,
        memo: memoValue,
      },
    },
  });

  useEffect(() => {
    if (res && res.status === 200) {
      alert("등록되었습니다. 감사합니다.");
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
      <>
        <p>( 웹사이트 만들어 드립니다. )</p>

        <div>
          <div>
            <WhitePebble
              inside="email: "
              guide=" 연락처(email) "
              baby={<>{contactComp}</>}
            />
          </div>
          <div>
            <WhitePebble
              inside="instagram: "
              guide=" 작업 계정이 있다면 적어주세요 "
              baby={<>{instaComp}</>}
            />
          </div>
          <div>
            <WhitePebble
              inside="memo: "
              guide="사이트 설명을 적어주세요"
              baby={<>{memoComp}</>}
            />
          </div>
          <div>
            <WhitePebble
              inside="link: "
              guide="링크(작업물, 기존 사이트 등)"
              baby={<>{linkComp}</>}
            />
          </div>
          <div>
            <BlackPebble inside=" 신청하기 " action={submit} />
          </div>
        </div>
        <p
          css={css`
            margin-top: 15px;
            font-size: ${FONT_SIZE.xSmall};
          `}
        >
          <Link href="https://www.instagram.com/uronghigh/">
            <a>send me dm </a>
          </Link>
        </p>
      </>
    );
  }, [linkComp, contactComp, submit, memoComp, instaComp]);
  return <Container contents={Contents} />;
}
