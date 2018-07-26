import React, { Component } from "react";
import ChakibooListContainer from "../../components/ChakibooListContainer";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_AUTHOR_CHAKIBOOS = gql`
query fetchAuthorChakiboos($id: String){
    author(id: $id) {
      chakiboos {
        id
        title
        description
        author {
          id
          username
        }
      }
    }
  }

`;

class MyChakiboos extends Component {
  parseData = data => {
    // console.log(data.chakiboos);
    data.chakiboos.forEach(d => (d.author.username = "Ramzi"));
    return data;
  };

  render() {
    return (
      <Query query={GET_AUTHOR_CHAKIBOOS} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return <ChakibooListContainer data={data.author} />;
        }}
      </Query>
    );
  }
}


export default MyChakiboos;