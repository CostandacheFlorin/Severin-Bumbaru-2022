import React, { useEffect, useState, useContext } from "react";
import ImageUpload from "../../UIElements/ImageUpload/ImageUpload";
import { StyledFormContainer } from "./ProfileForm.styled";
import ControlledInput from "../../UIElements/Input/ControlledInput";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import { useHttpClient } from "../../../hooks/http-hook";
import Text from "../../UIElements/Typography/Text";
import Test from "./Test";
import { AuthContext } from "../../../context/auth-context";
import { useHistory } from "react-router-dom";
import { StyledInputContainer } from "../../UIElements/Input/Input.styled";

const ProfileForm = () => {
  const history = useHistory();
  let skillsArray = [];
  let skillsArrayOutput = [];
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
  const [teacherId, setTeacherId] = useState();
  const [newSkills, setNewSkills] = useState();

  const auth = useContext(AuthContext);
  console.log(auth);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const uid = auth.userId;
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
        setTeacherId(responseData.professor.id);
        // console.log(responseData.professor.id);
        // console.log(teacherId);
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

  console.log(teacherId);

  const onChangeHandler = () => {};
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

    for (let i = 0; i < formFields.length; i++) {
      console.log(formFields[i].name);
      console.log("asdjasjda");
      skillsArrayOutput.push(formFields[i].name);
    }
    setNewSkills(skillsArrayOutput);
    console.log(formFields);
    console.log(newSkills);

    if (!formFields[1]) {
      console.log("chestii");
    }

    // formData.append("file", event.target.image.files[0]);

    setFirstname(event.target.nume.value);
    setLastname(event.target.prenume.value);
    setEmail(event.target.email.value);
    // setPhone(event.target.telefon.value);
    setSchool(event.target.facultate.value);
    setTeacher(event.target.nume.value);
    setAddress(event.target.adresa.value);
    const tel = event.target.telefon.value;
   

    //  setTeacherId(responseData.professor.id);

    // console.log(
    //   firstname,
    //   lastname,
    //   email,
    //   phone,
    //   school,
    //   teacherId,
    //   address,
    //   newSkills
    // );

    const uid = auth.userId;

    // const newDetails = {};
    // console.log(typeof newDetails);
    // console.log(newDetails);

    try {
      await sendRequest(
        "http://10.13.16.154:8080/updateProfile",
        "PUT",
        JSON.stringify({
          id: uid,
          username: email,
          profilePic: "profile-pic-path",
          profileCv: "profile-cv-path",
          profileName: firstname,
          profileSurname: lastname,
          profilePhone: phone,
          profileAddress: address,
          profileSchool: school,
          profileSkills: newSkills,
          professor: {
            id: teacherId,
          },
        }),
        {
          "Content-Type": "application/json",
        }
      );

      // history.push("/profil");
    } catch (err) {}
  };

  console.log(newSkills);
  // console.log(phone);
  return (
    <>
      <StyledFormContainer onSubmit={submitHandler}>
        <Text type="title" bold="true" color="#004abf" margin="2rem 0">
          Modifica-ti profilul
        </Text>
        <StyledInputContainer>
          <label htmlFor="nume">Nume</label>
          <input 
          style={{width:"20rem"}}
          type="text"
          name="nume"
          id="nume"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        </StyledInputContainer>
         <StyledInputContainer>
          <label htmlFor="prenume">Prenume</label>
          <input 
          style={{width:"20rem"}}
          type="text"
          name="prenume"
          id="prenume"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </StyledInputContainer>
         <StyledInputContainer>
          <label htmlFor="email">Email</label>
          <input style={{width:"20rem"}}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="telefon">Telefon</label>
          <input
          style={{width:"20rem"}}
          type="text"
          name="telefon"
          id="telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </StyledInputContainer>


        <StyledInputContainer>
          <label htmlFor="adresa">Adresa</label>
          <input
          style={{width:"20rem"}}
          type="address"
          name="adresa"
          id="adresa"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="facultate">Facultate</label>
          <input
          style={{width:"20rem"}}
          type="text"
          name="facultate"
          id="facultate"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        </StyledInputContainer>


        <StyledInputContainer>
          <label htmlFor="teacher">Profesor</label>
          <input
          style={{width:"20rem"}}
          type="text"
          name="profesor"
          id="profesor"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
        </StyledInputContainer>
      
        

        <div>
          <Text type="text" bold="true">
            Abilitatile tale actuale
          </Text>
          <textarea
            name="abilitati"
            cols="40"
            rows="5"
            value={skills}
          ></textarea>
        </div>

        <Text type="text" bold="true" margin="1rem 0">
          Editeaza-ti abilitatile
        </Text>

        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Skill"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
                style={{ width: "20rem", height: "3rem" }}
              />

              <h3 style={{ color: "red" }} onClick={() => removeFields(index)}>
                Remove
              </h3>
            </div>
          );
        })}

        <h3 onClick={addFields}>Adauga abilitate..</h3>

        <ImageUpload id="image" name="image" />

        <StyledMediumButton>Modifica datele</StyledMediumButton>
      </StyledFormContainer>
    </>
  );
};

export default ProfileForm;
