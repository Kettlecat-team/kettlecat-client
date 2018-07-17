import React from "react";

const LoginContext = React.createContext({
  isLogged: false,
  toggleLogin: () => {}
});

export default LoginContext;
