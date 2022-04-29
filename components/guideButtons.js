import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { WhitePebble } from "./pebble";

function GuideButtons({ list }) {
  const comp = useMemo(() => {
    return (
      <div css={ButtonContainerStyle}>
        {list.map((element) => {
          return (
            <div key={Math.random()} css={ButtonStyle}>
              <WhitePebble inside={element.inside} action={element.action} />
            </div>
          );
        })}
      </div>
    );
  }, [list]);
  return comp;
}
export default GuideButtons;

const ButtonContainerStyle = css`
  position: absolute;
  display: flex;
  justify-content: end;
  right: 10px;
  width: 100%;
  align-items: center;
  top: 4vh;
  height: 4vh;
  z-index: 999;
`;
const ButtonStyle = css`
  height: 2vh;
  width: 50px;
  margin: 3px;
`;
