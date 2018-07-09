import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const client = new ApolloClient({
  uri: "https://kettlecat-graphql.herokuapp.com/graphql"
});

const GET_CHAKIBOOS = gql`
  query {
    chakiboos {
      id
      title
      description
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={GET_CHAKIBOOS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
            return <div>{data.chakiboos[0].title}</div>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default Home;
