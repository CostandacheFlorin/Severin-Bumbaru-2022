import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Text from "../../components/UIElements/Typography/Text";
import { useHistory } from "react-router-dom";

import { useState } from "react";


import PageWrapper from "../../components/UIElements/PageWrapper/PageWrapper";
import backgroundImage from "../../img/simple-corporate-office.jpg";
import { StyledLoginOptions, StyledFormContainer } from "../Login/Login.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";
import { useHttpClient } from "../../hooks/http-hook";

const Register = () => {
  const [inputError, setInputError] = useState(false);

  const history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const confirmpassword=data.get("confirmpassword");

    console.log(email);
    console.log(password);

    if (email.trim() === "" || password.trim() === "") {
      setInputError(true);
    }

    if(password !== confirmpassword) {
        setInputError(true);
    }


    try {
        const responseData = await sendRequest(
          "http://10.13.16.154:8080/register",
          "POST",
          JSON.stringify({
            username: email,
            password: password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        history.push('/autentificare');
        
        
        
      ;
        
  
      } catch (err) {}

  
  };

  return (
    <PageWrapper background={backgroundImage}>
      <StyledFormContainer onSubmit={handleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Inregistrare
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          error={inputError}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parola"
          type="password"
          id="password"
          error={inputError}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirmati parola"
          type="password"
          id="confirmPassword"
          error={inputError}
        />

      

        <StyledMediumButton margin="1rem auto">Inregistrare</StyledMediumButton>
        <StyledLoginOptions>
          <Link to="/inregistrare-firma" >
          <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Inregistrare firma</Text>
          </Link>

          <Link to="/autentificare" >
          <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Am deja un cont.</Text>
          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
    </PageWrapper>
  );
};

export default Register;
