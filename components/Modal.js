import { css } from "@emotion/react";
import React from "react";
import { FlexCenter } from "../styles/global";
import { BlackPebble } from "./pebble";

function Modal({ contents, visible, close }) {
  return (
    <>
      <div
        css={[ModalOverlay, getVisiblity(visible)]}
        visible={visible.toString()}
      />
      <div
        css={[ModalWrapper, getVisiblity(visible)]}
        tabIndex="-1"
        visible={visible.toString()}
      >
        <div css={ModalInner} tabIndex="0">
          <div css={ContentsContainer}>
            <div css={CloseButtonContainer}>
              <div css={CloseButtonStyle}>
                <BlackPebble inside="close" action={close} />
              </div>
            </div>
            {contents}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

const getVisiblity = (visible) => {
  if (visible) {
    css`
      display: block;
    `;
  } else {
    css`
      display: none;
    `;
  }
  return;
};

const ModalOverlay = css`
  box-sizing: border-box;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: scroll;
  outline: 0;
`;
const ModalInner = css`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px;
`;

const ContentsContainer = css`
  ${FlexCenter}
`;

const CloseButtonContainer = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 10vh;
  width: 100%;
`;

const CloseButtonStyle = css`
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 10px;
  display: flex;
  width: 40px;
  height: 30px;
`;
