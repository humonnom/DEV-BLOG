import { css } from "@emotion/react";
import Link from "next/link";
import { useMemo } from "react";
import { BlackTofu } from "../components/tofu";
import useGuide from "../hooks/useGuide";
import { Container } from "../layouts/Layout";
import { FONT_SIZE } from "../styles/global";
export default function Home() {
  const movieComp = (
    <Link href="/movie-mate" passHref>
      <div css={css`width: 80px`}>
        <BlackTofu inside="Movie Mate" />
      </div>
    </Link>
  );

  const { compWithGuide: movieCompWithGuide } = useGuide({
    comp: movieComp,
    guide: "← move to movie mate page",
  });

  const Contents = useMemo(() => {
    return (
      <>
        <div css={PageTitleStyle}>
            <p>○ Jueun Park</p>
            {movieCompWithGuide}
        </div>
      </>
    );
  }, [movieCompWithGuide]);
  return <Container contents={Contents} />;
}

const PageTitleStyle = css`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: ${FONT_SIZE.medium};
`;
