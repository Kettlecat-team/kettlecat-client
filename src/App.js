import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import ChakibooCreator from "./pages/ChakibooCreator/ChakibooCreator";

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

const App = props => {
  const { classes } = props;
  return (
    <div id="container">
    <ApolloProvider client={client}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Kettlecat
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creator" component={ChakibooCreator} />
        </Switch>
      </Router>
      </ApolloProvider>
    </div>
  );
};

export default withStyles(styles)(App);
