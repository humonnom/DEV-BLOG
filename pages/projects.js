import { Container } from "../layouts/Layout";
import useGuide from "../hooks/useGuide";
import { useMemo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { COLOR_STYLE, FONT_SIZE } from "../styles/global";

export default function Projects() {
  const movieComp = (
    <Link href="/movie-mate" passHref>
      <p>movie mate</p>
    </Link>
  );
  const { compWithGuide: movieCompWithGuide } = useGuide({
    comp: movieComp,
    guide: "← move to mm",
  });

  const Contents = useMemo(() => {
    return (
      <div css={ProjectsBodyStyle}>
        {/* <div css={forFunStyle}>{compWithGuide}</div> */}
        <div css={forFunStyle}>{movieCompWithGuide}</div>
      </div>
    );
  }, [movieCompWithGuide]);

  return <Container contents={Contents} />;
}

const ProjectsBodyStyle = css`
  min-height: 50vh;
`;
const forFunStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  height: 20px;
  width: 70px;
  background-color: ${COLOR_STYLE.black};
  color: white;
  font-size: ${FONT_SIZE.small};
`;
