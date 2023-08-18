import React from 'react'
import styled, { css, keyframes } from "styled-components"

interface MenuBarProps {
  toggleAutoPlay: () => void;
  autoPlay: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleAutoPlay, autoPlay }) => {

  return (
    <>
      <StMenuButton type="button">설정</StMenuButton>
      <StMenuButton type="button" onClick={toggleAutoPlay} autoPlay={autoPlay}>자동 진행</StMenuButton>
      <StMenuButton type="button">인터페이스 숨기기</StMenuButton>
      <StMenuButton type="button">스킵</StMenuButton>
      <StMenuButton type="button">저장</StMenuButton>
      <StMenuButton type="button">불러오기</StMenuButton>
    </>
  )
}

export default MenuBar;

interface MenuButtonProps {
  autoPlay?: boolean;
}

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
  border: 1px solid black;

  ${props =>
    props.autoPlay &&
    css`
      animation: ${blinkingAnimation} 2s infinite;
      animation-timing-function: ease-in-out;
    `}
`;