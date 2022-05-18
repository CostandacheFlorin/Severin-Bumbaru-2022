import React from "react";
import { StyledListWrapper } from "./BusinessList.styled";
import Business from "../Business";
const BusinessList = ({ businesses }) => {
  return (
    <StyledListWrapper>
      {businesses.map((business) => {
        return (
          <Business
            key={business.id}
            id={business.id}
            name={business.name}
            description={business.description}
            address={business.address}
            status={business.status}
            
          />
        );
      })}
    </StyledListWrapper>
  );
};

export default BusinessList;
