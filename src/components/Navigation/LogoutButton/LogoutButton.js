import React from "react";
import {StyledLogoutButton} from "./LogoutButton.styled";
import Text from "../../UIElements/Typography/Text";

const LogoutButton = () => {

  return (
    <StyledLogoutButton>
    <Text type="text" bold="true">Logout</Text>
  </StyledLogoutButton>
  );
};

export default LogoutButton;
