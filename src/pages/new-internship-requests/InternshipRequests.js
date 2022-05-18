import React from "react";

import InternshipList from "../../components/Internship/InternshipList/InternshipList";
import { StyledInternshipRequestsLayout } from "./InternshipRequests.styled";
import FilterCheckboxes from "../../components/UIElements/FilterCheckboxes/FilterCheckboxes";
const DUMMY_INTERSHIPS = [
  {
    id: "id1",
    title: "Sef baze de date",
    description: "O sa ai grija de bazele de date si o sa le faci chestii",
    company: "intel",
    type: "remote",
    location: "Galati",
    spots: 30,
    startingDate: "30 februarie",
    skills: [{ skill: "java" }, { skill: "oop" }, { skill: "c+++" }],
    duration: "90 de zile",
  },
  {
    id: "id2",
    title: "Sef baze de date",
    description: "O sa ai grija de bazele de date si o sa le faci chestii",
    company: "intel",
    type: "remote",
    location: "Galati",
    spots: 30,
    startingDate: "30 februarie",
    skills: [{ skill: "java" }, { skill: "oop" }, { skill: "c+++" }],
    duration: "90 de zile",
  },
  {
    id: "id3",
    title: "Sef baze de date",
    description: "O sa ai grija de bazele de date si o sa le faci chestii",
    company: "intel",
    type: "remote",
    location: "Galati",
    spots: 30,
    startingDate: "30 februarie",
    skills: [{ skill: "java" }, { skill: "oop" }, { skill: "c+++" }],
    duration: "90 de zile",
  },
  {
    id: "id4",
    title: "Sef baze de date",
    description: "O sa ai grija de bazele de date si o sa le faci chestii",
    company: "intel",
    type: "remote",
    location: "Galati",
    spots: 30,
    startingDate: "30 februarie",
    skills: [{ skill: "java" }, { skill: "oop" }, { skill: "c+++" }],
    duration: "90 de zile",
  },
];

const InternshipRequests = () => {

// bag state-ul cu internship-urile filtrate ca si prop
// schimb state in functie de on change sau cv vad
//eventual mut toate checkbox-urile aici


  return (
    <StyledInternshipRequestsLayout>
        <FilterCheckboxes />
      <InternshipList internships={DUMMY_INTERSHIPS} />
    </StyledInternshipRequestsLayout>
  );
};

export default InternshipRequests;
