import React from "react";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledInternshipReportIcon,
  StyledInternshipReportInfo,
} from "./InternshipReport.styled";

const InternshipReport = () => {
  return (
    <StyledInternshipReportInfo to="/caiet-practica">
      <StyledInternshipReportIcon>
        <SummarizeIcon />
      </StyledInternshipReportIcon>
      <StyledNavText variant="h3" type="text" align="center">
        Caiet de practica
      </StyledNavText>
    </StyledInternshipReportInfo>
  );
};

export default InternshipReport;
