import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Mukta", "Noto Sans KR", -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        a {
          color: inherit;
          ${"" /* text-decoration: none; */}
        }
        p {
          word-break: keep-all;
        }
        button {
          word-break: keep-all;
          background-color: inherit;
          border: none;
        }
        ul {
          list-style: none;
          padding-left: 0px;
        }
      }
    `}
  />
);

export const SHADOW_STYLE = {
  pale: " 3px 0px 20px -5px rgba(0, 0, 0, 0.09)",
  lightGrey: " 50px 0px 200px -5px rgba(0, 0, 0, 0.5)",
};

export const FONT_SIZE = {
  xSmall: "0.5rem",
  small: "0.8rem",
  medium: "1.0rem",
  large: "1.2rem",
  xLarge: "1.5rem",
};

export const COLOR_STYLE = {
  white: "#ffffff",
  lightGrey: "#f8f8f8",
  paleGrey: "#f5f7f8",
  brownishGrey: "#707070",
  black: "#000000",
  orange: "#ff3d00",
  coral: "#ff4545",
};

export const BORDER_STYLE = {
  black: `solid 1px ${COLOR_STYLE.black}`,
};
