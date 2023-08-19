import React from 'react'
import styled, { css, keyframes } from "styled-components"

interface MenuBarProps {
  toggleAutoPlay: () => void;
  toggleSkip: () => void;
  autoPlay: boolean;
  skip: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleAutoPlay, autoPlay, toggleSkip, skip }) => {

  const onClickHandler = () => {
    alert("아직 구현되지 않은 기능이에용.")
  }

  return (
    <>
      <StMenuButton type="button" onClick={toggleSkip} skip={skip}>스킵</StMenuButton>
      <StMenuButton type="button" onClick={toggleAutoPlay} autoPlay={autoPlay}>자동 진행</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>설정</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>인터페이스 숨기기</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>저장</StMenuButton>
      <StMenuButton type="button" onClick={onClickHandler}>불러오기</StMenuButton>
    </>
  )
}

export default MenuBar;

interface MenuButtonProps {
  autoPlay?: boolean;
  skip?: boolean; // Added skip prop
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
    props.autoPlay || props.skip
      ?
      css`
      animation: ${blinkingAnimation} 2s infinite;
      animation-timing-function: ease-in-out;
    `
      :
      ''};
`;