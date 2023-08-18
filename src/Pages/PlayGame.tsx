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
  const [storyFinished, setStoryFinished] = useState<boolean>(false);

  const handleNextClick = () => {
    if (storyFinished) {
      setDisplayIndex(displayIndex + 1);
      setCurrentText("");
      setCurrentIndex(0);
      setStoryFinished(false);
      setAnimationPaused(false);
    } else if (animationPaused) {
      setAnimationPaused(false);
    } else if (currentIndex < script.length) {
      setCurrentText(script);
      setCurrentIndex(script.length);
    } else {
      setAnimationPaused(true);
      setStoryFinished(true);
    }
  };

  useEffect(() => {
    charName !== "" ? setNameDisable(false) : setNameDisable(true);
  }, [charName]);

  useEffect(() => {
    if (!animationPaused && currentIndex < script.length) {
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + script[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animationPaused]);

  return (
    <StContainer>
      <StBottom>
        <StMiniMenuBar>
          <MenuBar />
        </StMiniMenuBar>
        <StScriptFeild onClick={handleNextClick}>
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
