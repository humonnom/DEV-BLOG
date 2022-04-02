import { css } from "@emotion/react";
import React, { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { BORDER_STYLE, COLOR_STYLE, FlexCenter } from "../styles/global";

export const Pebble = ({ inside, action, type, guide }) => {
  const text = <p css={TextStyle(type)}>{inside}</p> || "pebble";
  const onClick = action ? action : () => {};

  const comp = (
    <button type='button' onClick={onClick}>
      {text}
    </button>
  );

  const { compWithGuide } = useGuide({ comp, style: PebbleStyle(type), guide });

  if (guide) {
    return compWithGuide;
  } else {
    return <div css={PebbleStyle(type)}>{comp}</div>;
  }
};

export const WhitePebble = ({ inside, action, guide }) => {
  return <Pebble inside={inside} action={action} type='white' guide={guide} />;
};
export const BlackPebble = ({ inside, action, guide }) => {
  return <Pebble inside={inside} action={action} type='black' guide={guide} />;
};

const PebbleBasicStyle = css`
  ${FlexCenter}
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const WhitePebbleStyle = css`
  background-color: ${COLOR_STYLE.white};
  border: ${BORDER_STYLE.black};
  ${PebbleBasicStyle}
`;

const BlackPebbleStyle = css`
  background-color: ${COLOR_STYLE.black};
  ${PebbleBasicStyle}
`;

const PebbleStyle = (type) => {
  if (type === "black") {
    return BlackPebbleStyle;
  } else {
    return WhitePebbleStyle;
  }
};

const TextStyle = (type) => {
  if (type === "black") {
    return css`
      color: ${COLOR_STYLE.white};
    `;
  } else {
    return css`
      color: ${COLOR_STYLE.black};
    `;
  }
};
