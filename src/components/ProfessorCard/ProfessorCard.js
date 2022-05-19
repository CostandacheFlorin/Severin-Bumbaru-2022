import React from "react";
import { Container } from "../../data/globalStyles";
import { RCWrapper } from "./ProfessorCard.styled";
import { data } from "./ProfessorCardData";
import StudentCard from "./StudentCard";

const ProfessorCard = () => {
  return (
    <Container>
      <RCWrapper>
        {data.map((el) => (
          <StudentCard
            id={el.id}
            name={el.name}
            facultyName={el.facultyName}
            companyName={el.companyName}
            internship={el.internship}
          />
        ))}
      </RCWrapper>
    </Container>
  );
};

export default ProfessorCard;
