/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { useState } from "react";
import {
  BORDER_STYLE,
  COLOR_STYLE,
  FlexCenter,
  FONT_SIZE,
} from "../styles/global";

export const HeadConf = () => {
  return (
    <Head>
      <title>Jueun park&apos;s Dev blog</title>
      <meta name="author" content="humonnom" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div css={[NavStyle]}>
      <button type="button" css={NavButtonStyle} onClick={handleClick}>
        {!clicked && <p>~</p>}
        {clicked && <p>-</p>}
      </button>
      <div css={[getDisplay(clicked), NavListContainerStyle]}>
        <p css={NavTitleStyle}>다른 페이지로 가기</p>
        <ul css={NavListStyle}>
          <li>
            <p>
              <Link href="/blog">DEV BLOG</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/projects">PROJECTS</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/contact">CONTACT</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer css={FooterStyle}>
      <p>
        by <a href="https://github.com/humonnom">@humonnom</a> 2022,{" "}
        <Link href="/about">about this site</Link>
      </p>
    </footer>
  );
};

const Header = () => {
  return (
    <>
      <Nav />
    </>
  );
};

export const Container = ({ contents }) => {
  return (
    <div css={ContainerStyle}>
      <HeadConf />
      <Header />
      <main css={MainStyle}>{contents}</main>
      <Footer />
    </div>
  );
};

const ContainerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
`;

const MainStyle = css`
  min-height: 70vh;
  padding: 4rem 0;
  ${FlexCenter}
`;

const FooterStyle = css`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const NavStyle = css`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 10vh;
`;

const NavButtonStyle = css`
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 30px;
  top: 30px;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background-color: black;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.4rem;
`;

const getDisplay = (open) => {
  if (open) {
    return css`
      display: flex;
    `;
  } else {
    return css`
      display: none;
    `;
  }
};

const NavListContainerStyle = css`
  position: absolute;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 180px;
  width: 140px;
  z-index: 2;
  top: 55px;
  right: 55px;
  border: ${BORDER_STYLE.black};
  color: ${COLOR_STYLE.black};
  font-size: ${FONT_SIZE.small};
  background-color: white;
  padding: 20px 25px;
`;

const NavTitleStyle = css`
  margin: 15px auto;
  text-align: center;
`;

const NavListStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  li {
    p {
      padding: 11px;
      margin: 0px;
    }
  }
`;
