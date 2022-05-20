import React, { useContext } from "react";
import Logo from "../logo/Logo";
import UserInfo from "../user-info/UserInfo";
import BusinessManagement from "../business-management/BusinessManagement";
import SearchInternship from "../search-internship/SearchInternship";
import InternshipReport from "../InternshipReport/InternshipReport";
import ManageUsers from "../manage-users/ManageUsers";
import { StyledNav, StyledNavbarActions } from "./MainNavigation.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
import ManageInternship from "../manage-internship/ManageInternship";
import StudentsProgress from "../view-students/StudentsProgress";
import InternshipRequests from "../new-internship-requests/InternshipRequests";
import ManageGuardians from "../internship-guardian/ManageGuardians";
import { AuthContext } from "../../../context/auth-context";
import MyInternships from "../my-internship/MyInternships";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);
  const permission = auth.permission;
  let navButtons;

  if (permission === "ADMIN") {
    navButtons = (
      <>
        <ManageUsers />
        <ManageInternship />
        <BusinessManagement />
      </>
    );
  }
  if (permission === "PROFESSOR") {
    navButtons = (
      <>
        <StudentsProgress />
      </>
    );
  }

  if (permission === "TUTOR") {
    navButtons = <></>;
  }

  if (permission === "COMPANY") {
    navButtons = (
      <>
        <ManageInternship /> <InternshipRequests />; <ManageGuardians />
      </>
    );
  }

  if (permission === "STUDENT") {
    navButtons = (
      <>
        <InternshipReport />
        <SearchInternship />
        <MyInternships />
      </>
    );
  }

  return (
    <StyledNav>
      <Logo />

      <StyledNavbarActions>
        <UserInfo />
        {navButtons}
        {auth.isLoggedIn && <LogoutButton />}
      </StyledNavbarActions>
    </StyledNav>
  );
};

export default MainNavigation;
