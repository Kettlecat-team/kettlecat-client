import React from "react";

const LoginContext = React.createContext({
  isLogged: false,
  loggedUser: "",
  toggleLogin: () => {}
});

export default LoginContext;
