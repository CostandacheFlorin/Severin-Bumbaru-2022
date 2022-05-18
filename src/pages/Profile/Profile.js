import React from "react";
import { StyledProfileWrapper } from "./Profile.styled";
import ProfileActions from "../../components/Profile/ProfileActions/ProfileActions";
import ProfileDetails from "../../components/Profile/ProfileDetails/ProfileDetails";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
import randomDude from "../../img/randomdude.jpg";

const Profile = ({name, email, picture, }) => {
  return (
    <StyledProfileWrapper>
      
      <ProfileDetails
        name="Costandache Florin"
        email="Email@email.com"
        phone="0213848218"
        address="strada stiintei nr3"
        university="FACIEE"
        teacher=" VERONICA JASCANU"
        skills=" C++ JAVA CEVA"
        image={randomDude}
      />

    </StyledProfileWrapper>
    
  );
};

export default Profile;
