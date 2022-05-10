import { css } from '@emotion/react';
import { useRouter } from 'next/router'
import React, { useMemo } from "react";
import { Container } from "../layouts/Layout";
import { COLOR_STYLE, FONT_SIZE } from '../styles/global';
import { ImageBox, TextBox } from "./contents";
import GuideButtons from "./guideButtons";

function Post({ data, category }) {
  const router = useRouter();
  const Contents = useMemo(() => {
    const list = [{ inside: "back", action: () => router.push({
      pathname: '/blog',  
      query: {category}
    })}];
    return (
      <>
       <GuideButtons list={list} />
        <div>
          {data.title}
          <p css={DateStyle}>
            {data.created}
          </p>
          <div>
          {
             data.contents.map((content) => {
              return (
                <div key={Math.random()}>
                {content.type === "text" && <TextBox inside={content.src} ascii={content.ascii || false}/>}
                {content.type === "img" && <ImageBox src={content.src}/>}
                </div>
              );
            })
          }
          </div>
        </div>
      </>
    );
  }, [data, router]);
  return <Container contents={Contents} />;
}

export default Post;

const DateStyle = css`
font-size: ${FONT_SIZE.small};
color: ${COLOR_STYLE.green};
`;