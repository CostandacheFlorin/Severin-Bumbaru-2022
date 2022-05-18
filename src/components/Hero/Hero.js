import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../data/globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

import Video from "../../assets/hero.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={Video} autoPlay muted loop />
      <Container>
        <MainHeading>Gestiunea Stagiilor de Practică</MainHeading>
        <HeroText>
          Oferim cea mai bună platformă de organizare a ofertelor de practică
          {/* We provide the best security systems for clients all over the world */}
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Intregistrare Student</Button>
          </Link>
          <Link to="signup">
            <Button>Inregistrare Firma</Button>
          </Link>
          <Link to="signup">
            <Button>Inregistrare Profesor</Button>
          </Link>
          {/* <HeroButton>Find More</HeroButton> */}
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
