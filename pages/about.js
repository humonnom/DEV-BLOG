import { ImageBox, TextBox } from "../components/contents";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
import React from "react";
import { css } from "@emotion/react";
import { Square } from "../components/square";
import {
  BORDER_STYLE,
  COLOR_STYLE,
  FlexCenter,
  FONT_SIZE,
} from "../styles/global";
import { useGetBorderRadius } from "../hooks/utils";

export default function About() {
  const Contents = (
    <div css={[FlexCenter]}>
      <div css={PageTitle}>
        <Title inside="About this site" />
      </div>
      <div css={[FlexCenter]}>
        <div css={[SectionStyle, useGetBorderRadius()]}>
          <div css={PebbleContainer}>
            <p css={SectionTitleStyle}>:: PEBBLE ::</p>
            <div>
              <WhitePebble inside="this is white pebble" />
            </div>
            <div>
              <WhitePebble inside="default pebble" />
            </div>
            <div>
              <BlackPebble inside="normal black pebble" />
            </div>
            <div>
              <BlackPebble
                inside="i have action"
                action={() => alert("you clicked black pebble x)")}
              />
            </div>
            <div>
              <WhitePebble
                inside="pebble with guide"
                guide="this is guide message"
              />
            </div>
          </div>
        </div>

        <div css={[SectionStyle, useGetBorderRadius()]}>
          <p css={SectionTitleStyle}>:: TITLE ::</p>
          <div>
            <Title inside="Hello" white={true} />
          </div>
          <div>
            <Title
              inside="this is covered type"
              hasBorder={true}
              white={true}
            />
          </div>
          <div>
            <Title inside="this is covered type" hasBorder={true} />
          </div>
        </div>
        <div css={[SectionStyle, useGetBorderRadius()]}>
          <p css={SectionTitleStyle}>:: TEXT BOX ::</p>

          <div>
            <TextBox inside="simple text box" />
          </div>
          <div>
            <TextBox
              ascii={true}
              white={true}
              inside="t h i s       i s       
              a s c i i       c o d e       b o x"
            />
          </div>
          <div>
            <TextBox
              widthType="narrow"
              inside="
          narrow one"
            />
          </div>
          <div>
            <TextBox
              widthType="wide"
              white={true}
              inside="
          wide one"
            />
          </div>
        </div>
        <div css={[SectionStyle, useGetBorderRadius()]}>
          <p css={SectionTitleStyle}>:: IMAGE BOX ::</p>
          <ImageBox white={true} />
        </div>
        <div css={[SectionStyle, useGetBorderRadius()]}>
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
const SectionStyle = css`
  ${FlexCenter}
  height: 100%;
  max-width: 450px;
  padding: 70px 0px 100px 0px;
  margin: 0px 0px;
  border: ${BORDER_STYLE.white};
  background-color: black;
  div {
    margin: 5px 0px;
  }
`;

const SectionTitleStyle = css`
  color: ${COLOR_STYLE.white};
  font-size: ${FONT_SIZE.medium};
  margin-bottom: 50px;
`;

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
