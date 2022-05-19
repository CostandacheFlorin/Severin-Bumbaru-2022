import styled from "styled-components";
import { motion } from "framer-motion";

export const RCWrapper = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RCColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`;

export const RCImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #000;

  padding: 30px;
`;

export const RCName = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  width: 33%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const RCButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.5rem;
`;

export const RCInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.5rem;
`;

export const RCName1 = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0.5rem;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const RCInternship = styled.p`
  width: 33%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 600;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const RCFacultyName = styled.p`
  font-weight: 600;
  width: 33%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
