import React from "react";
import { css } from "@emotion/react";
import { BORDER_STYLE, FONT_SIZE } from "../styles/global";
import { getPadding, getWidth } from "../styles/getter";

export const TextBox = ({ inside, padding, widthType, ascii }) => {
  const paddingH = 5;
  const paddingW = padding || 10;
  return (
    <div
      css={[TextBoxStyle, getPadding(paddingH, paddingW), getWidth(widthType)]}
    >
      <p css={[TextStyle(ascii)]}>{inside}</p>
    </div>
  );
};

const TextBoxStyle = css`
  display: flex;
  border: ${BORDER_STYLE.black};
`;

const TextStyle = (ascii) => {
  if (ascii) {
    return css`
      white-space: pre;
    `;
  }
  return css`
    white-space: pre-line;
  `;
};
