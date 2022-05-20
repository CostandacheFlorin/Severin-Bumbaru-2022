import React, {useContext} from "react";
import {StyledLogoutButton} from "./LogoutButton.styled";
import Text from "../../UIElements/Typography/Text";
import { AuthContext } from "../../../context/auth-context";
import {useHistory} from'react-router-dom';
const LogoutButton = () => {
  const auth = useContext(AuthContext);
  const  history = useHistory();
  const onClickHandler = () => {
    auth.logout();
    history.push('/');

    
  }

  return (
    <StyledLogoutButton onClick={onClickHandler}>
    <Text type="text" bold="true">Logout</Text>
  </StyledLogoutButton>
  );
};

export default LogoutButton;
