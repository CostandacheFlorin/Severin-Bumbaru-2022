import React from "react";
import Text from "../../UIElements/Typography/Text";
import { Link } from "react-router-dom";
import {
  StyledProfileActions,
  StyledProfileAction,
} from "./ProfileActions.styled";

const ProfileActions = () => {
  return (
    <StyledProfileActions>
      <StyledProfileAction>
        <Link to={"/profil"}>
          <Text type="text" hovercolor="#ADD8E6">
            Profilul meu
          </Text>
        </Link>
      </StyledProfileAction>
      <StyledProfileAction>
        <Link to={"/istoric-comenzi"}>
          <Text type="text" hovercolor="#ADD8E6">
            Comenzile mele
          </Text>
        </Link>
      </StyledProfileAction>

      <StyledProfileAction>
        <Link to={"/favorite"}>
          <Text type="text" hovercolor="#ADD8E6">
            {" "}
            Lista favorite
          </Text>
        </Link>
      </StyledProfileAction>

      <StyledProfileAction>
        <Link to={"/cos"}>
          <Text type="text" hovercolor="#ADD8E6">
            {" "}
            Cosul meu
          </Text>
        </Link>
      </StyledProfileAction>

      <StyledProfileAction>
        <Link to={"/recenzii"}>
          <Text type="text" hovercolor="#ADD8E6">
            Recenziile mele
          </Text>
        </Link>
      </StyledProfileAction>
    </StyledProfileActions>
  );
};

export default ProfileActions;
