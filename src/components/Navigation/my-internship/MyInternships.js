import React from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledInternshipRequestsIcon,
  StyledInternshipRequestsInfo,
} from "./InternshipRequests.styled";

const MyInternships = () => {
  return (
    <StyledInternshipRequestsInfo to="/stagiile-mele">
      <StyledInternshipRequestsIcon>
      <NewReleasesIcon />
      </StyledInternshipRequestsIcon>
      <StyledNavText variant="h3" type="text" align="center">
       
        Stagiile mele
      </StyledNavText>
    </StyledInternshipRequestsInfo>
  );
};

export default MyInternships;
