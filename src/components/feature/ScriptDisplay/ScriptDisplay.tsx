import React from "react";
import styled from "styled-components";

interface TextDisplayProps {
  charName: string;
  currentText: string;

}

const ScriptDisplay: React.FC<TextDisplayProps> = ({ charName, currentText }) => {

  // 캐릭터 이름이 비어있으면 이름 숨김 처리
  const nameDisable: boolean = charName === "";

  return (
    <StScriptField>
      {nameDisable ? null : <StScriptCharName>〈{charName}〉</StScriptCharName>}
      <StScriptText>{currentText}</StScriptText>
    </StScriptField>
  );
};

const StScriptField = styled.div`
  margin: 0 1% 1% 1%;
  padding: 1%;
  height: 85%;
  border: 1px solid black;
  border-radius: 15px;

  background-color: rgba(80, 80, 80, 0.8);
  
  display: flex;
  gap: 20px;

  font-size: 32px;
  color: white;
  text-shadow: 2px 2px 2px black;
`;

const StScriptCharName = styled.div`
  font-weight: 800;
  font-style: italic;
`;

const StScriptText = styled.span`
  // 이후에 연출을 위해 준비
`;

export default ScriptDisplay;
