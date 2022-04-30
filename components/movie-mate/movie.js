import { css } from "@emotion/react";
import { getRandomBorderRadius } from "../../hooks/utils";
import { SectionStyle } from "../../styles/section";
import { BlackPebble, WhitePebble } from "../pebble";
import { Title } from "../title";

export const MoviesComp = ({ slug, movies, category }) => {
  if (!movies) {
    return <></>;
  }
  return movies.map((movie) => {
    const registered_list = movie.registered_slug;
    const registered = registered_list ? registered_list.includes(slug) : false;
    const action = () => {
      if (category === "movie" && registered) {
        console.log("useMovieRegister(movie, slug, on)");
      } else if (category === "movie" && !registered) {
        console.log("useMovieRegister(movie, slug, off)");
      } else if (category === "appointment") {
        console.log("useSetAppointment(movie, slug, on)");
      }
    };
    const label = () => {
      if (category === "movie" && registered) {
        return "unregister";
      } else if (category === "movie" && !registered) {
        return "register";
      } else if (category === "appointment") {
        return "cancel";
      }
    };
    return (
      <div key={Math.random()} css={[SectionStyle, getRandomBorderRadius()]}>
        <Title inside={movie.info.title} white={true} />
        <div css={InfoContainerStyle}>
          <div css={InfoStyle}>
            <BlackPebble inside={movie.info.director} />
          </div>
          <div css={InfoStyle}>
            <BlackPebble inside={movie.info.location} />
          </div>
          <div css={InfoStyle}>
            <BlackPebble inside={movie.info.date} />
          </div>
          <div css={InfoStyle}>
            <BlackPebble inside={movie.info.time} />
          </div>
        </div>
        {category !== "log" && (
          <div>
            <WhitePebble inside={label()} action={action} />
          </div>
        )}
      </div>
    );
  });
};

const InfoContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 25px auto;
`;

const InfoStyle = css`
  min-width: 50px;
  min-height: 40px;
  margin: 3px;
`;
