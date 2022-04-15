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
  const { comp: contactComp, value: contactValue } = useInput({ type: "text" });
  const { comp: memoComp, value: memoValue } = useInput({ type: "text" });
  const id = new Date().toISOString();

  const { res, request } = useRequest({
    endpoint: `/api/website/${id}`,
    method: "post",
    data: {
      info: {
        link: linkValue,
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
    if (contactValue !== "") {
      request();
    } else {
      alert("내용을 채워주세요");
    }
  }, [contactValue, request]);

  const Contents = useMemo(() => {
    return (
      <>
        <p>( 웹사이트 만들어 드립니다. )</p>

        <div>
          <div>
            <WhitePebble
              inside="memo: "
              guide="사이트 설명을 간단히 적어주세요"
              baby={<>{memoComp}</>}
            />
          </div>
          <div>
            <WhitePebble
              inside="contact: "
              guide=" 연락처(email, instagram 등) "
              baby={<>{contactComp}</>}
            />
          </div>
          <div>
            <WhitePebble
              inside="link: "
              guide="링크(작업물, 예시 사이트 등)"
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
  }, [linkComp, contactComp, submit, memoComp]);
  return <Container contents={Contents} />;
}
