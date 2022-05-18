import React from 'react';
import {StyledInternshipError, StyledInternshipList}  from './InternshipList.styled';

import Internship from '../Internship/Internship';
const InternshipList = ({internships}) => {

    if (internships.length === 0) {
        return (
          <StyledInternshipError>
            Nu s-au gasit internship-uri..
          </StyledInternshipError>
        );
      }

      return (
        <StyledInternshipList>
          {internships.map((internship) => {
            return (
              <Internship
                key={internship.id}
                id={internship.id}
                title={internship.title}
                spots={internship.spots}
                location={internship.location}
                company={internship.company}
                startingDate={internship.startingDate}
                description={internship.description}
                skills={internship.skills}
                duration={internship.duration}
                type={internship.type}
                
              />
            );
          })}
        </StyledInternshipList>
      );
}


export default InternshipList;