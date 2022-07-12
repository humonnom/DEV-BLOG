/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { useMemo } from "react";
import { COLOR_STYLE, FlexCenter, FONT_SIZE } from "../styles/global";

export const HeadConf = () => {
  return (
    <Head>
      <title>J u e p a r k</title>
      <meta name="author" content="humonnom" />
      <meta property="og:title" content="Juepark Dev Blog"/>
      <meta property="og:description" content="틈틈이 튼튼히"/>
      <meta property="og:image" content="{{ url_for('static', filename='ogimg.jpeg')}}"/>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
  );
};

export const Nav = () => {
  const linkList = useMemo(() => {
    const list = [
      { href: "/", label: "○" },
      { href: "/blog", label: "LOGS" },
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
  min-height: 100vh;
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
