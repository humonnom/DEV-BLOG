import { css } from "@emotion/react";
import React, { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import {
  BORDER_STYLE,
  COLOR_STYLE,
  FlexCenter,
  FONT_SIZE,
} from "../styles/global";

export const Tofu = ({ inside, action, type, guide, baby }) => {
  const text = useMemo(() => {
    return <p>{inside}</p> || "tofu";
  }, [inside]);

  const onClick = useMemo(() => {
    return action ? action : () => {};
  }, [action]);

  const comp = useMemo(() => {
    return (
      <button type="button" onClick={onClick}>
        <div css={[TofuWithBaby, TextStyle(type), TextSize(type)]}>
          {text}
          {baby && baby}
        </div>
      </button>
    );
  }, [text, onClick, baby, type]);

  const { compWithGuide } = useGuide({ comp, style: TofuStyle(type), guide });

  if (guide) {
    return compWithGuide;
  } else {
    return <div css={TofuStyle(type)}>{comp}</div>;
  }
};

export const WhiteTofu = ({ inside, action, guide, baby, mini }) => {
  const type = mini ? "whiteMini" : "white";
  return (
    <Tofu
      inside={inside}
      action={action}
      type={type}
      guide={guide}
      baby={baby}
    />
  );
};
export const BlackTofu = ({ inside, action, guide, baby, mini }) => {
  const type = mini ? "blackMini" : "black";
  return (
    <Tofu
      inside={inside}
      action={action}
      type={type}
      guide={guide}
      baby={baby}
    />
  );
};

const TofuBasicStyle = css`
  ${FlexCenter}
  width: 100%;
  height: 100%;
  padding: 0;
`;

const WhiteTofuStyle = css`
  background-color: ${COLOR_STYLE.white};
  border: ${BORDER_STYLE.black};
  ${TofuBasicStyle}
`;

const BlackTofuStyle = css`
  background-color: ${COLOR_STYLE.black};
  border: ${BORDER_STYLE.white};
  ${TofuBasicStyle}
`;

const TofuStyle = (type) => {
  if (type === "black" || type === "blackMini") {
    return BlackTofuStyle;
  } else {
    return WhiteTofuStyle;
  }
};

const TextStyle = (type) => {
  if (type === "black" || type === "blackMini") {
    return css`
      color: ${COLOR_STYLE.white};
    `;
  } else {
    return css`
      color: ${COLOR_STYLE.black};
    `;
  }
};

const TextSize = (type) => {
  if (type === "blackMini" || type === "whiteMini") {
    return css`
      font-size: ${FONT_SIZE.xSmall};
    `;
  } else
    return css`
      font-size: ${FONT_SIZE.small};
    `;
};

const TofuWithBaby = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
