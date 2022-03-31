/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { css } from "@emotion/react";
import { useState } from "react";
// import { Guide } from "../components/guide";

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
      <button type="button" onClick={handleClick}>
        {!clicked && <p>~</p>}
        {clicked && <p>-</p>}
      </button>
      {/* {clicked && <Guide inside="nav" />} */}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer css={FooterStyle}>
      <p>
        by <a href="https://github.com/humonnom">@humonnom</a> 2022, about this
        site
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
