import { ImageBox, TextBox } from "../components/contents";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
import React from "react";
import { css } from "@emotion/react";
import { Square } from "../components/square";
import { FlexCenter } from "../styles/global";
import { getRandomBorderRadius } from "../hooks/utils";
import { SectionStyle, SectionTitleStyle } from "../styles/section";

export default function About() {
  const Contents = (
    <div css={[FlexCenter]}>
      <div css={PageTitle}>
        <Title inside="Components of this site" />
      </div>
      <div css={[FlexCenter]}>
        <div css={[SectionStyle, getRandomBorderRadius()]}>
          <div css={PebbleContainer}>
            <p css={SectionTitleStyle}>:: PEBBLE ::</p>
            <div>
              <WhitePebble inside="this is a white pebble" />
            </div>
            <div>
              <WhitePebble inside="a default pebble" />
            </div>
            <div>
              <BlackPebble inside="a normal black pebble" />
            </div>
            <div>
              <BlackPebble
                inside="i have an action"
                action={() => alert("you clicked a black pebble x)")}
              />
            </div>
            <div>
              <WhitePebble
                inside="a pebble with a guide"
                guide="this is a guide message"
              />
            </div>
          </div>
        </div>

        <div css={[SectionStyle, getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: TITLE ::</p>
          <div>
            <Title inside="Hello to you" white={true} />
          </div>
          <div>
            <Title
              inside="this is a covered type title"
              hasBorder={true}
              white={true}
            />
          </div>
          <div>
            <Title inside="this is a covered type title" hasBorder={true} />
          </div>
        </div>
        <div css={[SectionStyle, getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: TEXT BOX ::</p>

          <div>
            <TextBox inside="a simple text box" />
          </div>
          <div>
            <TextBox
              ascii={true}
              white={true}
              inside="t h i s       i s      a n 
              a s c i i       c o d e       b o x"
            />
          </div>
          <div>
            <TextBox
              widthType="narrow"
              inside="
          a narrow one"
            />
          </div>
          <div>
            <TextBox
              widthType="wide"
              white={true}
              inside="
          a wide one"
            />
          </div>
        </div>
        <div css={[SectionStyle, getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: IMAGE BOX ::</p>
          <ImageBox
            white={true}
            src="https://onitbucket.s3.ap-northeast-2.amazonaws.com/image/25%222022-03-15T15:53:22.612Z%22.jpeg"
          />
        </div>
        <div css={[SectionStyle, getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: SQUARE ::</p>
          <Square
            title="Article"
            link="/about"
            tags={["js", "react"]}
            guide="누르면 자세한 내용을 볼 수 있습니다."
            white={true}
          />
          <Square title="Article2" link="/about" tags={["js", "react"]} />
        </div>
      </div>
    </div>
  );
  return <Container contents={Contents} />;
}

const PebbleContainer = css`
  ${FlexCenter}
  width: 30vw;
  div {
    width: 20vw;
  }
`;

const PageTitle = css`
  margin: 30px;
`;
