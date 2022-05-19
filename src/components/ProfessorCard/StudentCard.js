import React from "react";
import {
  RCColumn,
  RCName,
  RCInfoWrapper,
  RCFacultyName,
  RCInternship,
  RCCompanyName,
} from "./ProfessorCard.styled";

const StudentCard = ({ id, name, facultyName, internship, companyName }) => {
  return (
    <>
      <RCColumn key={id}>
        <RCInfoWrapper>
          <RCName>{name}</RCName>
          <RCFacultyName>{facultyName}</RCFacultyName>
          {companyName && <RCCompanyName>{companyName}</RCCompanyName>}
          {internship && <RCInternship>{internship}</RCInternship>}
        </RCInfoWrapper>
      </RCColumn>
    </>
  );
};

export default StudentCard;
