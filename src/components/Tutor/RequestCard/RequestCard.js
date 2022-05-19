import React from "react";
import { Container } from "../../globalStyles";
import {
  RCColumn,
  RCWrapper,
  RCName,
  RCName1,
  RCButtonWrapper,
  RCInfoWrapper,
  RCFacultyName,
  RCInternship,
} from "./RequestCard.styled";
import { data } from "./RequestCardData";

const RequestCard = () => {
  return (
    <Container>
      <RCWrapper>
        {data.map((el, index) => (
          <RCColumn key={index}>
            <RCInfoWrapper>
              <RCName>{el.name}</RCName>
              <RCFacultyName>{el.facultyName}</RCFacultyName>
              <RCInternship>{el.internship}</RCInternship>
            </RCInfoWrapper>
            <RCButtonWrapper>
              <RCName1>Modifica Nota</RCName1>
              <RCName1>Modifica Prezente</RCName1>
            </RCButtonWrapper>
          </RCColumn>
        ))}
      </RCWrapper>
    </Container>
  );
};

export default RequestCard;
