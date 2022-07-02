import { Container } from "../layouts/Layout";
import useGuide from "../hooks/useGuide";
import { useMemo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { FONT_SIZE } from "../styles/global";
import { BlackTofu } from "../components/tofu";

export default function Projects() {
  const movieComp = (
    <Link href="/movie-mate" passHref>
      <div css={compStyle}>
        <BlackTofu inside="Movie Mate" />
      </div>
    </Link>
  );
  const onitComp = (
    <Link href="https://iamonit.kr/main" passHref>
      <div css={compStyle}>
        <BlackTofu inside="Onit" />
      </div>
    </Link>
  );
  const { compWithGuide: movieCompWithGuide } = useGuide({
    comp: movieComp,
    guide: "← move to mm",
  });
  const { compWithGuide: onitCompWithGuide } = useGuide({
    comp: onitComp,
    guide: "← move to onit",
  });

  const Contents = useMemo(() => {
    return (
      <>
        <div css={ProjectsBodyStyle}>
          <div>{movieCompWithGuide}</div>
          <p
            css={css`
              font-size: ${FONT_SIZE.small};
            `}
          >
            영화를 같이 볼 친구를 구할 수 있는 서비스(alpha version)
          </p>
        </div>
        <div css={ProjectsBodyStyle}>
          <div>{onitCompWithGuide}</div>
          <p
            css={css`
              font-size: ${FONT_SIZE.small};
            `}
          >
            예술가를 위한 SNS
          </p>
        </div>
      </>
    );
  }, [movieCompWithGuide, onitCompWithGuide]);

  return <Container contents={Contents} />;
}

const ProjectsBodyStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const compStyle = css`
  width: 200px;
`;
