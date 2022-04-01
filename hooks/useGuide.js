import React, { useMemo } from "react";
import useMouse from "@react-hook/mouse-position";
import { css } from "@emotion/react";
import { Guide } from "../components/guide";

const useGuide = ({ comp, style, guide }) => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const x = useMemo(() => {
    return parseInt(mouse.x);
  }, [mouse.x]);
  const y = useMemo(() => {
    return parseInt(mouse.y);
  }, [mouse.y]);

  const compWithGuide = useMemo(() => {
    return (
      <div
        css={css`
          position: relative;
        `}
      >
        <div ref={ref} css={[style, RefStyle]}>
          {comp}
        </div>
        <Guide inside={guide} x={x} y={y} />
      </div>
    );
  }, [x, y, guide]);

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
