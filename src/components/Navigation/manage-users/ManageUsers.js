import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledManageUsersIcon,
  StyledManageUsersInfo,
} from "./ManageUsers.styled";

const ManageUsers = () => {
  return (
    <StyledManageUsersInfo to="/gestionare-utilizatori">
      <StyledManageUsersIcon>
      <AccountCircleIcon />
      </StyledManageUsersIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Gestionare interni
      </StyledNavText>
    </StyledManageUsersInfo>
  );
};

export default ManageUsers;
