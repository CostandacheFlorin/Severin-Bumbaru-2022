import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledManageInternshipIcon,
  StyledManageInternshipInfo,
} from "./ManageInternship.styled";

const ManageInternship = () => {
  return (
    <StyledManageInternshipInfo to="/gestionare-stagii">
      <StyledManageInternshipIcon>
        <EditIcon />
      </StyledManageInternshipIcon>
      <StyledNavText variant="h3" type="text" align="center">
        Gestionare stagii de practica
      </StyledNavText>
    </StyledManageInternshipInfo>
  );
};

export default ManageInternship;
