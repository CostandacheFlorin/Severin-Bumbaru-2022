import React from "react";
import { Container } from "../../data/globalStyles";
import {
  RCWrapper,
  RCColumn,
  RCInfoWrapper,
  RCName,
  RCFacultyName,
  RCInput,
  RCTextArea,
} from "./ReportCard.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";

const ReportCard = () => {
  return (
    <Container>
      <RCWrapper>
        <RCColumn>
          <RCInfoWrapper>
            <RCName>DB Manager</RCName>
            <RCName>Ziua: 1</RCName>
            <RCFacultyName>Dummy description was put right here.</RCFacultyName>
          </RCInfoWrapper>
          <RCInfoWrapper>
            <RCName>Dummy Internship</RCName>
            <RCName>Ziua: 2</RCName>
            <RCFacultyName>Dummy description was put right here.</RCFacultyName>
          </RCInfoWrapper>
          <RCInfoWrapper>
            <RCName>Dummy Internship</RCName>
            <RCName>Ziua: 3</RCName>
            <RCFacultyName>Dummy description was put right here.</RCFacultyName>
          </RCInfoWrapper>
          <RCInfoWrapper>
            <RCInput type="text" placeholder="Internship Job" />
            <RCInput min="1" max="31" type="number" placeholder="Ziua" />
            <RCTextArea placeholder="Descriere"></RCTextArea>
          </RCInfoWrapper>
          <StyledMediumButton>Adauga</StyledMediumButton>
        </RCColumn>
      </RCWrapper>
    </Container>
  );
};

export default ReportCard;
