import styled from 'styled-components';
export const StyledInternshipRequestsLayout = styled.div`
display: grid;
grid-template-columns: 250px 1fr;
width: 90%;
margin: 0 auto;
grid-gap: 2rem;



@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
}

`

export const StyledFilteredArea = styled.div`
`