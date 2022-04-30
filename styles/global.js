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
          text-decoration: none;
        }
        p {
          word-break: keep-all;
        }
        button {
          word-break: keep-all;
          background-color: unset;
          border: none;
          padding: 0px;
        }
        ul {
          list-style: none;
          padding-left: 0px;
        }
        li {
          list-style: none;
        }
        input {
          border: none;
        }
        input:focus {
          outline: none;
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px white inset;
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
  small: "0.7rem",
  medium: "0.9rem",
  large: "1.0rem",
  xLarge: "1.3rem",
};

export const COLOR_STYLE = {
  white: "#ffffff",
  lightGrey: "#f8f8f8",
  paleGrey: "#f5f7f8",
  brownishGrey: "#707070",
  black: "#000000",
  green: "#0C7126",
  beige: "#FCEBCE",
  orange: "#ff3d00",
  red: "#FE2E01",
};

export const BORDER_STYLE = {
  black: `solid 1px ${COLOR_STYLE.black}`,
  white: `solid 1px ${COLOR_STYLE.white}`,
};

export const FlexCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
