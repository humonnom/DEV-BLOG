/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { useMemo, useState } from "react";
import {
  BORDER_STYLE,
  COLOR_STYLE,
  FlexCenter,
  FONT_SIZE,
} from "../styles/global";
import { getNavDesc, getNavList } from "../hooks/utils";
import { Tofu } from "../components/tofu";

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

  const linkList = useMemo(() => {
    const list = [
      { href: "/", label: "HOME" },
      { href: "/blog", label: "BLOG" },
      { href: "/projects", label: "PROJECTS" },
      { href: "/contact", label: "CONTACT" },
    ];
    return (
      <ul css={NavStyle}>
        {list.map((link) => {
          return (
            <div key={Math.random()}>
              <Link href={link.href}>
                <a>
                  <div css={NavButtonStyle}>
                    <Tofu inside={link.label} />
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </ul>
    );
  }, []);
  return <div css={[NavStyle]}>{linkList}</div>;
};

export const Footer = () => {
  return <footer css={FooterStyle}></footer>;
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
  background-color: white;
`;

const MainStyle = css`
  min-height: 70vh;
  padding: 4rem 0;
  ${FlexCenter}
`;

const FooterStyle = css`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
`;

const NavStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  z-index: 99;
  background-color: ${COLOR_STYLE.black};
`;

const NavButtonStyle = css`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 70px;
  height: 13px;
  color: white;
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
  min-height: 180px;
  width: 140px;
  z-index: 99;
  top: 40px;
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
      text-align: center;
    }
  }
`;
