import React, { useMemo } from "react";
import useMouse from "@react-hook/mouse-position";
import { css } from "@emotion/react";
import { Guide } from "../components/guide";
import { FlexCenter } from "../styles/global";
import { useGetView } from "./utils";

const useGuide = ({ comp, style, guide }) => {
  const ref = React.useRef(null);
  const { isMobile } = useGetView();
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
          ${FlexCenter}
          position: relative;
          width: 100%;
        `}
      >
        <div ref={ref} css={[style, RefStyle]}>
          {comp}
        </div>
        {!isMobile && (
          <div className="guide">
            <Guide inside={guide} x={x} y={y} />
          </div>
        )}
      </div>
    );
  }, [x, y, guide, style, comp, isMobile]);

  return { compWithGuide };
};

export default useGuide;

const RefStyle = css`
  & .guide {
    display: none;
  }
  &:hover {
    & .guide {
      display: block;
    }
  }
`;
