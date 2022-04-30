import { css } from "@emotion/react";
import { useMemo } from "react";
import useGuide from "../hooks/useGuide";
import { Container } from "../layouts/Layout";
import { COLOR_STYLE, FlexCenter, FONT_SIZE } from "../styles/global";
export default function Home() {
  const name = useMemo(() => {
    return "🀆🀆🀆";
  }, []);
  const { compWithGuide: nameWithGuide } = useGuide({
    comp: name,
    style: nameStyle,
    guide: "jueun park",
  });
  const job = useMemo(() => {
    return "- - - - -/ - -";
  }, []);
  const { compWithGuide: jobWithGuide } = useGuide({
    comp: job,
    style: jobStyle,
    guide: "software developer",
  });
  const phone = useMemo(() => {
    return "phone";
  }, []);
  const { compWithGuide: phoneWithGuide } = useGuide({
    comp: phone,
    style: phoneStyle,
    guide: "010 0000 0000",
  });
  const email = useMemo(() => {
    return "email";
  }, []);
  const { compWithGuide: emailWithGuide } = useGuide({
    comp: email,
    style: emailStyle,
    guide: "juepark@gmail.com",
  });

  const Contents = useMemo(() => {
    return (
      <>
        <div
          css={css`
            ${FlexCenter}
          `}
        >
          <div css={NameCardContainer}>
            {nameWithGuide}
            {jobWithGuide}
            {phoneWithGuide}
            {emailWithGuide}
          </div>
          <pre />
          {/* <div css={ListStyle}>
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
          </div> */}
        </div>
      </>
    );
  }, [nameWithGuide, phoneWithGuide, emailWithGuide, jobWithGuide]);
  return <Container contents={Contents} />;
}

// const ListStyle = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ListTextStyle = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${COLOR_STYLE.black};
//   padding: 2px;
//   margin: 10px auto;
//   width: 150px;
//   font-size: ${FONT_SIZE.medium};
// `;

const nameStyle = css`
  position: absolute;
  top: 20px;
  left: 25px;
`;
const jobStyle = css`
  position: absolute;
  top: 45px;
  right: 25px;
`;
const phoneStyle = css`
  position: absolute;
  top: 90px;
  left: 25px;
`;
const emailStyle = css`
  position: absolute;
  top: 104px;
  left: 25px;
`;
const NameCardContainer = css`
  width: 271px;
  height: 140px;
  font-size: ${FONT_SIZE.small};
  background-color: ${COLOR_STYLE.black};
  color: ${COLOR_STYLE.white};
`;
