import { css } from "@emotion/react";
import React, { useMemo } from "react";
import Link from "next/link";
import useGuide from "../hooks/useGuide";
import { BlackPebble } from "./pebble";
import { getBackground, getBorder } from "../hooks/utils";
import { FONT_SIZE } from "../styles/global";

export const Square = ({ title, link, tags, guide, white }) => {
  const tagsComp = useMemo(() => {
    return tags.map((tag) => {
      return (
        <li key={Math.random()} css={TagStyle}>
          <BlackPebble inside={tag} mini={true} />
        </li>
      );
    });
  }, [tags]);

  const comp = useMemo(() => {
    return (
      <Link href={link} passHref>
        <div css={SquareStyle}>
          <p css={[TitleStyle, getColor(white)]}>{title}</p>
          <ul css={TagsStyle}>{tagsComp}</ul>
        </div>
      </Link>
    );
  }, [tagsComp, link, title, white]);

  const { compWithGuide } = useGuide({
    comp,
    style: [SquareContainerStyle, getBackground(white), getBorder(white)],
    guide,
  });

  if (guide) {
    return compWithGuide;
  } else {
    return (
      <div css={[SquareContainerStyle, getBackground(white), getBorder(white)]}>
        {comp}
      </div>
    );
  }
};

const SquareContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30px;
`;

const SquareStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TagsStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TagStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
`;
const TitleStyle = css`
  display: flex;
  margin: 3px;
  width: 100%;
  font-size: ${FONT_SIZE.small};
`;

const getColor = (white) => {
  if (white) {
    return css`
      color: white;
      &:hover {
        background-color: white;
        color: black;
      }
    `;
  } else {
    return css`
      color: black;
      &:hover {
        background-color: black;
        color: white;
      }
    `;
  }
};
