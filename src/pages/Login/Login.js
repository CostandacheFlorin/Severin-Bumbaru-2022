import React, { useContext } from "react";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from 'react-router-dom';
import Background from '../../img/simple-corporate-office.jpg';

import Typography from "@mui/material/Typography";

// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import PageWrapper from "../../components/UIElements/PageWrapper/PageWrapper";
import { StyledLoginOptions, StyledFormContainer } from "./Login.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";
import Text from "../../components/UIElements/Typography/Text";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/Loading/LoadingSpinner";
// trb facuta functie la form sa adauge la inputuri error

const Login = () => {
 

    const handleSubmit = () => {

    }



  return (
    <PageWrapper background={Background}>
      
      <StyledFormContainer onSubmit={handleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Autentificare
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nume de utilizator"
          name="username"
          
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parola"
          type="password"
          id="password"
         
        />

      
        <StyledMediumButton>Autentificare</StyledMediumButton>

        <StyledLoginOptions>
          <Link to="/uitare-parola">
            <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Ti-ai uitat parola?</Text>
          </Link>

          <Link to="/inregistrare" >
          <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Creeaza un cont</Text>

          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
    </PageWrapper>
  );
};

export default Login;
