import { ImageBox, TextBox } from "../components/contents";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
import React from "react";
import { css } from "@emotion/react";
import { Square } from "../components/square";
import { FlexCenter } from "../styles/global";
import { getRandomBorderRadius } from "../hooks/utils";
import {
  SectionStyle,
  getSectionWidth,
  SectionTitleStyle,
} from "../styles/section";
import Link from "next/link";
import { BlackTofu } from "../components/tofu";

export default function About() {
  const Contents = (
    <div css={[FlexCenter]}>
      <div css={PageTitle}>
        <Title inside="Components of this site" />
      </div>
      <div css={[FlexCenter]}>
        <div css={[SectionStyle, getSectionWidth(), getRandomBorderRadius()]}>
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

        <div css={[SectionStyle, getSectionWidth(), getRandomBorderRadius()]}>
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
        <div css={[SectionStyle, getSectionWidth(), getRandomBorderRadius()]}>
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
        <div css={[SectionStyle, getSectionWidth(), getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: IMAGE BOX ::</p>
          <ImageBox
            white={true}
            src="https://user-images.githubusercontent.com/54441505/166110835-418d9371-41bb-4633-88d0-a1566a8bc4bd.jpeg"
          />
        </div>
        <div css={[SectionStyle, getSectionWidth(), getRandomBorderRadius()]}>
          <p css={SectionTitleStyle}>:: SQUARE ::</p>
          <Square
            title="Article"
            link="/about"
            tags={["js", "react"]}
            guide="????????? ????????? ????????? ??? ??? ????????????."
            white={true}
          />
          <Square title="Article2" link="/about" tags={["js", "react"]} />
        </div>
      </div>
      <div css={PageTitle}>
        <Title inside="Github repo of this site" />
      </div>
      <Link href="https://github.com/humonnom/DEV-BLOG">
        <a>
          <BlackTofu inside="https://github.com/humonnom/DEV-BLOG" guide="click to move">
          </BlackTofu>
        </a>
      </Link>
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
