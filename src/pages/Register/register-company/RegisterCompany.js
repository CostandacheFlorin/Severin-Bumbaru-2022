import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Text from "../../../components/UIElements/Typography/Text";

import { useState } from "react";

import PageWrapper from "../../../components/UIElements/PageWrapper/PageWrapper";
import backgroundImage from "../../../img/simple-corporate-office.jpg";
import {
  StyledLoginOptions,
  StyledFormContainer,
} from "../../Login/Login.styled";
import { StyledMediumButton } from "../../../components/UIElements/Buttons/Button.styled";

const RegisterCompany = () => {
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (event) => {
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
          id="username"
          label="Nume de utilizator"
          name="username"
          error={inputError}
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
          id="companyname"
          label="Numele companiei"
          name="companyname"
          error={inputError}
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="companydescription"
          label="Descrierea firmei"
          name="companydescription"
          error={inputError}
          autoFocus
          multiline
          maxRows={10}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="companyaddress"
          label="Adresa firmei"
          name="companyaddress"
          error={inputError}
          autoFocus
          type="address"
        />

        <StyledMediumButton margin="1rem auto">Inregistrare</StyledMediumButton>
        <StyledLoginOptions>
          <Link to="/inregistrare-firma">
            <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">
              Inregistrare firma
            </Text>
          </Link>

          <Link to="/autentificare">
            <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">
              Am deja un cont.
            </Text>
          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
    </PageWrapper>
  );
};

export default RegisterCompany;
