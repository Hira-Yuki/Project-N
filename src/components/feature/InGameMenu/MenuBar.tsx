import React from 'react'
import styled, { css, keyframes } from "styled-components"

interface MenuBarProps {
  toggleAutoPlay: () => void;
  toggleSkip: () => void;
  toggleUiDisplay: () => void;
  toggleBackLog: () => void;
  autoPlay: boolean;
  skip: boolean;
}

function MenuBar({ toggleAutoPlay, autoPlay, toggleSkip, skip, toggleUiDisplay, toggleBackLog }: MenuBarProps) {

  const onClickHandler = () => {
    alert("아직 구현되지 않은 기능이에용.")
  }

  return (
    <StMiniMenuBar>
      <StMenuButton type="button" onClick={toggleSkip} blinking={skip}>스킵</StMenuButton>
      <StMenuButton type="button" onClick={toggleAutoPlay} blinking={autoPlay}>자동 진행</StMenuButton>
      <StMenuButton type="button" onClick={toggleBackLog}>백로그</StMenuButton>
      <StMenuButton type="button" onClick={toggleUiDisplay}>인터페이스 숨기기</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>설정</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>저장</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>불러오기</StMenuButton>
    </StMiniMenuBar>
  )
}

export default React.memo(MenuBar);

interface MenuButtonProps {
  blinking?: boolean;
}

const StMiniMenuBar = styled.div`
  margin: 0 1% 1% 1%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  /* height: 14%; */
`;

const blinkingAnimation = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

const StMenuButton = styled.button<MenuButtonProps>`
  background-color: transparent;
  border: 0;
  border: 1px solid #000;
  color: #000;

  ${props =>
    props.blinking &&
      css`
      animation: ${blinkingAnimation} 2s infinite;
      animation-timing-function: ease-in-out;
    `};
`;

// shouldForwardProp 설정
// Props가 DOM에 전달되지 않도록 필터링해 줍니다.
StMenuButton.shouldForwardProp = (prop) => prop !== 'blinking';