import styled from "styled-components";

export const StyledProfileActions = styled.div`
    width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #ADD8E6;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.86); */

  @media (max-width: 800px) {
    flex-direction: row;
    width: 100%;
  }
  
`;

export const StyledProfileAction = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;
