import { css } from "@emotion/react";
import Link from "next/link";
import { BlackTofu, WhiteTofu } from "../components/tofu";
import { Container } from "../layouts/Layout";
import { FONT_SIZE } from "../styles/global";

export default function Contact() {
  const Contents = (
    <>
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
          <BlackTofu inside="→ about this site" />
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
