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
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
 
    const auth = useContext(AuthContext);
    const [inputError, setInputError] = useState(false);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get("username");
        const password = data.get("password");
        if (username.trim() === "" || password.trim() === "") {
          setInputError(true);
        }
    
        console.log({
          email: data.get("username"),
          password: data.get("password"),
        });
    
        try {
          const responseData = await sendRequest(
            "http://10.13.16.76:8080/login",
            "POST",
            JSON.stringify({
              username: username,
              password: password,
            }),
            {
              "Content-Type": "application/json",
            }
          );
          console.log(responseData);
          auth.login(responseData.id, responseData.role);
          console.log(auth.isLoggedIn);
          console.log(auth.permission);
          
        ;
          
    
        } catch (err) {}

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

      
        <StyledMediumButton margin="1rem auto" >Autentificare</StyledMediumButton>

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
