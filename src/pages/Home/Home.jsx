import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql"
});

class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppComponent />
      </ApolloProvider>
    );
  }
}

export default Home;
