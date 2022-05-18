import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";

import { StyledUserIcon, StyledUserInfo } from "./UserInfo.styled";

const UserInfo = () => {
  return (
    <>
      <StyledUserInfo to="/autentificare">
      <StyledUserIcon>
          <PersonIcon />
        </StyledUserIcon>
        <StyledNavText variant="h3" type="text" align="center">
          Autentificare
        </StyledNavText>

       
      </StyledUserInfo>
    </>
  );
};

export default UserInfo;
