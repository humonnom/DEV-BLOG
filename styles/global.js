import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

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
      }
    `}
  />
);
