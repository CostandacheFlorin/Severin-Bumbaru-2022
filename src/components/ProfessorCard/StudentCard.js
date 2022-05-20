import React from "react";
import {
  RCColumn,
  RCName,
  RCInfoWrapper,
  RCFacultyName,
  RCInternship,
  RCCompanyName,
} from "./ProfessorCard.styled";

const StudentCard = ({
  id,
  name,
  facultyName,
  internship,
  companyName,
  grade,
  attendance,
  remark,
}) => {
  return (
    <>
      <RCColumn key={id}>
        <RCInfoWrapper>
          <RCName>{name}</RCName>
          <RCFacultyName>{facultyName}</RCFacultyName>
          {companyName && <RCCompanyName>{companyName}</RCCompanyName>}
          {internship && <RCInternship>{internship}</RCInternship>}
        </RCInfoWrapper>
        <RCInfoWrapper>
          <RCName>Nota: {grade}</RCName>
          <RCFacultyName>Prezente: {attendance}</RCFacultyName>
          {remark && <RCFacultyName>Observatii: {remark}</RCFacultyName>}
        </RCInfoWrapper>
      </RCColumn>
    </>
  );
};

export default StudentCard;
