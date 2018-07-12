import React, { Component } from "react";
import Monaco from "../../components/Monaco";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

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
      <Query query={GET_CHAKIBOOS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return <div></div>
        }}
      </Query>
    );
  }
}

export default Home;
