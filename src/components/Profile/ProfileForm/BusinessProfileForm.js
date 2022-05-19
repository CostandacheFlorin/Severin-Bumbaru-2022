import React, { useEffect, useState } from "react";
import ImageUpload from "../../UIElements/ImageUpload/ImageUpload";
import { StyledFormContainer } from "./ProfileForm.styled";
import ControlledInput from "../../UIElements/Input/ControlledInput";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import { useHttpClient } from "../../../hooks/http-hook";
import Text from "../../UIElements/Typography/Text";
import Test from "./Test";

const ProfileForm = () => {
  let skillsArray = [];
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [school, setSchool] = useState();
  const [teacher, setTeacher] = useState();
  const [address, setAddress] = useState();
  const [skills, setSkills] = useState(skillsArray);
  const [formFields, setFormFields] = useState([{ name: "" }]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const responseData = await sendRequest(
          "http://10.13.16.154:8080/getProfile/?id=5"
        );
        setFirstname(responseData.profileSurname);
        setLastname(responseData.profileName);
        setEmail(responseData.username);
        setPhone(responseData.profilePhone);
        setSchool(responseData.profileSchool);
        setTeacher(responseData.professor.username);
        setAddress(responseData.profileAddress);

        console.log(responseData.profileSkills[0]);
        console.log(responseData.profileSkills[1]);

        for (let i = 0; i < responseData.profileSkills.length; i++) {
          console.log(responseData.profileSkills[i] + i);
          skillsArray.push(responseData.profileSkills[i]);
        }
        setSkills(skillsArray);
        console.log(skills);
      } catch (err) {}
    };
    fetchProfile();
  }, [sendRequest]);

  const getSkill = (index) => {
    return skills[index];
  };

  const addFields = () => {
    let object = {
      name: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", event.target.image.files[0]);
    console.log(event.target.nume.value);
    console.log(event.target.email.value);
    console.log(event.target.telefon.value);
    console.log(event.target.adresa.value);
    console.log(event.target.facultate.value);
    console.log(event.target.abilitati.value);
    console.log(event.target.profesor.value);
    console.log(formData.get("file"));
    for (let i = 0; i < formFields.length; i++) {
      console.log(formFields[i].name);
    }
    console.log(formFields);

    if (!formFields[1]) {
      console.log("chestii");
    }
  };

  return (
    <>
      <StyledFormContainer onSubmit={submitHandler}>
        <Text type="title" bold="true" color="#004abf" margin="2rem 0">
          Modificati detaliile firmei
        </Text>
        <ControlledInput
          width="20rem"
          id="nume"
          label="Denumire"
          type="text"
          value={firstname}
        />

        <ControlledInput
          width="20rem"
          id="telefon"
          label="Telefon"
          type="text"
          value={firstname}
        />

        <div>
          <Text type="text" bold="true">
            Descriere firma
          </Text>
          <textarea
            name="abilitati"
            cols="40"
            rows="5"
            value={skills}
          ></textarea>
        </div>

        <ImageUpload id="image" name="image" />

        <StyledMediumButton>Modifica datele</StyledMediumButton>
      </StyledFormContainer>
    </>
  );
};

export default ProfileForm;
