import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Text from '../UIElements/Typography/Text';
// import Logo from "../../../img/logo.png";
// import Image from "../../UIElements/Image/Image";
import {
  StyledFooter,
  StyledFooterColumn1,
  StyledFooterColumn2,
  StyledFooterColumn3,
  Column1Logo,
  Column1About,
  StyledFooterListItem,
  StyledFooterList,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterColumn1>
        <Column1Logo>
          <Text variant="h3" type="Title" color="#fff" margin="1rem 0 0 0">
            NUME
          </Text>
        </Column1Logo>
        <Column1About>
          Suntem aici sa facem comunicarea intre firmele ce doresc sa ofere stagii de practica si studenti cat mai simpla, oferind unelte pentru a facilita o relatie puternica intre firma si student.
        </Column1About>
      </StyledFooterColumn1>
      <StyledFooterColumn2>
        <Text variant="h3" type="subtitle" margin="1rem" color="#fff">
          Link-uri folositoare
        </Text>
        <StyledFooterList>
          <StyledFooterListItem> Stagii de practica </StyledFooterListItem>
          <StyledFooterListItem> Firme partenere</StyledFooterListItem>
          <StyledFooterListItem> Pagina principala</StyledFooterListItem>
          <StyledFooterListItem>Setari profil</StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterColumn2>
      <StyledFooterColumn3>
        <Text variant="h3" type="subtitle" margin="1rem" color="#fff">
          Contact
        </Text>
        <StyledFooterList>
          <StyledFooterListItem>
            <HomeIcon /> Str. Științei nr. 2
          </StyledFooterListItem>
          <StyledFooterListItem>
            <EmailIcon /> contact@noi.com
          </StyledFooterListItem>
          <StyledFooterListItem>
            <PhoneInTalkIcon /> contact@noi.com
          </StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterColumn3>
    </StyledFooter>
  );
};

export default Footer;
