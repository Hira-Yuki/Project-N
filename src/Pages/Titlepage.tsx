import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function Titlepage() {

  const navigate = useNavigate()
  const [isClear, setIsClear] = useState(false)

  const handleLoadButton = () => {
    navigate("/load")
  }


  return (
    <StContainer>
      <StTitleArea>
        <StTitleName className='title-logo'>흥미를 끌만한 적절한 제목</StTitleName>
        <StMenuBox>
          <StMenuBtn>처음부터</StMenuBtn>
          <StMenuBtn onClick={handleLoadButton}>이어하기</StMenuBtn>
          <StMenuBtn disabled={!isClear}>특 전</StMenuBtn>
          <StMenuBtn>설 정</StMenuBtn>
        </StMenuBox>
      </StTitleArea>
      <StFooter>Copyright 2023 Yukihira</StFooter>
    </StContainer>
  )
}

export default Titlepage

const StContainer = styled.div`
  width: 100%;
  height: 100%;
`

const StTitleArea = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const StTitleName = styled.h1`
  font-size: 52px;
  font-weight: 600;

  color: white;
  text-shadow: 2px 2px 2px black;
`

const StMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 30%;
`

const StMenuBtn = styled.button`
  font-size: large;
  background-color: transparent;
  border: 0;
  color: ${props => props.disabled ? 'gray' : 'white'}; /* 회색 또는 흰색 선택 */
  text-shadow: 1px 1px 1px black;
  &:hover {
    color: ${props => props.disabled ? 'gray' : 'red'}; /* 회색 또는 빨간색 선택 */
    text-shadow: ${props => props.disabled ? '1px 1px 1px black' : '1px 1px 1px white'};
  }
`

const StFooter = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;

  color: white;
  text-shadow: 1px 1px 1px black;
`