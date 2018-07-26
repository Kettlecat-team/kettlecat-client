import React, { Component } from "react";
import Monaco from "../../components/Monaco";
import MonacoForm from "../../components/MonacoForm";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

const getData = id => {
  // Default options are marked with *
  return fetch("https://kettlecat-graphql.herokuapp.com/graphql", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      query: `
          query{
            chakiboo(id: "${id}"){
              id
              title
              code
              description
              language
            }
          }
        `
    }) // body data type must match "Content-Type" header
  })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};

const CREATE_CHAKIBOO = gql`
  mutation addChakiboo(
    $title: String
    $code: String
    $description: String
    $tags: [String]
    $language: String
  ) {
    createChakiboo(
      input: {
        title: $title
        code: $code
        description: $description
        tags: $tags
        language: $language
      }
    ) {
      id
    }
  }
`;

const UPDATE_CHAKIBOO = gql`
  mutation updateChakiboo(
    $title: String
    $code: String
    $description: String
    $tags: [String]
    $language: String
    $id: String
  ) {
    updateChakiboo(
      id: $id
      input: {
        title: $title
        code: $code
        description: $description
        tags: $tags
        language: $language
      }
    ) {
      id
    }
  }
`;

class ChakibooCompleteForm extends Component {
  state = {
    title: "",
    description: "",
    code: "//type code here",
    isDone: false,
    options: {
      mode: "markdown",
      theme: "material",
      lineNumbers: true,
      readOnly: this.props.readOnly
    }
  };

  componentDidMount() {
    if (!this.props.isCreation) {
      getData(this.props.editID).then(data => {
        let newOptions = Object.assign(this.state.options);
        newOptions.mode = data.data.chakiboo.language;
        this.setState({
          title: data.data.chakiboo.title,
          description: data.data.chakiboo.description,
          code: data.data.chakiboo.code,
          options: newOptions
        });
        console.log(data.data.chakiboo.code);
      });
    }
  }

  handleChange = event => {
    event.preventDefault();
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  changeMode = e => {
    const mode = e.target.value;
    let newOptions = Object.assign(this.state.options);
    newOptions.mode = mode;
    this.setState({
      options: newOptions
    });
  };

  initializeCode;

  updateCode = (editor, data, value) => {
    this.setState({
      code: value
    });
  };

  parseTags = description => {
    let descriptionFull = this.state.description;
    if (descriptionFull.indexOf("#") >= 0) {
      let parsedTags = descriptionFull
        .match(/(^|\W)(#[a-z\d][\w-]*)/gi)
        .map(value => value.substr(2));
      //console.log(parsedTags);
      return parsedTags;
    } else {
      return [];
    }
  };

  render() {
    if (this.state.isDone) {
      return <Redirect to="/" />;
    }
    return (
      <Mutation
        mutation={this.props.isCreation ? CREATE_CHAKIBOO : UPDATE_CHAKIBOO}
      >
        {(addChakiboo, { data, error }) => {
          return (
            <div>
              <Monaco
                value={this.state.code}
                onChange={this.updateCode.bind(this)}
                options={this.state.options}
                changeMode={this.changeMode}
                mode={this.state.mode}
              />
              <MonacoForm
                readOnly={this.props.readOnly}
                handleChange={this.handleChange}
                handleSubmit={e => {
                  e.preventDefault();
                  if (this.props.isCreation) {
                    addChakiboo({
                      variables: {
                        title: this.state.title,
                        description: this.state.description,
                        code: this.state.code,
                        tags: this.parseTags(this.state.description),
                        language: this.state.options.mode
                      }
                    });
                  } else {
                    addChakiboo({
                      variables: {
                        id: this.props.editID,
                        title: this.state.title,
                        description: this.state.description,
                        code: this.state.code,
                        tags: this.parseTags(this.state.description),
                        language: this.state.options.mode
                      }
                    });
                  }

                  this.setState({ isDone: true });
                }}
                title={this.state.title}
                description={this.state.description}
                tags={this.state.tags}
              />
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default ChakibooCompleteForm;
