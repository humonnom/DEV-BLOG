import { css } from "@emotion/react";
import { useMemo } from "react";
import Contact from "../components/contact";
import { Container } from "../layouts/Layout";
import { FONT_SIZE } from "../styles/global";
export default function Home() {
  const Contents = useMemo(() => {
    return (
      <>
        <p css={PageTitleStyle}>○ Jueun Park</p>
        {/* <div css={MainContents} /> */}
        <Contact />
      </>
    );
  }, []);
  return <Container contents={Contents} />;
}

const PageTitleStyle = css`
  position: absolute;
  top: 10px;
  left: 10px;
   font-size: ${FONT_SIZE.medium};
`;

// const MainContents = css`
//   height: 250px;
//   width: 500px;
//   background-size: cover;
//   background-image: url("https://www.juepark.com/_next/image?url=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR1280x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%253A%252F%252Fblog.kakaocdn.net%252Fdn%252Fdfb1YY%252FbtqMuQwi27X%252FKfz8oroxpRpmyYp38pikMK%252Fimg.png&w=1080&q=75");
// `;
