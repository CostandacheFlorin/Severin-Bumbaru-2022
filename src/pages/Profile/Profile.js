import React, {useState, useContext, useEffect} from "react";
import { StyledProfileWrapper } from "./Profile.styled";
import ProfileActions from "../../components/Profile/ProfileActions/ProfileActions";
import ProfileDetails from "../../components/Profile/ProfileDetails/ProfileDetails";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
import randomDude from "../../img/randomdude.jpg";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
const Profile = (props) => {
  let skillsArray = [];
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [school, setSchool] = useState();
  const [teacher, setTeacher] = useState();
  const [address, setAddress] = useState();
  const [skills, setSkills] = useState([]);
  const [formFields, setFormFields] = useState([{ name: "" }]);

  let skillsString ="";
  const auth = useContext(AuthContext);
  // console.log(auth);
  // console.log(auth.userId);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const uid=auth.userId;
        const responseData = await sendRequest(
          `http://10.13.16.154:8080/getProfile/?id=${uid}`
        );
        setFirstname(responseData.profileSurname);
        setLastname(responseData.profileName);
        setEmail(responseData.username);
        setPhone(responseData.profilePhone);
        setSchool(responseData.profileSchool);
        setTeacher(responseData.professor.username);
        setAddress(responseData.profileAddress);
        console.log(responseData.professor.id);
        console.log(address);

        console.log(responseData.profileSkills[0]);
        console.log(responseData.profileSkills[1]);
          console.log(skills);
        for (let i = 0; i < responseData.profileSkills.length; i++) {
          console.log(responseData.profileSkills[i] + i);
          skillsArray.push(responseData.profileSkills[i]);
          console.log("for");
        }
        console.log("afara din for");
        setSkills(skillsArray);
        
      } catch (err) {}
    };
    fetchProfile();
  }, [sendRequest]);

  if(skills) {
    for(let i=0;i<skills.length;i++){
      skillsString = skillsString + " " + skills[i];
    }
    console.log(skills);
    console.log(skillsString);
  }


  return (
    <StyledProfileWrapper>
      
      <ProfileDetails
        name={`${firstname} ${lastname}`}
        email={email}
        phone={phone}
        address={address}
        university={school}
        teacher={teacher}
        skills={skillsString}
        image={randomDude}
      />

    </StyledProfileWrapper>
    
  );
};

export default Profile;
