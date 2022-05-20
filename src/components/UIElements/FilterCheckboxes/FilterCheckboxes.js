import React, { useState } from "react";
import Text from "../Typography/Text";

import {
  StyledFilterHeader,
  StyledFilterBox,
  StyledFilterOptions,
  StyledFilterRemote,
} from "./FilterCheckboxes.styled";
import Checkbox from "../Checkbox/Checkbox";

const FilterCheckboxes = ({ filterBy, lista, filterByType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      filterBy();
      lista="ceva";
    }
  };

  return (
    <>
      <StyledFilterBox>
        <StyledFilterHeader>
          <Text type="text" size="large" color="#004abf" align="center">
            Categorie
          </Text>
        </StyledFilterHeader>
        <StyledFilterOptions>
          <Checkbox checked={true}
            onChange={filterBy}
            id="web development"
            name="web development"
            label="Web development"
            
          />
          <Checkbox
            onChange={filterBy}
            id="programming"
            name="programming"
            label="Programming"
          />
          <Checkbox
            onChange={filterBy}
            id="testing"
            name="testing"
            label="Software testing"
          />
          <Checkbox
            onChange={filterBy}
            id="graphic"
            name="graphic"
            label="Graphic Design"
          />
          <Checkbox
            onChange={filterBy}
            id="devops"
            name="devops"
            label="Devops"
          />

          <Checkbox
            onChange={filterBy}
            id="data"
            name="data"
            label="Data Science"
          />
          <Checkbox
            onChange={filterBy}
            id="database"
            name="database"
            label="Database administrator"
          />
          <Checkbox
            onChange={filterBy}
            id="security"
            name="security"
            label="Cyber security"
          />
          <Checkbox
            onChange={filterBy}
            id="networking"
            name="networking"
            label="Networking"
          />
          <Checkbox
            onChange={filterBy}
            id="human resources"
            name="human resources"
            label="Human resources"
          />
        </StyledFilterOptions>

        <StyledFilterHeader>
          <Text type="text" size="large" color="#004abf" align="center">
            Tip
          </Text>
        </StyledFilterHeader>
        <StyledFilterOptions>
          <Checkbox  onChange={filterByType}  id="remote" name="remote" label="Remote" />
          <Checkbox  onChange={filterByType} id="hibrid" name="hibrid" label="Hibrid" />
          <Checkbox  onChange={filterByType} id="fizic" name="fizic" label="Fizic" />
        </StyledFilterOptions>
      </StyledFilterBox>
    </>
  );
};

export default FilterCheckboxes;
