import { css } from "@emotion/react";
import React, { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { BORDER_STYLE, COLOR_STYLE, FlexCenter } from "../styles/global";

export const Pebble = ({ inside, action, type, guide, baby }) => {
  const text = <p css={TextStyle(type)}>{inside}</p> || "pebble";
  const onClick = action ? action : () => {};

  const comp = (
    <button type="button" onClick={onClick}>
      <div css={PebbleWithBaby}>
        {text}
        {baby && baby}
      </div>
    </button>
  );

  const { compWithGuide } = useGuide({ comp, style: PebbleStyle(type), guide });

  if (guide) {
    return compWithGuide;
  } else {
    return <div css={PebbleStyle(type)}>{comp}</div>;
  }
};

export const WhitePebble = ({ inside, action, guide, baby }) => {
  return (
    <Pebble
      inside={inside}
      action={action}
      type="white"
      guide={guide}
      baby={baby}
    />
  );
};
export const BlackPebble = ({ inside, action, guide, baby }) => {
  return (
    <Pebble
      inside={inside}
      action={action}
      type="black"
      guide={guide}
      baby={baby}
    />
  );
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
  border: ${BORDER_STYLE.white};
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

const PebbleWithBaby = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
