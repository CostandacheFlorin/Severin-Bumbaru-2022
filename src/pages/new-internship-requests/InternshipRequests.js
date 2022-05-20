import React, { useEffect, useState } from "react";

import InternshipList from "../../components/Internship/InternshipList/InternshipList";
import {
  StyledInternshipRequestsLayout,
  StyledFilteredArea,
} from "./InternshipRequests.styled";
import FilterCheckboxes from "../../components/UIElements/FilterCheckboxes/FilterCheckboxes";
import FilterByCity from "../../components/UIElements/FilterByCity/FilterByCity";
import { useHttpClient } from "../../hooks/http-hook";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";
const DUMMY_INTERSHIPS = [
  // {
  //   id: "id1",
  //   title: "Sef baze de date",
  //   description: "O sa ai grija de bazele de date si o sa le faci chestii",
  //   company: "intel",
  //   type: "remote",
  //   location: "Galati",
  //   spots: 30,
  //   startingDate: "30 februarie",
  //   skills: ['java', 'ruby'],
  //   duration: "90 de zile",
  //   schedule: "8-16",
  // },
  
];

const InternshipRequests = () => {
  let interese3 = [{}];
  const [interese, setInterese] = useState(['test']);
  const [internships, setInternships] = useState(DUMMY_INTERSHIPS);
  const [types, setTypes] = useState(['test']);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // const [isChecked, setIsChecked] = useState(true);

 

  const onClickHandler = async () => {
    try {
        
      const responseData = await sendRequest(
        `http://10.13.16.154:8080/getInternships`,
        "POST",JSON.stringify({
          type: types ,
          domain: interese
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(responseData);
      setInternships(responseData);
    } catch (err) {}
  }



  // console.log(internships);

  const filterBy = (event) => {
    // console.log(event.target.value);

    if (interese.includes(event.target.value)) {
      const filteredInterese = interese.filter(
        (interes) => interes !== event.target.value
      );

      setInterese(filteredInterese);
    } else {
      setInterese([...interese, event.target.value]);
    }
  };

  const filterByType = (event) => {
    if (interese.includes(event.target.value)) {
      const filteredTypes = types.filter((type) => type !== event.target.value);

      setTypes(filteredTypes);
    } else {
      setTypes([...types, event.target.value]);
    }
  };

  console.log(interese);
  console.log(types);
  // console.log(interese.length);
  // bag state-ul cu internship-urile filtrate ca si prop
  // schimb state in functie de on change sau cv vad
  //eventual mut toate checkbox-urile aici

  return (
    <StyledInternshipRequestsLayout>
      <StyledFilteredArea>
        <FilterCheckboxes filterByType={filterByType} filterBy={filterBy} />
        {/* <FilterByCity /> */}
        <StyledMediumButton style={{marginLeft: "2.5rem"}} onClick={onClickHandler}>Filtrare</StyledMediumButton>
      </StyledFilteredArea>

      <InternshipList internships={internships} />
    </StyledInternshipRequestsLayout>
  );
};

export default InternshipRequests;
