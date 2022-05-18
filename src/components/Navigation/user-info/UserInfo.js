import React, {useContext} from "react";
import PersonIcon from "@mui/icons-material/Person";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import { AuthContext } from "../../../context/auth-context";

import { StyledUserIcon, StyledUserInfo } from "./UserInfo.styled";

const UserInfo = () => {
  const auth = useContext(AuthContext);

 
  return (
    <>
      {!auth.isLoggedIn && <StyledUserInfo to="/autentificare">
      <StyledUserIcon>
          <PersonIcon />
        </StyledUserIcon>
        <StyledNavText variant="h3" type="text" align="center">
          Autentificare
        </StyledNavText>

       
      </StyledUserInfo>}

     {auth.isLoggedIn && <StyledUserInfo to="/profil">
      <StyledUserIcon>
          <PersonIcon />
        </StyledUserIcon>
        <StyledNavText variant="h3" type="text" align="center">
          Profil
        </StyledNavText>

       
      </StyledUserInfo>}
    </>
  );
};

export default UserInfo;
