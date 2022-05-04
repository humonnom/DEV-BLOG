import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { COLOR_STYLE, FONT_SIZE, mq } from "../styles/global";
import { getPadding, getWidth } from "../styles/getter";
import { getBackground, getBorder, getColor } from "../hooks/utils";

export const TextBox = ({ inside, padding, widthType, ascii, white }) => {
  const paddingH = 5;
  const paddingW = padding || 10;
  const width = getWidth(widthType) - paddingW * 2;
  return (
    <div
      css={[
        TextBoxStyle,
        getColor(white),
        getBorder(white),
        getPadding(paddingH, paddingW),
        getBackground(white),
        GetSize(width),   
      ]}
    >
      <p css={[TextStyle(ascii)]}>{inside}</p>
    </div>
  );
};

const GetFontSize = () => {
  return mq({
    fontSize: [FONT_SIZE.small, FONT_SIZE.medium],
  });
}

const TextBoxStyle = css`
  display: flex;
  ${GetFontSize()};
`;


const TextStyle = (ascii) => {
  if (ascii) {
    return css`
      white-space: pre-wrap;
      overflow: scroll;
    `;
  }
  return css`
    white-space: pre-line;
    overflow: scroll;
  `;
};

export const ImageBox = ({ white, src }) => {
  const width = getWidth();
  return (
    <div css={[ImageBoxStyle, GetSize(width, 350), getBorder(white)]}>
      <Image src={src} alt="banana tree" layout="fill" objectFit="contain" />
    </div>
  );
};

const ImageBoxStyle = css`
  display: block;
  background-color: ${COLOR_STYLE.black};
  position: relative;
  
`;

const GetSize = (width, height) => {
  const hArray = !height ? ['auto', 'auto'] : [height, height + 200];
  return mq({
    width: [width, width + 200],
    height: hArray,
  });
}