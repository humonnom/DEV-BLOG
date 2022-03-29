import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { BORDER_STYLE, COLOR_STYLE, FONT_SIZE } from "../styles/global";
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

export const ImageBox = (src) => {
  return (
    <div css={ImageBoxStyle}>
      <Image
        src="https://onitbucket.s3.ap-northeast-2.amazonaws.com/image/25%222022-03-15T15:53:22.612Z%22.jpeg"
        alt="banana tree"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

const ImageBoxStyle = css`
  display: block;
  background-color: ${COLOR_STYLE.paleGrey};
  position: relative;
  width: 500px;
  height: 300px;
  border: ${BORDER_STYLE.black};
`;
