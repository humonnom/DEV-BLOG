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
  if (type === "narrow") {
      return 200;
  }
    return 300;
};
