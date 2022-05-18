import React from 'react';
import Text from '../Typography/Text';

import {StyledFilterHeader, StyledFilterBox, StyledFilterOptions,StyledFilterRemote} from './FilterCheckboxes.styled';
import Checkbox from '../Checkbox/Checkbox';

const FilterCheckboxes = () => {
    return (
        <>
        
        
        <StyledFilterBox>
            <StyledFilterHeader>
                <Text type="text" size="large" color="#004abf" align="center">Categorie</Text>
            </StyledFilterHeader>
            <StyledFilterOptions>
            <Checkbox id="test" name="test" label="Web development"/>
            <Checkbox id="test" name="test" label="Programming"/>
            <Checkbox id="test" name="test" label="Software testing"/>
            <Checkbox id="test" name="test" label="Graphic Design"/>
            <Checkbox id="test" name="test" label="Devops"/>

            <Checkbox id="test" name="test" label="Data Science"/>
            <Checkbox id="test" name="test" label="Database administrator"/>
            <Checkbox id="test" name="test" label="Cyber security"/>
            <Checkbox id="test" name="test" label="Networking"/>
            <Checkbox id="test" name="test" label="Human resources"/>
            </StyledFilterOptions>

            <StyledFilterHeader>
                <Text type="text" size="large" color="#004abf" align="center">Tip</Text>
            </StyledFilterHeader>
            <StyledFilterOptions>
            <Checkbox  id="remote" name="remote" label="Remote"/>
            <Checkbox  id="hibrid" name="hibrid" label="Hibrid"/>
            <Checkbox  id="fizic" name="fizic" label="Fizic"/>
           
            </StyledFilterOptions>

        </StyledFilterBox>

        


        
        </>
    )

}


export default FilterCheckboxes;