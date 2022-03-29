import React from "react";
import { css } from "@emotion/react";
import { BORDER_STYLE, FONT_SIZE } from "../styles/global";
import { getPadding } from "../styles/getter";

export const Title = ({ inside, padding, hasBorder }) => {
  const title = <h2 css={TitleStyle}>`{inside}`</h2>;
  const paddingH = 5;
  const paddingW = padding || 10;
  if (hasBorder) {
    return (
      <div css={[TitleContainer, getPadding(paddingH, paddingW)]}>{title}</div>
    );
  } else {
    return <>{title}</>;
  }
};

const TitleContainer = css`
  display: flex;
  justify-content: center;
  border: ${BORDER_STYLE.black};
`;

const TitleStyle = css`
  font-weight: 400;
  font-size: ${FONT_SIZE.large};
  margin: 0 auto;
`;
