import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import Internship from "./components/Internship/Internship/Internship";
import InternshipRequests from "./pages/new-internship-requests/InternshipRequests";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterCompany from "./pages/Register/register-company/RegisterCompany";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./context/auth-context";
import Profile from "./pages/Profile/Profile";
import Business from "./components/Business/Business";
import ManageBusinesses from "./pages/ManageBusinesses/ManageBusinesses";
import Home from "./pages/Home/Home";
import { useContext } from "react";
import ProfileForm from "./components/Profile/ProfileForm/ProfileForm";
import BusinessProfileForm from "./components/Profile/ProfileForm/BusinessProfileForm";

import TutorFormPage from "./pages/TutorFormPage/TutorFormPage";
import InternshipFormPage from "./pages/InternshipForm/InternshipFormPage";
import BusinessProfile from "./components/Profile/BusinessProfile/BusinessProfile";
import BusinessProfilePage from "./pages/BusinessProfilePage/BusinessProfilePage";
import InternshipHistory from "./components/Internship/InternshipHistory/InternshipHistory";
import RequestCard from "./components/Tutor/RequestCard/RequestCard";
import ProfessorCard from "./components/ProfessorCard/ProfessorCard";
function App() {
  const { permission, login, logout, userId } = useAuth();
  const auth = useContext(AuthContext);

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!permission,
          permission: permission,
          userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />

        <Switch>
          <Route path="/stagii" exact>
            <InternshipRequests />
          </Route>

          <Route path="/gestionare-stagii" exact>
            <InternshipRequests />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/modifica-profil" exact>
            <ProfileForm />
          </Route>
          <Route path="/modifica-profil-firma" exact>
            <BusinessProfileForm />
          </Route>

          {!userId && (
            <Route path="/autentificare" exact>
              <Login />
            </Route>
          )}

          {!userId && (
            <Route path="/inregistrare" exact>
              <Register />
            </Route>
          )}

          <Route path="/inregistrare-firma" exact>
            <RegisterCompany />
          </Route>

          <Route path="/profil" exact>
            <Profile />
          </Route>

          <Route path="/profil-firma" exact>
            <BusinessProfilePage />
          </Route>
          <Route path="/gestionare-tutori" exact>
            <TutorFormPage />
          </Route>

          <Route path="/adauga-stagii" exact>
            <InternshipFormPage />
          </Route>

          <Route path="/gestionare-firme" exact>
            <ManageBusinesses />
          </Route>
          <Route path="/test" exact>
            <InternshipHistory internshipStatus="acceptat" />
            <InternshipHistory internshipStatus="refuzat" />
            <InternshipHistory internshipStatus="in asteptare" />
            <InternshipHistory internshipStatus="acceptat" />
            <InternshipHistory internshipStatus="refuzat" />
            <InternshipHistory internshipStatus="in asteptare" />
          </Route>

          <Route path="/test2" exact>
            <RequestCard />
          </Route>

          <Route path="/test3" exact>
            <ProfessorCard />
          </Route>

          <Redirect to="/" />
        </Switch>

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
