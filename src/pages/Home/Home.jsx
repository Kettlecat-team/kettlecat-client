import React, { Component } from "react";
import ChakibooListContainer from "../../components/ChakibooListContainer";
import { Query } from "react-apollo";
import queries from "./../../graphQL/queries";

class Home extends Component {
  parseData = data => {
    // console.log(data.chakiboos);
    data.chakiboos.forEach(d => (d.author.username = "Ramzi"));
    return data;
  };

  render() {
    return (
      <Query query={queries.GET_CHAKIBOOS} pollInterval={2000}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return <ChakibooListContainer data={data} />;
        }}
      </Query>
    );
  }
}

export default Home;
