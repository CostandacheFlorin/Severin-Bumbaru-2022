import React from "react";
import { StyledProfileWrapper } from "./BusinessProfile.styled";
import ProfileActions from "../../components/Profile/ProfileActions/ProfileActions";
import ProfileDetails from "../../components/Profile/ProfileDetails/ProfileDetails";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
import randomDude from "../../img/randomdude.jpg";
import BusinessProfile from "../../components/Profile/BusinessProfile/BusinessProfile";

const BusinessProfilePage = ({name, email, picture, }) => {
  return (
    <StyledProfileWrapper>
      
      <BusinessProfile />


    </StyledProfileWrapper>
    
  );
};

export default BusinessProfilePage;
