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
            console.log(internship);
            return (
              <Internship
                key={internship.id}
                id={internship.id}
                title={internship.theme}
                spots={internship.spots}
                location={internship.city}
                company={internship.company.name}
                startingDate={internship.startDate}
                description={internship.description}
                skills={internship.skills}
                duration={internship.duration}
                type={internship.type}
                schedule={internship.schedule}
                
              />
            );
          })}
        </StyledInternshipList>
      );
}


export default InternshipList;