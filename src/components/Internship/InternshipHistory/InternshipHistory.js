import React, { useState } from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import Text from "../../UIElements/Typography/Text";

import {
  InternshipHistoryContent,
  InternshipHistoryWrapper,
  InternshipHistoryHeader,
  HiddenInfo,
} from "./InternshipHistory.styled";

const InternshipHistory = ({
  internshipStatus,
  internshipName,
  internshipPosition,
  internshipDescription,
  internshipSkills,
  internshipStartingDate,
  internshipDuration,
  internshipCompany

}) => {
  const [seeMore, setSeeMore] = useState(false);
  const [status, setStatus] = useState(internshipStatus);

  let statusColor;

  if (status === "ACCEPTED") {
    statusColor = "#00d775";
  } else if (status === "REJECTED") {
    statusColor = "red";
  } else {
    statusColor = "gray";
  }

  const seeMoreHandler = () => {
    setSeeMore(!seeMore);
  };
  console.log(seeMore);
  return (
    <InternshipHistoryWrapper>
      <InternshipHistoryHeader>
        <Text type="subtitle" color="#004abf">{internshipCompany}</Text>{" "}
        <StyledMediumButton onClick={seeMoreHandler}>
          Vezi detalii
        </StyledMediumButton>
        <Text type="subtitle" color={statusColor}>
          {internshipStatus}
        </Text>{" "}
      </InternshipHistoryHeader>
      <InternshipHistoryContent>
        {seeMore && (
          <HiddenInfo>
            <Text type="text" bold="true">
              {`Pozitie ${internshipPosition}`}
            </Text>
            <Text type="text" bold="true">
              {`Descriere: ${internshipDescription}`}
            </Text>
            <Text type="text" bold="true">
              {`Incepand cu: ${internshipStartingDate}`}
            </Text>
            <Text type="text" bold="true">
           {`Durata: ${internshipDuration}`}
            </Text>
            <Text type="text" bold="true">
              {`Orar: 9-15`}
            </Text>
            {/* <Text type="text" bold="true">
              {`Abilitati necesare ${internshipSkills}`}
            </Text> */}
          </HiddenInfo>
        )}
      </InternshipHistoryContent>
    </InternshipHistoryWrapper>
  );
};

export default InternshipHistory;
