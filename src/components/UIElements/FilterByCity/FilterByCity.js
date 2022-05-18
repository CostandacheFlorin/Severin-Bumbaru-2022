import React from "react";
import { TextField } from "@mui/material";
import { StyledSearchArea, StyledActions } from "./FilterByCity.styled";
import { StyledMediumButton } from "../Buttons/Button.styled";

const FilterByCity = () => {
  return (
    <StyledSearchArea>
      <TextField
        id="filled-search"
        label="Oras"
        type="search"
        variant="filled"
        fullWidth
      />
      <StyledActions>
      <StyledMediumButton margin="1rem auto"> Cautare</StyledMediumButton>


      </StyledActions>
    </StyledSearchArea>
  );
};

export default FilterByCity;
