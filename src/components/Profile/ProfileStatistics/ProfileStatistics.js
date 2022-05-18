import React from "react";
import {
  StyledStatisticsData,
  StyledProfileStatistics,
  StyledStatisticHeader,
  StyledStatisticContent,
} from "./ProfileStatistics.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateReviewIcon from "@mui/icons-material/RateReview";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Text from "../../UIElements/Typography/Text";
import { Link } from "react-router-dom";

const ProfileStatistics = ({ orderNumber, favoriteNumber, reviewNumber }) => {
  return (
    <StyledProfileStatistics>
      <StyledStatisticsData>
        <StyledStatisticHeader>
          <BorderColorIcon />
          <Text type="text" size="medium">
            Comenzi
          </Text>
        </StyledStatisticHeader>
        <StyledStatisticContent>
          <Text type="text" bold="true">
            {`Numarul de comenzi: ${orderNumber}`}
          </Text>

          <Link to="/istoric-comenzi">
          <Text color="E6E6FA" type="text" bold="true" hovercolor="#0000FF">
            Spre comenziile mele
          </Text>
          </Link>
        </StyledStatisticContent>
      </StyledStatisticsData>

      <StyledStatisticsData color="#FF0000 ">
        <StyledStatisticHeader>
          <FavoriteIcon />
          <Text type="text" size="medium">
            Favorite
          </Text>
        </StyledStatisticHeader>
        <StyledStatisticContent>
          <Text type="text" bold="true">
            {`Numarul de produse la favorite: ${favoriteNumber}`}
          </Text>
          <Link to="/favorite">
          <Text color="E6E6FA" type="text" bold="true" hovercolor="#0000FF">
            Spre lista de favorite
          </Text>
          </Link>
        </StyledStatisticContent>
      </StyledStatisticsData>
      <StyledStatisticsData color="#FFA500">
        <StyledStatisticHeader>
          <RateReviewIcon />
          <Text type="text" size="medium">
            Reviews
          </Text>
        </StyledStatisticHeader>
        <StyledStatisticContent>
          <Text type="text" bold="true">
            {`Numarul de recenzii: ${reviewNumber}`}
          </Text>
          <Link to="/recenzii">
          <Text color="E6E6FA" type="text" bold="true" hovercolor="#0000FF">
            Spre recenziile mele
          </Text>
          </Link>
        </StyledStatisticContent>
      </StyledStatisticsData>
    </StyledProfileStatistics>
  );
};

export default ProfileStatistics;
