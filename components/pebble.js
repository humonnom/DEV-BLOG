import { css } from "@emotion/react";
import { BORDER_STYLE, COLOR_STYLE } from "../styles/global";

export const Pebble = ({ inside, action, style }) => {
  const text = <p>{inside}</p> || "pebble";
  const onClick = action ? action : () => {};
  return (
    <button type="button" css={[style]} onClick={onClick}>
      {text}
    </button>
  );
};

export const WhitePebble = ({ inside, action }) => {
  return <Pebble inside={inside} action={action} style={WhitePebbleStyle} />;
};
export const BlackPebble = ({ inside, action }) => {
  return <Pebble inside={inside} action={action} style={BlackPebbleStyle} />;
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
