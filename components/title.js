import React from "react";
import { css } from "@emotion/react";
import { FONT_SIZE } from "../styles/global";

export const Title = ({ inside }) => {
  return (
    <>
      <h2 css={TitleStyle}>{inside}</h2>
    </>
  );
};

const TitleStyle = css`
  font-weight: 400;
  font-size: ${FONT_SIZE.xLarge};
`;
