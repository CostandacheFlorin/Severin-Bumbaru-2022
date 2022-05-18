import React from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import Text from "../../UIElements/Typography/Text";
import { useHistory } from "react-router-dom";
import {
  StyledProfileDetails,
  StyledProfileDetailsInfo,
  StyledProfileData,
  StyledProfileActionsArea,
} from "./ProfileDetails.styled";

const ProfileDetails = ({name, email, phone, address}) => {
    const history = useHistory();


    const navigateToProfileDetails = () => {
        history.push("/modifica-date")
    }



  return (
    <StyledProfileDetails>
      <Text type="subtitle" bold="true" align="center">
        Datele contului dumneavoastra
      </Text>
      <StyledProfileDetailsInfo>
        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Nume:
          </Text>
          <Text type="text"> {name}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Email:
          </Text>
          <Text type="text"> {email}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Telefon:
          </Text>
          <Text type="text"> {phone}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Adresa:
          </Text>
          <Text type="text"> {address}</Text>
        </StyledProfileData>
      </StyledProfileDetailsInfo>
      <StyledProfileActionsArea>
        <StyledMediumButton onClick={navigateToProfileDetails}>Modifica datele </StyledMediumButton>
      </StyledProfileActionsArea>
    </StyledProfileDetails>
  );
};

export default ProfileDetails;
