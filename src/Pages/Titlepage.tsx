import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import BGIMGE from "data/Image/_d1b7cf9f-dfe4-411a-b89c-8e733372093c.jpg"

function Titlepage() {
  const navigate = useNavigate()

  const [isClear, setIsClear] = useState<boolean>(false)

  const handleButton = (menu: string) => {
    navigate(menu)
  }

  return (
    <StContainer>
      <StTitleArea>
        {/* 타이틀은 이미지로 예쁘게 만들자... */}
        <StTitleName className='title-logo'>샘플 타이틀</StTitleName>
        <StMenuBox>
          <StMenuBtn type="button" onClick={()=>handleButton("/playgame")}>처음부터</StMenuBtn>
          <StMenuBtn type="button" onClick={()=>handleButton("/load")}>이어하기</StMenuBtn>
          <StMenuBtn type="button" disabled={!isClear} onClick={()=>handleButton("/omake")}>특 전</StMenuBtn>
          <StMenuBtn type="button" disabled onClick={()=>handleButton("/config")}>설 정</StMenuBtn>
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
  background-image: url(${BGIMGE}); /* 배경 이미지 설정 */
  background-size: 100% 100%; /* 이미지를 컨테이너에 맞게 조절 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
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

  color: #e96541;
  text-shadow: 2px 2px 2px black;
`

const StMenuBox = styled.div`
  border-radius: 20px;
  border: 3px solid white;
  background-color: rgba(154, 159, 252, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 16%;
  height: 30%;
`

const StMenuBtn = styled.button`
  font-size: large;
  background-color: transparent;
  border: 0;
  color: ${props => props.disabled ? 'gray' : '#ffffff'};
  text-shadow: ${props => props.disabled ? '1px 1px 1px gray' : '2px 2px 2px tomato'};
  &:hover {
    color: ${props => props.disabled ? 'gray' : 'tomato'};
    background-color: ${props => props.disabled ? null: 'beige'};
    /* text-shadow: ${props => props.disabled ? '1px 1px 1px gray' : '1px 1px 1px white'}; */
  }
`

const StFooter = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;

  color: #ffffff;
  -webkit-text-stroke: 1px violet; /* 텍스트 테두리 추가 */
`