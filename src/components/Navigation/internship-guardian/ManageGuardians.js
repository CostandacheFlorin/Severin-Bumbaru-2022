import React from "react";
import HailIcon from '@mui/icons-material/Hail';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledManageGuardiansIcon,
  StyledManageGuardiansInfo,
} from "./ManageGuardians.styled";

const ManageGuardians = () => {
  return (
    <StyledManageGuardiansInfo to="/gestionare-tutori">
      <StyledManageGuardiansIcon>
        <HailIcon />
      </StyledManageGuardiansIcon>
      <StyledNavText variant="h3" type="text" align="center">
        Gestionare tutori
      </StyledNavText>
    </StyledManageGuardiansInfo>
  );
};

export default ManageGuardians;
