import React from "react";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledSearchInternshipIcon,
  StyledSearchInternshipInfo,
} from "./SearchInternship.styled";

const SearchInternship = () => {
  return (
    <StyledSearchInternshipInfo to="/cautare-stagii">
      <StyledSearchInternshipIcon>
        <ContentPasteSearchIcon/>
      </StyledSearchInternshipIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Cauta stagii
      </StyledNavText>
    </StyledSearchInternshipInfo>
  );
};

export default SearchInternship;
