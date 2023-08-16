import React from 'react'
import styled from "styled-components"

function MenuBar() {
  return (
    <>
      <StMenuButton type="button">설정</StMenuButton>
      <StMenuButton type="button">자동 진행</StMenuButton>
      <StMenuButton type="button">인터페이스 숨기기</StMenuButton>
      <StMenuButton type="button">스킵</StMenuButton>
      <StMenuButton type="button">저장</StMenuButton>
      <StMenuButton type="button">불러오기</StMenuButton>
    </>
  )
}

export default MenuBar


const StMenuButton = styled.button`
  background-color: transparent;
  border: 0;
  border: 1px solid black;
`