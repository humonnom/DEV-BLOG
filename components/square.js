import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { Title } from "./title";
import Link from "next/link";
import useGuide from "../hooks/useGuide";
import { BORDER_STYLE } from "../styles/global";
import { BlackPebble } from "./pebble";

export const Square = ({ title, link, tags, guide }) => {
  const tagsComp = useMemo(() => {
    return tags.map((tag) => {
      console.log(tag);
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
          <Title inside={title} padding={0} hasBorder={false} />
          <ul css={TagsStyle}>{tagsComp}</ul>
        </div>
      </Link>
    );
  }, [tagsComp]);

  const { compWithGuide } = useGuide({
    comp,
    style: SquareContainerStyle,
    guide,
  });

  if (guide) {
    return compWithGuide;
  } else {
    return <div css={SquareContainerStyle}>{comp}</div>;
  }
};

const SquareContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  border: ${BORDER_STYLE.black};
  width: 280px;
  height: 200px;
`;

const SquareStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 80%;
  height: 65%;
`;

const TagsStyle = css`
  display: flex;
  width: 100%;
  height: 30vh;
  align-items: center;
  justify-content: space-around;
`;

const TagStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
`;
