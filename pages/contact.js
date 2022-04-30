import { css } from "@emotion/react";
import Link from "next/link";
import { BlackTofu } from "../components/tofu";
import { Container } from "../layouts/Layout";
import { FONT_SIZE } from "../styles/global";
import { ContactForm } from "../components/contactForm";

export default function Contact() {
  const Contents = (
    <>
      <div css={ContentsContainerStyle}>
        <div css={InfoContainerStyle}>
          <p css={NameStyle}>Jueun Park</p>
          <div>
            <div css={InfoStyle}>
              <BlackTofu inside="Software Developer" />
            </div>
            <div css={InfoStyle}>
              <BlackTofu inside="juepark42@gmail.com" />
            </div>
            <div css={InfoStyle}>
              <Link href="https://github.com/humonnom">
                <a>
                  <BlackTofu inside="→ Github link" />
                </a>
              </Link>
            </div>
            <div css={InfoStyle}>
              <Link href="/about">
                <a>
                  <BlackTofu inside="→ about this site" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div css={FormContainerStyle}>
          <ContactForm />
        </div>
      </div>
    </>
  );
  return <Container contents={Contents} />;
}

const NameStyle = css`
  font-size: ${FONT_SIZE.medium};
`;
const InfoStyle = css`
  width: 200px;
  height: 22px;
`;

const ContentsContainerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const InfoContainerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormContainerStyle = css`
  margin: 0;
`;
