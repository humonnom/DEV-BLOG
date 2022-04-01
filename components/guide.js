import { css } from "@emotion/react";
import { useMemo } from "react";
import { BORDER_STYLE } from "../styles/global";

export const Guide = ({ inside, x, y }) => {
  const comp = useMemo(() => {
    return (
      <>
        <div css={[GuideContainerStyle(x, y), getVisible(x, y)]}>
          <p>{inside}</p>
        </div>
      </>
    );
  }, [x, y]);

  return comp;
};

const getVisible = (x, y) => {
  if (!x && !y) {
    return css`
      display: none;
    `;
  }
  return css``;
};
const GuideContainerStyle = (x, y) => {
  return css`
    position: absolute;
    height: 15px;
    overflow: scroll;
    width: 100%;
    z-index: 2;
    top: ${y}px;
    left: ${x}px;
    border: ${BORDER_STYLE.black};
    background-color: white;
    padding: 0px;
  `;
};
