import { css } from "@emotion/react";
import Link from "next/link";
import { useMemo } from "react";
import { TextBox } from "../components/contents";
import { Container } from "../layouts/Layout";
import { COLOR_STYLE, FlexCenter, FONT_SIZE } from "../styles/global";
export default function Home() {
  const Contents = useMemo(() => {
    return (
      <>
        <div
          css={css`
            ${FlexCenter}
          `}
        >
          <TextBox
            inside={`        
     🀆🀆🀆
                                                       - - - - -/ - -
     

     phone
     email
        `}
            ascii={true}
            white={true}
          />
          <pre />
          <div css={ListStyle}>
            <Link href="/blog" passHref>
              <p css={ListTextStyle}>BLOG</p>
            </Link>
          </div>
          <div css={ListStyle}>
            <Link href="/projects" passHref>
              <p css={ListTextStyle}>PROJECTS</p>
            </Link>
          </div>
          <div css={ListStyle}>
            <Link href="/contact" passHref>
              <p css={ListTextStyle}>CONTACT</p>
            </Link>
          </div>
        </div>
      </>
    );
  }, []);
  return <Container contents={Contents} />;
}

const ListStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR_STYLE.black};
  padding: 2px;
  margin: 10px auto;
  width: 150px;
  font-size: ${FONT_SIZE.medium};
`;
