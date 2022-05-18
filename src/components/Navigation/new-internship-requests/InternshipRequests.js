import React from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledInternshipRequestsIcon,
  StyledInternshipRequestsInfo,
} from "./InternshipRequests.styled";

const InternshipRequests = () => {
  return (
    <StyledInternshipRequestsInfo to="/cereri-noi">
      <StyledInternshipRequestsIcon>
      <NewReleasesIcon />
      </StyledInternshipRequestsIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Cereri noi 
      </StyledNavText>
    </StyledInternshipRequestsInfo>
  );
};

export default InternshipRequests;
