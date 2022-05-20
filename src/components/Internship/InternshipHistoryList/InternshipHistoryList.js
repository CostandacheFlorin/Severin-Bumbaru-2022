import React from 'react';

import InternshipHistory from '../InternshipHistory/InternshipHistory';
import {StyledApplicationsWrapper} from '../../../pages/MyInternships/MyInternships.styled';
const InternshipHistoryList = ({internshipHistoryList}) => {
  console.log(internshipHistoryList);

    if(internshipHistoryList.length===0) {
      return<StyledApplicationsWrapper>Nu s-au gasit aplicatii</StyledApplicationsWrapper>
    }
    return (
        <div>
        {internshipHistoryList.map(historyList => {
            return (
              <InternshipHistory
                key={historyList.internship.id}
                internshipStatus={historyList.status}
                internshipPosition={historyList.internship.theme}
                internshipDuration={historyList.internship.duration}
                // internshipSkills={historyList.skills}
                internshipStartingDate={historyList.internship.startDate}
                internshipDescription={historyList.internship.description}
                internshipCompany={historyList.company.name}
                
                
                
              />
            );
          })}
          </div>
    );

}



export default InternshipHistoryList;