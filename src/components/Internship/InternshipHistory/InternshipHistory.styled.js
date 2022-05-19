import styled from 'styled-components';


export const InternshipHistoryWrapper = styled.div`
max-width: 60rem;
min-height: max-content   ;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 3rem auto;

`

export const InternshipHistoryHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
padding: 2rem 3rem;
`

export const InternshipHistoryContent = styled.div`
height: max-content;

`

export const HiddenInfo = styled.div`
width: max-content;
margin: 0 auto;
display: flex;
flex-direction: column;
/* align-items: center; */
& > * {
    margin: 1rem 0;
}
`