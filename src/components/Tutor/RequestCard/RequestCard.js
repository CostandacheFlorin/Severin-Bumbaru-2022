import React, { useState } from "react";
import { Container } from "../../../data/globalStyles";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import {
  RCColumn,
  RCWrapper,
  RCName,
  RCName1,
  RCButtonWrapper,
  RCInfoWrapper,
  RCFacultyName,
  RCInternship,
  HiddenForm,
  HiddenFormContent,
} from "./RequestCard.styled";
import { data } from "./RequestCardData";
import TutorCard from "./TutorCard";

const RequestCard = () => {

  return (
    <Container>
      <RCWrapper>
        {data.map((el) => (
          <TutorCard
            id={el.id}
            name={el.name}
            facultyName={el.facultyName}
            internship={el.internship}
          />
        ))}
      </RCWrapper>
    </Container>
  );
};

export default RequestCard;
