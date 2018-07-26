import React, { Component } from "react";
import Monaco from "../../components/Monaco";
import MonacoForm from "../../components/MonacoForm";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

let defaults = {
  markdown: "//code",
  javascript: "//code"
};
let options = {
  lineNumbers: true,
  theme: "material"
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
class ChakibooCreator extends Component {
  state = {
    title: "",
    description: "",
    code: "//type code here",
    isDone: false,
    options: {
      mode: "markdown",
      theme: "material",
      lineNumbers: true,
      readOnly: false
    }
  };

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
      <Mutation mutation={CREATE_CHAKIBOO}>
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
                handleChange={this.handleChange}
                handleSubmit={e => {
                  e.preventDefault();
                  console.log("run");

                  addChakiboo({
                    variables: {
                      title: this.state.title,
                      description: this.state.description,
                      code: this.state.code,
                      tags: this.parseTags(this.state.description),
                      language: this.state.options.mode
                    }
                  });
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

export default ChakibooCreator;
