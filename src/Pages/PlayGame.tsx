import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "components/feature/InGameMenu/MenuBar";
import { story } from "data/Script/Sample";

function PlayGame() {
  const navigate = useNavigate();

  const [nameDisable, setNameDisable] = useState<boolean>(false);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [charName, script]: string[]  = story[displayIndex];

  const storyHandler = () => {
    if (displayIndex === story.length - 1) {
      alert("이야기가 끝났습니다.");
      navigate("/");
      return;
    }
    setDisplayIndex(displayIndex + 1);
  };

  useEffect(() => {
    // 스크립트에 이름이 없으면 이름 요소를 숨기도록 설정
    charName !== "" ? setNameDisable(false) : setNameDisable(true);
  }, [charName]);

  return (
    <StContainer>
      <StBottom>
        <StMiniMenuBar>
          <MenuBar />
        </StMiniMenuBar>
        <StScriptFeild onClick={storyHandler}>
          {nameDisable ? null : (
            <StScriptCharName>
              〈{charName}〉
            </StScriptCharName>
          )}
          <StScriptText>
            {script}
          </StScriptText>
        </StScriptFeild>
      </StBottom>
    </StContainer>
  );
}

export default PlayGame;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
`;

const StBottom = styled.div`
  height: 40%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
`;

const StMiniMenuBar = styled.div`
  margin: 0 1% 1% 1%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  height: 14%;
`;

const StScriptFeild = styled.div`
  margin: 0 1% 1% 1%;
  padding: 1%;
  height: 84%;
  border: 1px solid black;

  display: flex;
  gap: 20px;

  font-size: 32px;
`;

const StScriptCharName = styled.div`
  font-weight: bold;
`;

const StScriptText = styled.span``;
