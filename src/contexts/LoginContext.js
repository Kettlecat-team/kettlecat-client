import React from "react";

const LoginContext = React.createContext({
  isLogged: false,
  loggedUser: "",
  loggedUserID: "",
  toggleLogin: () => {}
});

export default LoginContext;
