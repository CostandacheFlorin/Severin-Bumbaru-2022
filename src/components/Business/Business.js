import React from "react";
import {
  StyledContainer,
  StyledBusinessDescription,
  StyledBusinessActions,
  StyledBusinessAddress,
} from "./Business.styled";
import {
  RedMediumButton,
  StyledMediumButton,BlueButton
} from "../UIElements/Buttons/Button.styled";
import Text from "../UIElements/Typography/Text";
import BusinessIcon from "@mui/icons-material/Business";
const Business = ({ name, description, address, status }) => {
  let actions;

  if (status === "in asteptare") {
    actions = (
      <>
        {" "}
        <StyledMediumButton>Verifica firma</StyledMediumButton>
        <RedMediumButton>Respinge firma</RedMediumButton>
      </>
    );
  }

  if (status === "acceptat") {
    actions = (
      <>
        {" "}
        <BlueButton>Editare firma</BlueButton>
        <BlueButton>Sterge firma</BlueButton>
      </>
    );
  }

  return (
    <StyledContainer>
      <Text type="subtitle" color="#004abf" bold="true" margin="0 0 0 3rem">
        {name}
      </Text>
      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {description}
      </Text>

      <StyledBusinessAddress>
        {" "}
        <BusinessIcon />{" "}
        <Text margin="1rem 1rem" type="text" bold="true">
          {address}
        </Text>
      </StyledBusinessAddress>

      <StyledBusinessActions>{actions}</StyledBusinessActions>
    </StyledContainer>
  );
};

export default Business;
