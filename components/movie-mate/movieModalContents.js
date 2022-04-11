import { css } from "@emotion/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useGetSlugsList } from "../../hooks/movie_mate";
import { useRequest } from "../../hooks/useRequest";
import { getAlphabets } from "../../hooks/utils";
import { FONT_SIZE } from "../../styles/global";
import { useInput } from "../input";
import { BlackPebble, WhitePebble } from "../pebble";

export default function MovieModalContents() {
  const [state, setState] = useState("fill");
  const [show, setShow] = useState([]);
  const title = useInput({ type: "text" });
  const date = useInput({ type: "text" });
  const director = useInput({
    type: "text",
  });
  const location = useInput({
    type: "text",
  });
  const time = useInput({ type: "text" });
  const id = "movie_" + new Date().toISOString();

  const { res, request } = useRequest({
    endpoint: `/api/movie/${id}`,
    method: "post",
    data: {
      info: {
        title: title.value,
        date: date.value,
        director: director.value,
        location: location.value,
        time: time.value,
      },
      reserv: {
        reserved: false,
        show: show,
        with: "",
      },
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

  const infos = useMemo(() => {
    return (
      <>
        <div css={InputStyle}>
          {state === "fill" && (
            <WhitePebble inside="title: " baby={<>{title.comp}</>} />
          )}
          {state !== "fill" && <WhitePebble inside={title.value} />}
        </div>
        <div css={InputStyle}>
          {state === "fill" && (
            <WhitePebble inside="director: " baby={<>{director.comp}</>} />
          )}
          {state !== "fill" && <WhitePebble inside={director.value} />}
        </div>

        <div css={InputStyle}>
          {state === "fill" && (
            <WhitePebble inside="location: " baby={<>{location.comp}</>} />
          )}
          {state !== "fill" && <WhitePebble inside={location.value} />}
        </div>

        <div css={InputStyle}>
          {state === "fill" && (
            <WhitePebble inside="date: " baby={<>{date.comp}</>} />
          )}
          {state !== "fill" && <WhitePebble inside={date.value} />}
        </div>
        <div css={InputStyle}>
          {state === "fill" && (
            <WhitePebble inside="time: " baby={<>{time.comp}</>} />
          )}
          {state !== "fill" && <WhitePebble inside={time.value} />}
        </div>
        <div css={InputStyle}>
          {state === "fill" && (
            <BlackPebble inside="show: " baby={<p>{show.toString()}</p>} />
          )}
          {state !== "fill" && <WhitePebble inside={show.toString()} />}
        </div>
      </>
    );
  }, [time, location, director, title, date, state, show]);

  const fillButtons = useMemo(() => {
    return (
      <button type="button" onClick={() => setState("confirm")}>
        submit
      </button>
    );
  }, []);

  const confirmButtons = useMemo(() => {
    return (
      <>
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
      </>
    );
  }, [request]);

  const postButtons = useMemo(() => {
    return (
      <button
        type="button"
        onClick={() => {
          setState("fill");
        }}
      >
        처음으로
      </button>
    );
  }, []);

  const buttons = useMemo(() => {
    return (
      <>
        <div css={SubmitStyle}>
          {state === "fill" && fillButtons}
          {state === "confirm" && confirmButtons}
          {state === "done" && postButtons}
        </div>
      </>
    );
  }, [state, fillButtons, confirmButtons, postButtons]);

  const remove = useCallback(
    (found) => {
      setShow(show.filter((slug) => slug != found));
    },
    [setShow, show]
  );

  const add = useCallback(
    (found) => {
      setShow([...show, found]);
    },
    [setShow, show]
  );

  const slugsIcons = useMemo(() => {
    if (slugsList) {
      const alphabets = getAlphabets();
      return (
        <div css={SlugsIconsContainerStyle}>
          {alphabets.map((alphabet) => {
            const found = slugsList.find((element) => element === alphabet);
            if (found) {
              return (
                <div css={SlugsIconStyle} key={found}>
                  {show.includes(found) && (
                    <BlackPebble inside={found} action={() => remove(found)} />
                  )}
                  {!show.includes(found) && (
                    <WhitePebble inside={found} action={() => add(found)} />
                  )}
                </div>
              );
            } else {
              return (
                <div css={SlugsIconStyle} key={Math.random()}>
                  <WhitePebble />
                </div>
              );
            }
          })}
        </div>
      );
    }
  }, [slugsList, show, add, remove]);

  const Contents = useMemo(() => {
    return (
      <>
        {infos}
        {slugsIcons}
        {buttons}
      </>
    );
  }, [slugsIcons, infos, buttons]);

  return Contents;
}

const InputStyle = css`
  width: 300px;
  margin: 5px auto;
`;

const SubmitStyle = css`
  margin-top: 20px;
  font-size: ${FONT_SIZE.medium};
  button {
    margin: 10px;
  }
`;

const SlugsIconsContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20px, auto);
  margin-top: 10px;
`;

const SlugsIconStyle = css`
  width: 30px;
  height: 15px;
  margin: 3px;
`;
