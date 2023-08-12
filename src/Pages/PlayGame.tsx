import styled from "styled-components"

function PlayGame() {
  return (
    <StContainer>
      <StMiniMenuBar>
        {/* 메뉴바 */}
        미구현 (설정 | 자동진행 | 인터페이스 숨기기 | 스킵 | 저장 | 불러오기)
      </StMiniMenuBar>
      <StScriptFeild>
        {/* 스크립트가 표시될 영역 */}
         솰라솰라~~~~
      </StScriptFeild>
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

const StMiniMenuBar = styled.div`
  margin: 0 1% 1% 1%;
  padding: 1%;

  border: 1px solid black;
`
const StScriptFeild = styled.div`
  margin: 0 1% 1% 1%;
  padding: 1%;
  height: 25%;
  border: 1px solid black;
`