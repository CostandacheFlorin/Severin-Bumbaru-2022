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


function App() {

  const { permission, login, logout, userId } = useAuth();

  return (
    <>
       <AuthContext.Provider  value={{
          isLoggedIn: !!permission,
          permission: permission,
          userId,
          login: login,
          logout: logout,
        }}>


       
      <MainNavigation />

      <Switch>
        <Route path="/stagii" exact>
          <InternshipRequests />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/autentificare" exact>
          <Login />
        </Route>

        <Route path="/inregistrare" exact>
          <Register />
        </Route>

        <Route path="/inregistrare-firma" exact>
          <RegisterCompany />
        </Route>

        <Route path="/profil" exact>
          <Profile />
        </Route>

        <Route path="/gestionare-firme" exact>
        <ManageBusinesses/>
        </Route>



        <Redirect to="/" />
      </Switch>

      <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
