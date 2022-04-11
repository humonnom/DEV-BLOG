import { css } from "@emotion/react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useInput } from "../input";
import { BlackPebble, WhitePebble } from "../pebble";
import { useGetSlugsList } from "../../hooks/movie_mate";
import { useRequest } from "../../hooks/useRequest";
import { FONT_SIZE } from "../../styles/global";

export default function MemberModalContents() {
  const [state, setState] = useState("fill");
  const { comp: nameComp, value: nameValue } = useInput({ type: "text" });
  const { comp: emailComp, value: emailValue } = useInput({ type: "text" });
  const { comp: phoneComp, value: phoneValue } = useInput({ type: "text" });
  const { comp: pwComp, value: pwValue } = useInput({ type: "text" });

  const slugValue = useMemo(() => {
    if (nameValue) {
      return nameValue[0];
    } else {
      return "";
    }
  }, [nameValue]);

  const { res, request } = useRequest({
    endpoint: `/api/member/${slugValue}`,
    method: "post",
    data: {
      info: {
        name: nameValue.charAt(0).toLowerCase() + nameValue.slice(1),
        email: emailValue,
        phone: phoneValue,
        pw: pwValue,
      },
      slug: slugValue.toLowerCase(),
    },
  });

  useEffect(() => {
    if (res) {
      if (res.status === 200) {
        setState("done");
      }
    }
  }, [res]);

  const slugsList = useGetSlugsList();
  const isTaken = useMemo(() => {
    if (slugsList) {
      return slugsList.includes(slugValue);
    } else {
      return true;
    }
  }, [slugsList, slugValue]);

  const title = useMemo(() => {
    const inside = () => {
      if (state !== "done" && isTaken) {
        return `${slugValue} is already taken`;
      } else {
        return `${slugValue} is for ${nameValue}`;
      }
    };

    const comp = (
      <div css={InputStyle}>
        <BlackPebble inside={inside()} />
      </div>
    );

    if (state === "done") {
      return (
        <Link href={`/movie-mate/${slugValue}`} passHref>
          <a>{comp}</a>
        </Link>
      );
    } else {
      return comp;
    }
  }, [slugValue, nameValue, state, isTaken]);

  const infos = useMemo(() => {
    return (
      <>
        <div css={InputStyle}>
          <WhitePebble inside={emailValue} />
        </div>
        <div css={InputStyle}>
          <WhitePebble inside={phoneValue} />
        </div>
        <div css={InputStyle}>
          <WhitePebble inside={pwValue} />
        </div>
      </>
    );
  }, [emailValue, phoneValue, pwValue]);

  const fillComp = useMemo(() => {
    return (
      <>
        {title}
        <div css={InputStyle}>
          <WhitePebble inside="name: " baby={<>{nameComp}</>} />
        </div>
        <div css={InputStyle}>
          <WhitePebble inside="email: " baby={<>{emailComp}</>} />
        </div>
        <div css={InputStyle}>
          <WhitePebble inside="phone: " baby={<>{phoneComp}</>} />
        </div>
        <div css={InputStyle}>
          <WhitePebble inside="pw: " baby={<>{pwComp}</>} />
        </div>
        {!isTaken && (
          <div css={SubmitStyle}>
            <button type="button" onClick={() => setState("confirm")}>
              submit
            </button>
          </div>
        )}
      </>
    );
  }, [nameComp, emailComp, phoneComp, pwComp, title, isTaken]);

  const confirmComp = useMemo(() => {
    return (
      <>
        {title}
        {infos}
        <div css={SubmitStyle}>
          <button
            type="button"
            onClick={() => {
              setState("fill");
            }}
          >
            뒤로가기
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              request();
            }}
          >
            업로드
          </button>
        </div>
      </>
    );
  }, [infos, request, title]);

  const postComp = useMemo(() => {
    return (
      <>
        {title}
        {infos}
        <div css={SubmitStyle}>
          <button
            type="button"
            onClick={() => {
              setState("fill");
            }}
          >
            처음으로
          </button>
        </div>
      </>
    );
  }, [infos, title]);

  const Contents = useMemo(() => {
    if (state === "fill") {
      return fillComp;
    } else if (state === "confirm") {
      return confirmComp;
    } else if (state === "done") {
      return postComp;
    }
    return <>새로고침 해주세요</>;
  }, [state, fillComp, confirmComp, postComp]);

  return Contents;
}

const InputStyle = css`
  width: 300px;
  margin: 0 auto;
`;

const SubmitStyle = css`
  margin-top: 20px;
  font-size: ${FONT_SIZE.medium};
  button {
    margin: 10px;
  }
`;
