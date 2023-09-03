import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "components/feature/InGameMenu/MenuBar";
import ScriptDisplay from "components/feature/ScriptDisplay/ScriptDisplay";
import { story } from "data/Script/Sample";
import BackLog from "components/feature/BackLog/BackLog";


function PlayGame() {
  const navigate = useNavigate();

  // 게임 내 기능 상태 
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [skip, setSkip] = useState<boolean>(false);
  const [uiDisable, setUiDisable] = useState<boolean>(false);
  const [viewBackLog, setViewBackLog] = useState<boolean>(false);

  // 현재 이야기 인덱스와 해당 인덱스의 캐릭터 이름과 스크립트를 상태로 관리
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [charName, script]: [string, string] = story[displayIndex];
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationPaused, setAnimationPaused] = useState<boolean>(false);

  const scriptLength = script.length;

  // 조건식 추출하여 변수로 저장
  const isLastStory: boolean = displayIndex === story.length - 1;
  const isAnimationInProgress: boolean = !animationPaused && currentIndex < scriptLength;
  const isAutoPlayInProgress: boolean = autoPlay && currentIndex !== 0;

  // 토클 기능
  const toggleAutoPlay = () => {
    // 스킵이 활성화 되어 있으면 스킵을 비활성화 시켜줌
    if (skip) {
      setSkip(false);
    }
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };

  const toggleSkip = () => {
    // 자동 진행이 활성화 되어 있으면 자동 진행을 비활성화 시켜줌
    if (autoPlay) {
      setAutoPlay(false);
    }
    setSkip((prevSkip) => !prevSkip);
  };

  const toggleUiDisplay = () => {
    togglePause();
    setUiDisable(prev => !prev)
  }

  const toggleBackLog = () => {
    // UI를 가리는 기능을 토클해주면 자동 진행과 스킵도 중단됨
    toggleUiDisplay();
    setViewBackLog(prev => !prev)
  }

  // 인게임 기능을 호출할때 오토와 스킵이 중단되도록 동작할 함수
  const togglePause = () => {
    setAutoPlay(false);
    setSkip(false);
  }

  // "다음 문장" 처리 함수
  const handleNextClick = () => {
    if (uiDisable) {
      setUiDisable(false);
      // ui 숨기기가 참일때는 다음 텍스트로 넘어가는 동작이 발생하면 안되므로 리턴하여 다음 동작을 차단함
      return;
    }
    // 애니메이션이 진행 중이면 텍스트를 모두 출력하고 일시정지
    if (isAnimationInProgress) {
      completeTextAnimation();
    } else {
      proceedToNextAction();
    }
  };

  // 텍스트 애니메이션 완료 함수
  const completeTextAnimation = () => {
    setCurrentText(script);
    setCurrentIndex(scriptLength);
    setAnimationPaused(true);
  };

  // 다음 동작 수행 함수
  const proceedToNextAction = () => {
    setAnimationPaused(false);

    if (currentIndex < scriptLength) {
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

  const createBackLog = (curIdx: number) => {
    // 0부터 curIdx번째까지의 데이터를 포함한 새로운 배열을 생성
    const backLog: [string, string][] = story.slice(0, curIdx + 1);
    // 생성된 배열을 반환
    return backLog;
  }

  const backLog: [string, string][] = createBackLog(displayIndex);

  const goBackLogIndex = (index: number) => {
    setDisplayIndex(index);
    const [, newScript]: [string, string] = story[index];
    setCurrentText(newScript);
    setCurrentIndex(newScript.length);
    setAnimationPaused(true);
    toggleBackLog();
  }

  useEffect(() => {
    // 스킵 기능이 활성화되어 있는지 확인합니다.
    if (skip) {
      completeTextAnimation(); // 스킵이 활성화되면 텍스트 전체 출력 함수 호출
      setTimeout(() => {
        proceedToNextAction(); // 일정 시간 뒤에 다음 문장 출력 함수 호출
      }, 150);
      return; // 스킵 모드에서는 나머지 효과 코드 실행을 중단합니다.
    }

    // 애니메이션이 진행 중이고 텍스트 출력이 완료되지 않았으면 타이머 설정하여 한 글자씩 출력
    if (isAnimationInProgress) {
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + script[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      // 타이머 클리어 함수 반환으로 정리
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, animationPaused, script, isAnimationInProgress, skip]);

  useEffect(() => {
    // 자동 진행 기능 실행
    if (isAutoPlayInProgress) {
      const timer = setTimeout(() => {
        proceedToNextAction();
      }, 2500);
      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, currentIndex, isAutoPlayInProgress]);

  // 부모 요소의 클릭 이벤트가 전파되지 않도록 차단!
  const disableMouseEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
  };

  return (
    <StContainer onClick={handleNextClick}>
      {uiDisable ? null : (
        <StBottom>
          <StMiniMenuBar onClick={disableMouseEvent}>
            {/* 게임 내 메뉴 바 */}
            <MenuBar autoPlay={autoPlay} toggleAutoPlay={toggleAutoPlay} skip={skip} toggleSkip={toggleSkip} toggleUiDisplay={toggleUiDisplay} toggleBackLog={toggleBackLog} />
          </StMiniMenuBar>
          {/* 스크립트 출력 영역, 클릭하면 조건에 따라 동작 실행 */}
          <ScriptDisplay charName={charName} currentText={currentText} />
        </StBottom>
      )}
      {viewBackLog && (
        <StModal onClick={disableMouseEvent}>
          <StModalContent>
            <BackLog backLog={backLog} toggleBackLog={toggleBackLog} goBackLogIndex={goBackLogIndex} />
          </StModalContent>
        </StModal>
      )}
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
  position: relative;
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

// 모달 스타일 정의
const StModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5); /* 반투명한 회색 (RGB 색상 및 투명도 조절 가능) */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const StModalContent = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  /* padding: 20px; */
  border-radius: 4px;
  background-color: transparent;

`;