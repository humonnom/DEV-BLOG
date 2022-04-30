import { css } from "@emotion/react";
import { BORDER_STYLE, COLOR_STYLE, FlexCenter, FONT_SIZE } from "./global";

export const SectionStyle = css`
  ${FlexCenter}
  height: 100%;
  max-width: 430px;
  padding: 70px 10px 100px 10px;
  margin: 0px 0px;
  border: ${BORDER_STYLE.white};
  background-color: black;
`;

export const SectionTitleStyle = css`
  color: ${COLOR_STYLE.white};
  font-size: ${FONT_SIZE.medium};
  margin-bottom: 50px;
`;
