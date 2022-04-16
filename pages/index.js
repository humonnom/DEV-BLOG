import { css } from "@emotion/react";
import Link from "next/link";
import { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { Container } from "../layouts/Layout";
import { COLOR_STYLE, FlexCenter, FONT_SIZE } from "../styles/global";
export default function Home() {
  const comp = (
    <Link href="/website" passHref>
      <p>website</p>
    </Link>
  );
  const { compWithGuide } = useGuide({ comp, guide: "← click to register" });
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
      <>
        <div
          css={css`
            ${FlexCenter}
          `}
        >
          <div css={ListStyle}>
            <Link href="/blog" passHref>
              <p css={ListTextStyle}>BLOG</p>
            </Link>
          </div>
          <div css={ListStyle}>
            <Link href="/projects" passHref>
              <p css={ListTextStyle}>PROJECTS</p>
            </Link>
          </div>
          <div css={ListStyle}>
            <Link href="/contact" passHref>
              <p css={ListTextStyle}>CONTACT</p>
            </Link>
          </div>
          <div css={ListStyle}>
            <Link href="/about" passHref>
              <p css={ListTextStyle}>ABOUT THIS SITE</p>
            </Link>
          </div>
          <pre />
          <div css={forFunStyle}>{compWithGuide}</div>
          <div css={forFunStyle}>{movieCompWithGuide}</div>
        </div>
      </>
    );
  }, [compWithGuide, movieCompWithGuide]);
  return <Container contents={Contents} />;
}

const forFunStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px auto;
  height: 20px;
  width: 70px;
  background-color: ${COLOR_STYLE.black};
  color: white;
  font-size: ${FONT_SIZE.xSmall};
`;

const ListStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR_STYLE.black};
  padding: 2px;
  margin: 10px auto;
  width: 150px;
  font-size: ${FONT_SIZE.small};
`;
