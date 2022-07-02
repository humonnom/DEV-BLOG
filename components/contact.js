import { css } from "@emotion/react";
// import { BlackTofu } from "./tofu";
// import { FONT_SIZE } from "../styles/global";
import { ContactForm } from "./contactForm";
// import Link from "next/link";

export default function Contact() {
  return (
    <>
        <div css={InfoContainerStyle}>
          {/* <p css={NameStyle}>Jueun Park</p> */}
              {/*<div>
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
          </div>*/}
        </div>
        <div css={FormContainerStyle}>
          <ContactForm />
        </div>
    </>
  );
}

// const NameStyle = css`
//   font-size: ${FONT_SIZE.medium};
// `;
// const InfoStyle = css`
//   width: 200px;
//   height: 22px;
// `;

const InfoContainerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainerStyle = css`
  margin: 0;
`;