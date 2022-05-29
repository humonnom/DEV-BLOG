import { css } from "@emotion/react";
import { useMemo } from "react";
import { Container } from "../layouts/Layout";
export default function Home() {
  const Contents = useMemo(() => {
    return (
      <>
        <h2 css={PageTitleStyle} >.Intro</h2>
        <p>메인 페이지 준비중</p>
      </>
    );
  }, []);
  return <Container contents={Contents} />;
}

const PageTitleStyle = css`
  position: absolute;
  top: 10px;
  left: 10px;
`;