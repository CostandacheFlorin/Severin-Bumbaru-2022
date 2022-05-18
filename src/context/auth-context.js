import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  permission: null,
  login: () => {},
  logout: () => {},
});
