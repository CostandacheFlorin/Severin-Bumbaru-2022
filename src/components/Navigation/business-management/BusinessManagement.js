import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledBusinessIcon,
  StyledBusinessInfo,
} from "./BusinessManagement.styled";

const BusinessManagement = () => {
  return (
    <StyledBusinessInfo to="/management-firme">
      <StyledBusinessIcon>
        <BusinessIcon />
      </StyledBusinessIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Gestionare firme
      </StyledNavText>
    </StyledBusinessInfo>
  );
};

export default BusinessManagement;
