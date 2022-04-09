import { css } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";
import { useInput } from "../../../components/input";
import { BlackPebble, WhitePebble } from "../../../components/pebble";
import { useRequest } from "../../../hooks/useRequest";
import { Container } from "../../../layouts/Layout";
import { FONT_SIZE } from "../../../styles/global";
import { useGetSlugsList } from "../../../hooks/movie_mate";
import { getAlphabets } from "../../../hooks/utils";

export default function Movie() {
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

  const slugsIcons = useMemo(() => {
    if (slugsList) {
      const alphabets = getAlphabets();
      return (
        <div css={SlugsIconsContainerStyle}>
          {alphabets.map((alphabet) => {
            const found = slugsList.find((element) => element === alphabet);
            if (found) {
              const remove = () =>
                setShow(show.filter((slug) => slug != found));
              const add = () => setShow([...show, found]);
              return (
                <div css={SlugsIconStyle} key={found}>
                  {show.includes(found) && (
                    <BlackPebble inside={found} action={remove} />
                  )}
                  {!show.includes(found) && (
                    <WhitePebble inside={found} action={add} />
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
  }, [slugsList, setShow, show]);

  useEffect(() => {
    console.log(show);
    console.log(show.toString());
  }, [show]);

  const Contents = useMemo(() => {
    return (
      <>
        {infos}
        {slugsIcons}
        {buttons}
      </>
    );
  }, [slugsIcons, infos, buttons]);

  return <Container contents={Contents} usage="movieMate" />;
}

const InputStyle = css`
  width: 300px;
  margin: 11px auto;
`;

const SubmitStyle = css`
  margin-top: 20px;
  font-size: ${FONT_SIZE.medium};
  button {
    margin: 10px;
  }
`;

const SlugsIconsContainerStyle = css`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(15px, auto);
  margin-top: 30px;
`;

const SlugsIconStyle = css`
  width: 30px;
  height: 15px;
  margin: 3px;
`;
