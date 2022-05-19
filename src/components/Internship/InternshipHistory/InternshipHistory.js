import React, { useState } from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import Text from "../../UIElements/Typography/Text";

import {
  InternshipHistoryContent,
  InternshipHistoryWrapper,
  InternshipHistoryHeader,
  HiddenInfo
} from "./InternshipHistory.styled";

const InternshipHistory = ({internshipStatus}) => {
  const [seeMore, setSeeMore] = useState(false);
  const [status, setStatus] = useState(internshipStatus);

  let statusColor;

  if(status === "acceptat"){
    statusColor="#00d775";
  }else if(status ==="refuzat"){
      statusColor ="red";
  }else {
      statusColor="gray";
  }
  
  const seeMoreHandler = () => {
      setSeeMore(!seeMore);
      
  }
  console.log(seeMore);
  return (
    <InternshipHistoryWrapper>
      <InternshipHistoryHeader>
        <Text type="subtitle" color="#004abf" >
          Denumire
        </Text>{" "}
        <StyledMediumButton onClick={seeMoreHandler}>Vezi detalii</StyledMediumButton>

        <Text type="subtitle" color={statusColor} >
          {internshipStatus}
        </Text>{" "}
      </InternshipHistoryHeader>
      <InternshipHistoryContent>
          {seeMore && <HiddenInfo>
          <Text type="text" bold="true">Pozitie</Text>
          <Text type="text" bold="true">Descriere</Text>
          <Text type="text" bold="true">Incepand de la</Text>
          <Text type="text" bold="true">Durata</Text>
          <Text type="text" bold="true">Orar</Text>
          <Text type="text" bold="true">Cunostiinte necesare</Text>
          </HiddenInfo>}
          
          
      </InternshipHistoryContent>
    </InternshipHistoryWrapper>
  );
};

export default InternshipHistory;
