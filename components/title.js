import React from "react";
import { css } from "@emotion/react";
import { BORDER_STYLE, FONT_SIZE } from "../styles/global";

export const Title = ({ inside, sidePadding, hasBorder }) => {
  const title = <h2 css={TitleStyle}>`{inside}`</h2>;
  if (hasBorder) {
    return <div css={[TitleContainer, getPadding(sidePadding)]}>{title}</div>;
  } else {
    return <>{title}</>;
  }
};

const getPadding = (size) => {
  if (size >= 0) {
    return css`
      padding: 5px ${size}px;
    `;
  } else {
    return css`
      padding: 5px 10px;
    `;
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
