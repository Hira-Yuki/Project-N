import { useRef, RefObject, useEffect } from 'react'
import styled from 'styled-components'

interface backLogProps {
  backLog: [string, string][]
  toggleBackLog: () => void
  goBackLogIndex: (index: number) => void
}

function BackLog({ backLog, toggleBackLog, goBackLogIndex }: backLogProps) {

  const scrollRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // 스크롤을 항상 최하단으로 이동하는 함수
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // backLog이 업데이트될 때마다 스크롤을 최하단으로 이동
  useEffect(() => {
    scrollToBottom();
  }, [backLog]);

  return (
    <StContainer>
      <StCloseButton onClick={toggleBackLog}>닫기</StCloseButton>
      <StLogArea ref={scrollRef}>
        {backLog.map((log, index) => (
          <StTextLog key={index} onClick={() => goBackLogIndex(index)}>
            {log[0] === "" ? null : (`〈${log[0]}〉`)}
            {log[1]}
          </StTextLog>
        ))}
      </StLogArea>
    </StContainer>
  )
}

export default BackLog


const StContainer = styled.div`
  height: calc(100% - 40px);
  background-color: transparent;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative; 
`

const StCloseButton = styled.button`
  position: absolute;
  top: 10px; /* 원하는 위치로 조정 */
  right: 10px; /* 원하는 위치로 조정 */

  background-color: transparent;
  border: 0;
  font-size: 16px;

  color: white;

  &:hover {
    color: ${props => props.disabled ? 'white' : 'tomato'};
  }
`

const StLogArea = styled.div`
  border: 1px solid black;

  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 20px;
  font-size: 32px;
  flex: 1;
  overflow: auto; /* 스크롤 생성 */
  display: flex;
  flex-direction: column;
`

const StTextLog = styled.div`
  border: 2px solid white;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
  
  cursor: pointer;
  
  &:hover {
    background-color: beige; /* 마우스를 올렸을 때 배경색 변경 */
  }
`