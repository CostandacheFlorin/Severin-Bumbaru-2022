import React from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import Text from "../../UIElements/Typography/Text";
import { useHistory } from "react-router-dom";
import {
  StyledProfileDetails,
  StyledProfileDetailsInfo,
  StyledProfileData,
  StyledProfileActionsArea,
  StyledProfileHeader,
  StyledProfileImage
} from "./ProfileDetails.styled";

import Picture from "../../UIElements/Image/Picture";
const ProfileDetails = ({ name, email, phone, address, image, skills, teacher, university }) => {
  const history = useHistory();

  const navigateToProfileDetails = () => {
    history.push("/modifica-date");
  };

  return (
    <StyledProfileDetails>
      <Text type="subtitle" bold="true" align="center">
        Datele contului dumneavoastra
      </Text>
      <StyledProfileDetailsInfo>
      <StyledProfileImage>
      <Picture image={image} />


      </StyledProfileImage>



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

  

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Facultate:
          </Text>
          <Text type="text"> {university}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Abilitati:
          </Text>
          <Text type="text"> {skills}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Profesor indrumator:
          </Text>
          <Text type="text"> {teacher}</Text>
        </StyledProfileData>

      </StyledProfileDetailsInfo>
      <StyledProfileActionsArea>
        <StyledMediumButton onClick={navigateToProfileDetails}>
          Modifica datele{" "}
        </StyledMediumButton>
      </StyledProfileActionsArea>
    </StyledProfileDetails>
  );
};

export default ProfileDetails;
