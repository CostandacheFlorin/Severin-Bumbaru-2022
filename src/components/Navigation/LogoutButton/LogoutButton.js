import React, {useContext} from "react";
import {StyledLogoutButton} from "./LogoutButton.styled";
import Text from "../../UIElements/Typography/Text";
import { AuthContext } from "../../../context/auth-context";

const LogoutButton = () => {
  const auth = useContext(AuthContext);

  return (
    <StyledLogoutButton onClick={auth.logout}>
    <Text type="text" bold="true">Logout</Text>
  </StyledLogoutButton>
  );
};

export default LogoutButton;
