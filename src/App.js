import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Home from "./pages/Home";
import "./App.css";
import ChakibooCreator from "./pages/ChakibooCreator/ChakibooCreator";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginContext from "./contexts/LoginContext";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const client = new ApolloClient({
  uri: "https://kettlecat-graphql.herokuapp.com/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleLogin = username => {
      this.setState(state => ({
        isLogged: true,
        loggedUser: username
      }));
    };

    this.state = {
      isLogged: false,
      loggedUser: "",
      toggleLogin: this.toggleLogin
    };
  }

  componentDidMount() {
    // fetch isUserAuthenticated?
  }

  handleLogout = () => {
    fetch("https://kettlecat-graphql.herokuapp.com/logout", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(response => {
      if (response.ok === true) {
        this.setState({ isLogged: false, loggedUser: "" });
      }
    });
  };

  render() {
    return (
      <div id="container">
        <LoginContext.Provider value={this.state}>
          <ApolloProvider client={client}>
          <MuiThemeProvider theme={theme}>
            <Router>
              <div>
                <div>
                  <AppBar position="static">
                    <Toolbar>
                      <Typography
                        variant="title"
                      >
                        <Link to="/">Kettlecat</Link>
                      </Typography>
                      <LoginContext.Consumer>
                        {({ isLogged, loggedUser }) =>
                          isLogged ? (
                            <React.Fragment>
                              <Typography>logged as {loggedUser}</Typography>
                              <Button
                                onClick={this.handleLogout}
                              >
                                Logout
                              </Button>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <Button>
                                <Link to="/login">Login</Link>
                              </Button>
                              <Button>
                                <Link to="/signup">Sign Up</Link>
                              </Button>
                            </React.Fragment>
                          )
                        }
                      </LoginContext.Consumer>
                    </Toolbar>
                  </AppBar>
                </div>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/creator" component={ChakibooCreator} />
                </Switch>
              </div>
            </Router>
        </MuiThemeProvider>
          </ApolloProvider>
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
