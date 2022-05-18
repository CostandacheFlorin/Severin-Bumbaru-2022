import styled from "styled-components";

export const StyledProfileStatistics = styled.div`
  width: 100%;
  grid-column: 2;
  display: flex;
   
  
`;

export const StyledStatisticsData = styled.div`
  width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid #e8e8e8;
    padding: 1rem;
    flex-direction: column;


  
  & svg {
      font-size: 2.5rem;
      color: ${props => props.color};
  }
`;

export const StyledStatisticHeader = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
padding-bottom: 0.5rem;
border-bottom: 1px solid green;

`

export const StyledStatisticContent = styled.div`
height: 6rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`