import styled from 'styled-components';


export const InternshipContainer = styled.div`
min-height: 15rem;
max-width: 80rem;
padding: 1rem;
border: 2px solid #3f3f3f;
border-radius: 15px;
margin-bottom: 3rem;
`
export const InternshipTitle = styled.div`
display: flex;
justify-content: center;

`

export const InternshipInfo = styled.div`
display: flex;
margin: 1rem 0;
align-items: center;
`

export const InternshipCompany = styled.div`
margin: 1rem 0;
`

export const InternshipKnowledge = styled.div`
    display: flex;

    & > * {
        margin: 0 1rem;
        padding: 0.3rem;
        border: 2px solid #000;
    }
 `

 export const InternshipDate = styled.div`
 `

 export const InternshipSpots = styled.div`
 `

 export const InternshipDescription = styled.div`
 `
 export const InternshipLocation = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 `

export const InternshipActions = styled.div`
width: 100%;
margin: 1rem 0;
text-align: center;
`