import styled from 'styled-components';

interface CardProps {
  slotNumber: number;
  savedDateTime: string;
  oneLineLog: string;
  loadHandler: any;
}

function LoardCard({ loadHandler, slotNumber, savedDateTime, oneLineLog }: CardProps) {

  return (
    <StCardContainer onClick={() => loadHandler(slotNumber)}>
      <StHeader>
        <StCardTitle>슬롯 : {slotNumber}</StCardTitle>
        <StCardText>{savedDateTime}</StCardText>
      </StHeader>
      <StCardText>{oneLineLog}</StCardText>
    </StCardContainer>
  );
}

export default LoardCard

const StCardContainer = styled.div`
  border: 2px solid #333;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: gray
  }
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const StCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StCardText = styled.p`
  font-size: 1rem;
`;