import { css } from "@emotion/react";
import { useInput } from "../components/input";
import { useCallback, useMemo } from "react";
import { Login } from "../components/movie-mate/login";
import { Container } from "./Layout";
import { useGetMovieList } from "../hooks/movie_mate";
import { MoviesComp } from "../components/movie-mate/movie";
import { isOutOfDate } from "../hooks/utils";
import { FlexCenter, FONT_SIZE } from "../styles/global";

export function MovieMate({ member }) {
  const { comp, value } = useInput({ type: "text" });
  const movieList = useGetMovieList();
  const correct = useMemo(() => {
    if (member) {
      if (value === member.info.pw) {
        return true;
      }
    }
    return false;
  }, [member, value]);

  const getMovies = useCallback(
    (category) => {
      if (movieList) {
        if (category === "movie") {
          const available = movieList.filter(
            (element) =>
              element.reserv.reserved === false &&
              !isOutOfDate(element.info.date)
          );
          return (
            <MoviesComp
              slug={member.slug}
              movies={available}
              category={category}
            />
          );
        } else if (category === "appointment") {
          const appointment = movieList.filter(
            (element) =>
              element.reserv.with === member.slug &&
              !isOutOfDate(element.info.date)
          );
          return (
            <MoviesComp
              slug={member.slug}
              movies={appointment}
              category={category}
            />
          );
        } else if (category === "log") {
          const appointment = movieList.filter(
            (element) =>
              element.reserv.with === member.slug &&
              isOutOfDate(element.info.date)
          );
          return (
            <MoviesComp
              slug={member.slug}
              movies={appointment}
              category={category}
            />
          );
        }
      } else {
        return <></>;
      }
    },
    [movieList, member]
  );

  const Board = useMemo(() => {
    const categoriesList = [
      { href: "movie", label: "Available Movies", type: "movie" },
      {
        href: "appointment",
        label: "Confirmed Appointment",
        type: "appointment",
      },
      { href: "log", label: "Log", type: "log" },
    ];
    return (
      <>
        {categoriesList.map((category) => {
          return (
            <div css={CategoryStyle} key={Math.random()}>
              <a name={category.href}>
                <div css={CategoryTitleStyle}>{category.label}</div>
                <div css={MoviesCompStyle}>{getMovies(category.type)}</div>
              </a>
            </div>
          );
        })}
      </>
    );
  }, [getMovies]);

  const guestName = (
    <div css={GuestNameContainerStyle}>
      <h2>{member.info.name}</h2>
    </div>
  );

  const Contents = (
    <>
      {!correct && <Login member={member} comp={comp} />}
      {correct && guestName}
      {correct && Board}
    </>
  );

  return (
    <Container
      contents={Contents}
      usage={correct ? "movieMateTemplate" : "movieMate"}
    />
  );
}

const CategoryStyle = css`
  min-height: 100vh;
  width: 100%;
`;

const MoviesCompStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryTitleStyle = css`
  ${FlexCenter}
  font-size: ${FONT_SIZE.xLarge};
  margin: 30px auto;
`;

const GuestNameContainerStyle = css`
  position: absolute;
  top: 0;
  left: 20px;
`;
