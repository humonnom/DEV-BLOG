/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { useMemo } from "react";
import { COLOR_STYLE, FlexCenter, FONT_SIZE } from "../styles/global";

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
                  <div css={NavButtonStyle}>{link.label}</div>
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

const NavStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 2vh;
  z-index: 99;
  background-color: ${COLOR_STYLE.black};
`;

const NavButtonStyle = css`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 70px;
  height: 2vh;
  color: white;
  font-size: ${FONT_SIZE.medium};
`;
