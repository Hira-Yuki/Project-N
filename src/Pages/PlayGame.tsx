import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "components/feature/InGameMenu/MenuBar";
import { story } from "data/Script/Sample";

function PlayGame() {
  const navigate = useNavigate();

  const [nameDisable, setNameDisable] = useState<boolean>(false);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [charName, script]: string[] = story[displayIndex];

  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationPaused, setAnimationPaused] = useState<boolean>(false);

  const storyHandler = () => {
    if (animationPaused) {
      if (currentIndex < script.length) {
        setCurrentText(script);
        setCurrentIndex(script.length);
      } else {
        setAnimationPaused(false);
        setCurrentText("");
        setCurrentIndex(0);
        if (displayIndex === story.length - 1) {
          alert("이야기가 끝났습니다.");
          navigate("/");
          return;
        }
        setDisplayIndex(displayIndex + 1);
      }
    } else {
      if (currentIndex < script.length) {
        setCurrentText(script.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setAnimationPaused(true);
      }
    }
  };

  useEffect(() => {
    charName !== "" ? setNameDisable(false) : setNameDisable(true);
  }, [charName]);

  useEffect(() => {
    if (!animationPaused) {
      const timer = setTimeout(storyHandler, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animationPaused]);

  return (
    <StContainer>
      <StBottom>
        <StMiniMenuBar>
          <MenuBar />
        </StMiniMenuBar>
        <StScriptFeild onClick={storyHandler}>
          {nameDisable ? null : (
            <StScriptCharName>〈{charName}〉</StScriptCharName>
          )}
          <StScriptText>{currentText}</StScriptText>
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
