import { ImageBox, TextBox } from "../components/contents";
import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
import React from "react";
import { css } from "@emotion/react";
import { Square } from "../components/square";
import { FlexCenter } from "../styles/global";

export default function About() {
  const Contents = (
    <div css={[FlexCenter]}>
      <Title inside="About this site" />
      <div css={[FlexCenter]}>
        <div css={[SectionStyle, PebbleContainer]}>
          <p>:: pebble ::</p>
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

        <div css={SectionStyle}>
          <p>:: title ::</p>
          <div>
            <Title inside="Hello" />
          </div>
          <div>
            <Title inside="this is covered type" hasBorder={true} />
          </div>
        </div>
        <div css={SectionStyle}>
          <p>:: textbox ::</p>
          <div>
            <TextBox
              widthType="wide"
              inside="
          원숭이 엉덩이는 빨~개/ 빨가면 사과/ 사과는 맛있어/ 맛있으면 바나나/ 바나나는 길어/ 길면 기차/ 기차는 빨라/ 빠르면 비행기/ 비행기는 높아 /높으면 백두산"
            />
          </div>
          <div>
            <TextBox
              ascii={true}
              inside="+----+     +----+     +----+     
|  🐒   | => | ❤️   | => |  🍎   |
+----+     +----+     +----+    "
            />
          </div>
        </div>
        <div css={SectionStyle}>
          <p>:: image ::</p>
          <ImageBox />
        </div>
        <div css={SectionStyle}>
          <p>:: square ::</p>
          <Square
            title="Square"
            link="/about"
            tags={["js", "react"]}
            guide="누르면 자세한 내용을 볼 수 있습니다."
          />
        </div>
      </div>
    </div>
  );
  return <Container contents={Contents} />;
}
const SectionStyle = css`
  ${FlexCenter}
  height: 100%;
  max-width: 50vw;
  margin: 15px;
  div {
    margin: 5px 0px;
  }
`;

const PebbleContainer = css`
  width: 30vw;
  div {
    width: 20vw;
  }
`;
