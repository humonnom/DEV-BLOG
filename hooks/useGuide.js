import React, { useMemo } from "react";
import useMouse from "@react-hook/mouse-position";
import { css } from "@emotion/react";
import { Guide } from "../components/guide";

const useGuide = ({ comp, guide }) => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const compWithGuide = useMemo(() => {
    return (
      <>
        <div ref={ref} css={RefStyle}>
          {comp}
          {/* x: {mouse.x} */}
          {/* y: {mouse.y} */}
          <Guide inside={guide} x={mouse.x} y={mouse.y} />
        </div>
      </>
    );
  }, [mouse, guide]);

  return { compWithGuide };
};

export default useGuide;

const RefStyle = css`
  div {
    display: none;
  }
  &:hover {
    div {
      display: block;
    }
  }
`;
