import React, { useState } from "react";
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

const TutorCard = ({ id, name, facultyName, internship }) => {
  const [showGrade, setShowGrade] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const showGrades = () => {
    setShowGrade(!showGrade);
  };
  const showActivities = () => {
    setShowActivity(!showActivity);
  };

  const gradesForm = (
    <HiddenFormContent>
      <input placeholder="Nota" type="text" id="grade" name="grade" />
      <input
        placeholder="observatie"
        type="text"
        id="grade-obs"
        name="grade-obs"
      />
      <input type="date" id="grade-date" name="grade-date" />
      <StyledMediumButton>Adauga nota</StyledMediumButton>
    </HiddenFormContent>
  );

  const activityForm = (
    <HiddenFormContent>
      <select name="activity" id="activity">
        <option value="prezent">Prezent</option>
        <option value="absent">Absent</option>
      </select>
      <input type="date" id="grade-date" name="grade-date" />
      <StyledMediumButton>Adauga </StyledMediumButton>
    </HiddenFormContent>
  );

  return (
    <>
      <RCColumn key={id}>
        <RCInfoWrapper>
          <RCName>{name}</RCName>
          <RCFacultyName>{facultyName}</RCFacultyName>
          <RCInternship>{internship}</RCInternship>
        </RCInfoWrapper>
        <RCButtonWrapper>
          <StyledMediumButton onClick={showGrades}>
            Modifica Nota
          </StyledMediumButton>
          <StyledMediumButton onClick={showActivities}>
            Modifica Prezente
          </StyledMediumButton>
        </RCButtonWrapper>
        <RCInfoWrapper>
          {showGrade && <HiddenForm>{gradesForm}</HiddenForm>}
          {showActivity && <HiddenForm>{activityForm}</HiddenForm>}
        </RCInfoWrapper>
      </RCColumn>
    </>
  );
};

export default TutorCard;
