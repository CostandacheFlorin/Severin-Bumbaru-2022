import React from "react";
import {
  StyledContainer,
  StyledApplicantsDescription,
  StyledApplicantsActions,
  StyledApplicantsAddress,
} from "./Applicants.styled";
import {
  RedMediumButton,
  StyledMediumButton,
  BlueButton,
} from "../UIElements/Buttons/Button.styled";
import Text from "../UIElements/Typography/Text";
import BusinessIcon from "@mui/icons-material/Business";
import { useHttpClient } from "../../hooks/http-hook";
const Applicants = ({
    id,
  nume,
  prenume,
  facultate,
  telefon,
  status,
  internship,
  email,
  skills,
  studentId,
  internshipId
}) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();






    const acceptHandler = async () => {

        const formdata = new FormData;
        formdata.append('internshipId', internshipId);
        formdata.append('studentId', studentId);
        formdata.append('status', 'ACCEPTED');
        await sendRequest(`http://10.13.16.154:8080/doActionApplication/`,'POST', formdata);
        // console.log(id);
    }

    const denyHandler = async () => {
        const formdata = new FormData;
        formdata.append('internshipId', internshipId);
        formdata.append('studentId', studentId);
        formdata.append('status', 'REJECTED');
        await sendRequest(`http://10.13.16.154:8080/doActionApplication/`,'POST', formdata);
    }


  return (
    <StyledContainer>
      <Text type="subtitle" align="center" color="#004abf" bold="true" margin="0 0 0 3rem">
        {internship}
      </Text>
      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {`${nume} ${prenume}`}
      </Text>

      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {facultate}
      </Text>
      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {telefon}
      </Text>

     

      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {email}
      </Text>

      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {`Cunostiinte in ${skills}`}
      </Text>

      <Text type="text" bold="true" margin="1rem 0 1rem 3rem">
        {`Status: ${status}`}
      </Text>

      <StyledApplicantsActions>
        <StyledMediumButton onClick={acceptHandler}>Accepta</StyledMediumButton>
        <RedMediumButton onClick={denyHandler}>Respinge</RedMediumButton>
      </StyledApplicantsActions>
    </StyledContainer>
  );
};

export default Applicants;
