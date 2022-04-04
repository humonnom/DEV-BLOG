import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { Title } from "./title";
import Link from "next/link";
import useGuide from "../hooks/useGuide";
import { BlackPebble } from "./pebble";
import { getBackground, getBorder } from "../hooks/utils";

export const Square = ({ title, link, tags, guide, white }) => {
  const tagsComp = useMemo(() => {
    return tags.map((tag) => {
      return (
        <li key={Math.random()} css={TagStyle}>
          <BlackPebble inside={tag} />
        </li>
      );
    });
  }, [tags]);

  const comp = useMemo(() => {
    return (
      <Link href={link} passHref>
        <div css={SquareStyle}>
          <div />
          <Title inside={title} padding={0} hasBorder={false} white={white} />
          <ul css={TagsStyle}>{tagsComp}</ul>
        </div>
      </Link>
    );
  }, [tagsComp, link, white, title]);

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
  width: 280px;
  height: 200px;
`;

const SquareStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TagsStyle = css`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
`;

const TagStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
`;
