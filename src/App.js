import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginContext from "./contexts/LoginContext";

const client = new ApolloClient({
  uri: "https://kettlecat-graphql.herokuapp.com/graphql"
});

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleLogin = () => {
      this.setState(state => ({
        isLogged: !state.isLogged
      }));
    };

    this.state = {
      isLogged: false,
      toggleLogin: this.toggleLogin
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="container">
        <LoginContext.Provider value={this.state}>
          <ApolloProvider client={client}>
            <Router>
              <div>
                <div className={classes.root}>
                  <AppBar position="static">
                    <Toolbar>
                      <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                      >
                        <Link to="/">Kettlecat</Link>
                      </Typography>
                      <Button color="inherit">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button color="inherit">
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </Toolbar>
                  </AppBar>
                </div>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                </Switch>
              </div>
            </Router>
          </ApolloProvider>
        </LoginContext.Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
