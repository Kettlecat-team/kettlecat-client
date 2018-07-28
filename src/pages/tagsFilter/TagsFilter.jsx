import React, { Component } from "react";
import ChakibooListContainer from "../../components/ChakibooListContainer";
import { Query } from "react-apollo";
import queries from "./../../graphQL/queries";

// const GET_CHAKIBOOS = gql`
//   query {
//     chakiboos {
//       id
//       title
//       description
//       author {
//         username
//         id
//       }
//     }
//   }
// `;

class TagsFilter extends Component {
  parseData = data => {
    // console.log(data.chakiboos);
    data.chakiboos.forEach(d => (d.author.username = "Ramzi"));
    return data;
  };

  render() {
    return (
      <Query
        query={queries.GET_BY_TAG}
        variables={{ tag: this.props.match.params.tag }}
        pollInterval={2000}
      >
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return <ChakibooListContainer data={data} />;
        }}
      </Query>
    );
  }
}

export default TagsFilter;
