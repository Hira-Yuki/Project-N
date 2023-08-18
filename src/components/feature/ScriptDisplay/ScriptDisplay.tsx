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

export default ScriptDisplay;
