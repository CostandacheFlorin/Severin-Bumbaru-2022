import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBusinessInfo = styled(Link)`
  padding-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;

  & svg {
    font-size: 30px;
    color:#000;
  }
`;

export const StyledBusinessIcon = styled.div`
  display: flex;
  position: relative;
  
`;

