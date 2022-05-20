
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
   return  <StyledLogo>
        <Link to="/"> 
        <h2>StudentHUB</h2>
        </Link> 
      </StyledLogo>
}






export default Logo;