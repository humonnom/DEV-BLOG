import { css } from "@emotion/react";
import { useMemo } from "react";
import { BORDER_STYLE } from "../styles/global";

export const Guide = ({ inside, invisible, x, y }) => {
  const comp = useMemo(() => {
    return (
      <>
        <div
          css={[
            GuideContainerStyle(parseInt(x), parseInt(y)),
            getVisible(invisible),
          ]}
        >
          <p>{inside}</p>
        </div>
      </>
    );
  }, [x, y]);

  return comp;
};

const getVisible = (invisible) => {
  if (invisible) {
    return css`
      display: none;
    `;
  }
  return css``;
};
const GuideContainerStyle = (x, y) => {
  return css`
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    border: ${BORDER_STYLE.black};
    background-color: red;
    padding: 0px;
  `;
};
