import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledStudentsProgressIcon,
  StyledStudentsProgressInfo,
} from "./StudentsProgress.styled";

const StudentsProgress = () => {
  return (
    <StyledStudentsProgressInfo to="/management-firme">
      <StyledStudentsProgressIcon>
        <PeopleIcon/>
      </StyledStudentsProgressIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Vizualizare progress studenti
      </StyledNavText>
    </StyledStudentsProgressInfo>
  );
};

export default StudentsProgress;
