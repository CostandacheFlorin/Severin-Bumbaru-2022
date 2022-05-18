import React from 'react';
import Text from '../Typography/Text';

import {StyledFilterHeader, StyledFilterBox, StyledFilterOptions} from './FilterCheckboxes.styled';
import Checkbox from '../Checkbox/Checkbox';

const FilterCheckboxes = () => {
    return (
        <>
        
        
        <StyledFilterBox>
            <StyledFilterHeader>
                <Text type="text" size="large" color="#004abf" align="center">Categorie</Text>
            </StyledFilterHeader>
            <StyledFilterOptions>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>

            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            <Checkbox id="test" name="test" label="Ceva"/>
            </StyledFilterOptions>

            <StyledFilterHeader>
                <Text type="text" size="large" color="#004abf" align="center">Remote</Text>
            </StyledFilterHeader>
            <StyledFilterOptions>
            <Checkbox id="remote" name="remote" label="Da"/>
           
            </StyledFilterOptions>

        </StyledFilterBox>

        


        
        </>
    )

}


export default FilterCheckboxes;