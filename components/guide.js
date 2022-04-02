import { css } from "@emotion/react";
import { useEffect, useMemo } from "react";
import { BORDER_STYLE, COLOR_STYLE, FONT_SIZE } from "../styles/global";

export const Guide = ({ inside, x, y }) => {
  const comp = useMemo(() => {
    return (
      <>
        <div css={[GuideContainerStyle(x, y), getVisible(x, y)]}>
          <p>{inside}</p>
        </div>
      </>
    );
  }, [inside, x, y]);

  return comp;
};

const getVisible = (x, y) => {
  if (!x && !y) {
    return css`
      display: none;
    `;
  }
  return css`
    display: flex;
  `;
};

const GuideContainerStyle = (x, y) => {
  return css`
    position: absolute;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 17px;
    z-index: 2;
    top: ${y}px;
    left: ${x}px;
    border: ${BORDER_STYLE.black};
    color: ${COLOR_STYLE.black};
    font-size: ${FONT_SIZE.xSmall};
    background-color: white;
    padding: 0px;
  `;
};
