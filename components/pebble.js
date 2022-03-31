import { css } from "@emotion/react";
import React, { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { BORDER_STYLE, COLOR_STYLE } from "../styles/global";

export const Pebble = ({ inside, action, style, guide }) => {
  const text = <p>{inside}</p> || "pebble";
  const onClick = action ? action : () => {};

  const comp = (
    <button type="button" css={[style]} onClick={onClick}>
      {text}
    </button>
  );

  const { compWithGuide } = useGuide({ comp, guide });

  if (guide) {
    return compWithGuide;
  } else {
    return comp;
  }
};

export const WhitePebble = ({ inside, action, guide }) => {
  return (
    <Pebble
      inside={inside}
      action={action}
      style={WhitePebbleStyle}
      guide={guide}
    />
  );
};
export const BlackPebble = ({ inside, action, guide }) => {
  return (
    <Pebble
      inside={inside}
      action={action}
      style={BlackPebbleStyle}
      guide={guide}
    />
  );
};

const PebbleStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1px 13px;
  border-radius: 20px;
`;

const WhitePebbleStyle = css`
  ${PebbleStyle};
  background-color: ${COLOR_STYLE.white};
  border: ${BORDER_STYLE.black};
  color: ${COLOR_STYLE.black};
`;

const BlackPebbleStyle = css`
  ${PebbleStyle};
  background-color: ${COLOR_STYLE.black};
  color: ${COLOR_STYLE.white};
`;
