import React, { useState, useEffect } from "react";
import ApplicantsList from "./ApplicantsList";

import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";


const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const uid = auth.userId;

 
  const onClickHandler = async () => {
    try {
        const uid = auth.userId;
        const responseData = await sendRequest(
          `http://10.13.16.154:8080/getApplicationListForComp/?id=${uid}`
        );
            console.log(responseData);
        setApplicants(responseData);
      } catch (err) {}
  }
      
      
    
  

  return(
    <>
    <StyledMediumButton onClick={onClickHandler}>Afiseaza aplicantii</StyledMediumButton>
    <ApplicantsList listaAplicanti={applicants} />;
    </>
  );
   
};

export default ApplicantsPage;
