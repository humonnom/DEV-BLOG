import { css } from "@emotion/react";

export const getPadding = (height, width) => {
  if (height >= 0 && width >= 0) {
    return css`
      padding: ${height}px ${width}px;
    `;
  }
  return css`
    padding: 0;
  `;
};

export const getWidth = (type) => {
  if (type === "wide") {
    return css`
      width: 80vw;
    `;
  }
  if (type === "narrow") {
    return css`
      width: 40vw;
    `;
  }
  return css`
    width: 50vw;
  `;
};
