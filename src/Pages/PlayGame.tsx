import { useState } from "react"
import styled from "styled-components"

function PlayGame() {

  const [nameDisable, setNameDisable] = useState<boolean>(false);

  return (
    <StContainer>
      <StBottom>
        <StMiniMenuBar>
          {/* 메뉴바 */}
          <StMenuButton type="button">설정</StMenuButton>
          <StMenuButton type="button">자동 진행</StMenuButton>
          <StMenuButton type="button">인터페이스 숨기기</StMenuButton>
          <StMenuButton type="button">스킵</StMenuButton>
          <StMenuButton type="button">저장</StMenuButton>
          <StMenuButton type="button">불러오기</StMenuButton>
        </StMiniMenuBar>
        <StScriptFeild>
          {/* 스크립트가 표시될 영역 */}
          {nameDisable? null:(
          <StScriptCharName>
            〈{"이름"}〉
          </StScriptCharName>
          )}
          <StScriptText>
            {"어쩌구 저쩌구 솰라솰라~~~~"}
          </StScriptText>
        </StScriptFeild>
      </StBottom>

    </StContainer>
    // 게임을 로드할 때 가져올 데이터를 프롭으로 받아와야함.
    // 인터페이스 요소가 필요.
  )
}

export default PlayGame

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
`

const StBottom = styled.div`
  height: 40%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
`

const StMiniMenuBar = styled.div`
  margin: 0 1% 1% 1%;
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* 간격 설정 */
  height: 14%;
`

const StScriptFeild = styled.div`
  margin: 0 1% 1% 1%;
  padding: 1%;
  height: 84%;
  border: 1px solid black;

  display: flex;
  gap: 20px;

  font-size: 32px;
`

const StScriptCharName = styled.div`
  font-weight: bold;
`

const StScriptText = styled.span`
  
`

const StMenuButton = styled.button`
  background-color: transparent;
  border: 0;
  border: 1px solid black;
`