import { css } from "@emotion/react";
import React, { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { BORDER_STYLE, COLOR_STYLE } from "../styles/global";

export const Pebble = ({ inside, action, type, guide }) => {
  const text = <p css={TextStyle(type)}>{inside}</p> || "pebble";
  const onClick = action ? action : () => {};

  const comp = (
    <button type="button" onClick={onClick}>
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
  return <Pebble inside={inside} action={action} type="white" guide={guide} />;
};
export const BlackPebble = ({ inside, action, guide }) => {
  return <Pebble inside={inside} action={action} type="black" guide={guide} />;
};

const PebbleBasicStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1px 13px;
  border-radius: 20px;
`;

const PebbleStyle = (type) => {
  if (type === "black") {
    return BlackPebbleStyle;
  } else {
    return WhitePebbleStyle;
  }
};

const WhitePebbleStyle = css`
  ${PebbleBasicStyle}
  background-color: ${COLOR_STYLE.white};
  border: ${BORDER_STYLE.black};
  ${"" /* color: ${COLOR_STYLE.black}; */}
`;

const BlackPebbleStyle = css`
  ${PebbleBasicStyle}
  background-color: ${COLOR_STYLE.black};
  ${"" /* color: ${COLOR_STYLE.white}; */}
`;

const TextStyle = (type) => {
  if (type === "black") {
    return BlackTextStyle;
  } else {
    return WhiteTextStyle;
  }
};

const WhiteTextStyle = css`
  color: ${COLOR_STYLE.black};
`;

const BlackTextStyle = css`
  color: ${COLOR_STYLE.white};
`;
