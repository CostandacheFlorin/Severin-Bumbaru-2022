import styled from 'styled-components';

export const StyledInputContainer = styled.div`
display: flex;
flex-direction:column;
font-family: "Myriad", sans-serif;

& input {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "28px"};
    border: 2px solid #ebebeb;
}

`
