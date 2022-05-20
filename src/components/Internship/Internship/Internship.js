import React, {useContext, useState} from "react";
import HouseIcon from "@mui/icons-material/House";
import { useHttpClient } from "../../../hooks/http-hook";
import { useHistory} from 'react-router-dom';
import {
  InternshipContainer,
  InternshipTitle,
  InternshipInfo,
  InternshipCompany,
  InternshipKnowledge,
  InternshipDate,
  InternshipSpots,
  InternshipDescription,
  InternshipLocation,
  InternshipActions,
} from "./Internship.styled";
import Text from "../../UIElements/Typography/Text";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import { AuthContext } from "../../../context/auth-context";
const Internship = ({
  id,
  title,
  location,
  type,
  company,
  skills,
  startingDate,
  spots,
  description,
  duration,
  schedule,
}) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const uid = auth.userId;
  const [applied, setApplied] = useState(false);
  const history = useHistory();
  const applyHandler = async () => {
    try {
      setApplied(true);

      const formData = new FormData();
      formData.append('internshipId', id);
      formData.append('studentId', uid);

      await sendRequest(
        "http://10.13.16.154:8080/apply",
        "POST",
       formData,
        
      );



      history.push("/stagiile-mele");
    } catch (err) {}
  };
  return (
    <InternshipContainer>
      <InternshipTitle>
        <Text
          type="title"
          size="small"
          bold="true"
          margin="1rem"
          color="#004abf"
        >
          {title}
        </Text>
      </InternshipTitle>
      <InternshipInfo>
        <InternshipLocation>
          <HouseIcon />
          <Text type="text" margin="0 1rem 0 0" bold="true">
            {location}
          </Text>
        </InternshipLocation>
        <Text type="text" margin="0 1rem" bold="true">
          {type}
        </Text>{" "}
      </InternshipInfo>
      <InternshipCompany>
        <Text type="text" size="large" bold="true">
          {company}
        </Text>
      </InternshipCompany>
      <InternshipKnowledge>
        {skills.map((skill) => (
          <Text key={skill} type="text">
            {skill}
          </Text>
        ))}
      </InternshipKnowledge>
      <InternshipDate>
        <Text
          type="text"
          bold="true"
          margin="1rem"
        >{`Incepe pe: ${startingDate}`}</Text>{" "}
        <Text type="text" bold="true" margin="1rem">
          {`Durata de desfasurare: ${duration} zile`}
        </Text>{" "}
        <Text type="text" bold="true" margin="1rem">
          {`Orar: 9-13`}
        </Text>{" "}
      </InternshipDate>
      <InternshipSpots>
        <Text
          type="text"
          bold="true"
          margin="1rem"
        >{`Numar de locuri: ${spots}`}</Text>
      </InternshipSpots>
      <InternshipDescription>
        <Text type="text" bold="true">
          {description}
        </Text>{" "}
      </InternshipDescription>
      <InternshipActions>
        <StyledMediumButton onClick={applyHandler}>Aplica</StyledMediumButton>
      </InternshipActions>
    </InternshipContainer>
  );
};

export default Internship;
