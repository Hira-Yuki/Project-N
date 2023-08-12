import styled from "styled-components"
import LoadCard from "../components/feature/Save/LoadCard"
import { useNavigate } from "react-router-dom"

function Loadpage() {

  const navigate = useNavigate()
  const loadHandler = (index: Number) => {
    // index를 받아 해당 로드 데이터를 서치하여 로드하고 게임 화면으로 이동한다.
  }

  return (
    <StContainer>
      <Stheader>
        <StSpan>
          Load
        </StSpan>
        <StSpan style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          &lt; 타이틀로 돌아가기
        </StSpan>
      </Stheader>
      <StBody>
        {/* 슬롯 4개 */}
        {Array.from({ length: 4 }, (_, index) => (
          <LoadCard
            loadHandler={loadHandler}
            key={index} slotNumber={index}
            savedDateTime="0000년 00월 00일 00:00"
            oneLineLog="그날 올려다본 하늘은 한 없이 푸르고 아름다웠다."
          />
        ))}
      </StBody>
      <StFooter>
        footer
      </StFooter>
    </StContainer>
  )
}

export default Loadpage

const StContainer = styled.div`
  flex: 1;
`

const Stheader = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid black;
`

const StSpan = styled.span`
  padding: 10px 10px 10px 10px;
  font-size: 38px;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 1px black;
`
const StBody = styled.div`
  
`

const StFooter = styled.div`
  
`