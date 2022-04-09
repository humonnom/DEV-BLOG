import { css } from "@emotion/react";
import { getRandomBorderRadius } from "../../hooks/utils";
import { SectionStyle } from "../../styles/section";
import { BlackPebble, WhitePebble } from "../pebble";
import { Title } from "../title";

export const MoviesComp = ({ movies, category }) => {
  const action = () => {
    if (category === "movie") {
      console.log("예약하기");
    } else if (category === "appointment") {
      console.log("취소");
    }
  };
  const label = () => {
    if (category === "movie") {
      return "register";
    } else if (category === "appointment") {
      return "cancel";
    }
  };

  if (!movies) {
    return <></>;
  }
  return movies.map((movie) => (
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
  ));
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
