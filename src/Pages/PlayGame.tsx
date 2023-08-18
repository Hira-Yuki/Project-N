import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "components/feature/InGameMenu/MenuBar";
import { story } from "data/Script/Sample";
import ScriptDisplay from "components/feature/ScriptDisplay/ScriptDisplay";

function PlayGame() {
  const navigate = useNavigate();

  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const toggleAutoPlay = () => {
    setAutoPlay(prevAutoPlay => !prevAutoPlay);
  }


  // 현재 이야기 인덱스와 해당 인덱스의 캐릭터 이름과 스크립트를 상태로 관리
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [charName, script]: string[] = story[displayIndex];
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationPaused, setAnimationPaused] = useState<boolean>(false);

  const isLastStory: boolean = displayIndex === story.length - 1;

  // "다음 문장 " 클릭 처리 함수
  const handleNextClick = () => {
    // 애니메이션이 진행 중이면 텍스트를 모두 출력하고 일시정지
    if (!animationPaused && currentIndex < script.length) {
      completeTextAnimation();
    } else {
      proceedToNextAction();
    }
  };

  // 텍스트 애니메이션 완료 함수
  const completeTextAnimation = () => {
    setCurrentText(script);
    setCurrentIndex(script.length);
    setAnimationPaused(true);
  };

  // 다음 동작 수행 함수
  const proceedToNextAction = () => {
    setAnimationPaused(false);

    if (currentIndex < script.length) {
      completeTextAnimation();
    } else {
      if (isLastStory) {
        handleStoryCompletion();
      } else {
        moveToNextStory();
      }
    }
  };

  // 이야기 완료 처리 함수
  const handleStoryCompletion = () => {
    alert("이야기가 끝났습니다.");
    localStorage.setItem("isClear", "true");
    navigate("/");
  };

  // 다음 이야기로 전환 함수
  const moveToNextStory = () => {
    setDisplayIndex(displayIndex + 1);
    resetState();
  };

  // 상태 초기화 함수
  const resetState = () => {
    setCurrentText("");
    setCurrentIndex(0);
    setAnimationPaused(false);
  };

  useEffect(() => {
    // 애니메이션이 진행 중이고 텍스트 출력이 완료되지 않았으면 타이머 설정하여 한 글자씩 출력
    if (!animationPaused && currentIndex < script.length) {
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + script[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      // 타이머 클리어 함수 반환으로 정리
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animationPaused, script]);

  useEffect(() => {
    if (autoPlay && !animationPaused && !isLastStory && currentIndex !== 0) {
      const timer = setTimeout(() => {
        proceedToNextAction();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, currentIndex]);

  return (
    <StContainer>
      <StBottom>
        <StMiniMenuBar>
          {/* 게임 내 메뉴 바 */}
          <MenuBar autoPlay={autoPlay} toggleAutoPlay={toggleAutoPlay} />
        </StMiniMenuBar>
        {/* 스크립트 출력 영역, 클릭하면 조건에 따라 동작 실행 */}
        <ScriptDisplay charName={charName} currentText={currentText} onClick={handleNextClick} />
      </StBottom>
    </StContainer>
  );
}

export default PlayGame;

// 컴포넌트 스타일 정의
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