import React, {useContext} from "react";
import Logo from "../logo/Logo";
import UserInfo from "../user-info/UserInfo";
import BusinessManagement from "../business-management/BusinessManagement";
import SearchInternship from "../search-internship/SearchInternship";
import InternshipReport from "../InternshipReport/InternshipReport";
import ManageUsers from "../manage-users/ManageUsers";
import {
  StyledNav,
  StyledNavbarActions
  
} from "./MainNavigation.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
import ManageInternship from "../manage-internship/ManageInternship";
import StudentsProgress from "../view-students/StudentsProgress";
import InternshipRequests from "../new-internship-requests/InternshipRequests";
import ManageGuardians from "../internship-guardian/ManageGuardians";
import { AuthContext } from "../../../context/auth-context";

const MainNavigation = (props) => {

  const auth = useContext(AuthContext);
  return (
    <StyledNav>
      <Logo />

    <StyledNavbarActions>

      <UserInfo />
       <BusinessManagement />
      <SearchInternship />
      <InternshipReport /> 
      {/* <ManageInternship/>
       <ManageUsers /> 
       <StudentsProgress /> 
       <InternshipRequests /> 
       <ManageGuardians /> */}
{auth.isLoggedIn && <LogoutButton />}
    </StyledNavbarActions>
      
      
    </StyledNav>
  );
};

export default MainNavigation;
