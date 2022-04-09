import React from "react";
import { css } from "@emotion/react";
import { FONT_SIZE } from "../styles/global";
import { getPadding } from "../styles/getter";
import { getBackground, getBorder, getColor } from "../hooks/utils";

export const Title = ({ inside, padding, hasBorder, white }) => {
  const title = <h2 css={[TitleStyle, getColor(white)]}>`{inside}`</h2>;
  const paddingH = 5;
  const paddingW = padding || 10;
  if (hasBorder) {
    return (
      <div
        css={[
          TitleContainer,
          getBackground(white),
          getBorder(white),
          getPadding(paddingH, paddingW),
        ]}
      >
        {title}
      </div>
    );
  } else {
    return <>{title}</>;
  }
};

const TitleContainer = css`
  display: flex;
  justify-content: center;
`;

const TitleStyle = css`
  text-align: center;
  font-weight: 400;
  font-size: ${FONT_SIZE.large};
  margin: 0 auto;
`;
