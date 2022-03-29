import { css } from "@emotion/react";
import { BORDER_STYLE } from "../styles/global";

export const Guide = ({ inside, invisible }) => {
  return (
    <>
      <div css={[GuideContainerStyle, getVisible(invisible)]}>
        <p>{inside}</p>
      </div>
    </>
  );
};

const getVisible = (invisible) => {
  if (invisible) {
    return css`
      display: none;
    `;
  }
  return css``;
};
const GuideContainerStyle = css`
  display: flex;
  justify-content: center;
  border: ${BORDER_STYLE.black};
  padding: 3px;
`;
