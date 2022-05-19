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
} from "../ProfileDetails/ProfileDetails.styled";

import Picture from "../../UIElements/Image/Picture";
const BusinessProfile = ({ name, description, phone, address, image }) => {
  const history = useHistory();

  const navigateToProfileDetails = () => {
    history.push("/modifica-profil-firma");
  };

  return (
    <StyledProfileDetails>
      <Text type="subtitle" bold="true" align="center">
        Datele companiei
      </Text>
      <StyledProfileDetailsInfo>
    


        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Denumire:
          </Text>
          <Text type="text"> {name}</Text>
        </StyledProfileData>

        <StyledProfileData>
          <Text type="text" bold="true">
            {" "}
            Descriere:
          </Text>
          <Text type="text"> {description}</Text>
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
        <StyledProfileImage>
      <Picture image={image} />


      </StyledProfileImage>


  

        

      </StyledProfileDetailsInfo>
      <StyledProfileActionsArea>
        <StyledMediumButton onClick={navigateToProfileDetails}>
          Modifica datele{" "}
        </StyledMediumButton>
      </StyledProfileActionsArea>
    </StyledProfileDetails>
  );
};

export default BusinessProfile;
