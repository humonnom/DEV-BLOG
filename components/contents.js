import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { COLOR_STYLE } from "../styles/global";
import { getPadding, getWidth } from "../styles/getter";
import { getBackground, getBorder, getColor } from "../hooks/utils";

export const TextBox = ({ inside, padding, widthType, ascii, white }) => {
  const paddingH = 5;
  const paddingW = padding || 10;
  return (
    <div
      css={[
        TextBoxStyle,
        getColor(white),
        getBorder(white),
        getPadding(paddingH, paddingW),
        getBackground(white),
        getWidth(widthType),
      ]}
    >
      <p css={[TextStyle(ascii)]}>{inside}</p>
    </div>
  );
};

const TextBoxStyle = css`
  display: flex;
`;

const TextStyle = (ascii) => {
  if (ascii) {
    return css`
      white-space: pre-wrap;
    `;
  }
  return css`
    white-space: pre-line;
  `;
};

export const ImageBox = ({ white }) => {
  return (
    <div css={[ImageBoxStyle, getBorder(white)]}>
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
  width: 300px;
  height: 350px;
`;
