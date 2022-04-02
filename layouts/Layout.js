/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { useState } from "react";
import { BORDER_STYLE, COLOR_STYLE, FONT_SIZE } from "../styles/global";

export const HeadConf = () => {
  return (
    <Head>
      <title>Jueun park&apos;s Dev blog</title>
      <meta name='author' content='humonnom' />
      <link rel='icon' href='/favicon.ico' />
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
      <button type='button' onClick={handleClick}>
        {!clicked && <p>~</p>}
        {clicked && <p>-</p>}
      </button>
      <div css={[getDisplay(clicked), NavListContainerStyle]}>
        <p css={NavTitleStyle}>다른 페이지로 가기</p>
        <ul css={NavListStyle}>
          <li>
            <p>
              <Link href='/blog'>DEV BLOG</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href='/projects'>PROJECTS</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href='/contact'>CONTACT</Link>
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
        by <a href='https://github.com/humonnom'>@humonnom</a> 2022,{" "}
        <Link href='/contact'>about this site</Link>
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
  padding: 0 2rem;
`;

const MainStyle = css`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  position: relative;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    background-color: black;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.4rem;
  }
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
  right: 24px;
  top: 24px;
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
