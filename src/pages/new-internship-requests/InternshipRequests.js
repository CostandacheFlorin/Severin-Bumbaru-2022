import React, { useEffect, useState } from "react";

import InternshipList from "../../components/Internship/InternshipList/InternshipList";
import { StyledInternshipRequestsLayout, StyledFilteredArea } from "./InternshipRequests.styled";
import FilterCheckboxes from "../../components/UIElements/FilterCheckboxes/FilterCheckboxes";
import FilterByCity from "../../components/UIElements/FilterByCity/FilterByCity";


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
  let interese3 = [{}];
  const [interese, setInterese] = useState([]);
  const [internships, setInternships] = useState([]);
  const [types, setTypes] = useState([]);
  
  // const [isChecked, setIsChecked] = useState(true);
  
  useEffect( () => {
    setInternships(DUMMY_INTERSHIPS);
  }, [internships]);

  // console.log(internships);

 

  const filterBy = (event) => {

   
    // console.log(event.target.value);

    if(interese.includes(event.target.value)) {
      const filteredInterese = interese.filter(interes => interes !== event.target.value);

      setInterese(filteredInterese);
      
    } else {
    setInterese([...interese, event.target.value]);
    }
    
    
  }

  const filterByType = (event) => {
    if(interese.includes(event.target.value)) {
      const filteredTypes = types.filter(type => type !== event.target.value);

      setTypes(filteredTypes);
      
    } else {
    setTypes([...types, event.target.value]);
    }
  }
  



  console.log(interese);
  console.log(types);
  // console.log(interese.length);
  // bag state-ul cu internship-urile filtrate ca si prop
  // schimb state in functie de on change sau cv vad
  //eventual mut toate checkbox-urile aici

  return (
    <StyledInternshipRequestsLayout>
      <StyledFilteredArea>
        <FilterCheckboxes  filterByType={filterByType} filterBy={filterBy} />
        <FilterByCity/>
      </StyledFilteredArea>

      <InternshipList internships={internships} />
    </StyledInternshipRequestsLayout>
  );
};

export default InternshipRequests;
