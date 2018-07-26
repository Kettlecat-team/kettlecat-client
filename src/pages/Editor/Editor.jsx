import React from "react";
import ChakibooCompleteForm from "../../components/ChakibooCompleteForm";

function Editor(props) {
  return (
    <ChakibooCompleteForm
      isCreation={false}
      editID={props.match.params.id}
      readOnly={false}
    />
  );
}

// const getData = id => {
//   // Default options are marked with *
//   return fetch("https://kettlecat-graphql.herokuapp.com/graphql", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, cors, *same-origin
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//       // "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify({
//       query: `
//           query{
//             chakiboo(id: "${id}"){
//               id
//               title
//               description
//               language
//             }
//           }
//         `
//     }) // body data type must match "Content-Type" header
//   })
//     .then(response => response.json()) // parses response to JSON
//     .catch(error => console.error(`Fetch Error =\n`, error));
// };

// let defaults = {
//   markdown: "//code",
//   javascript: "//code"
// };
// let options = {
//   lineNumbers: true
// };
// const FETCH_CHAKIBOO = gql`
//   query fetchChakiboo($id: String) {
//     chakiboo(id: $id) {
//       title
//       description
//       code
//       language
//     }
//   }
// `;
// const UPDATE_CHAKIBOO = gql`
//   mutation updateChakiboo(
//     $title: String
//     $code: String
//     $description: String
//     $tags: [String]
//     $language: String
//     $id: String
//   ) {
//     updateChakiboo(
//       id: $id
//       input: {
//         title: $title
//         code: $code
//         description: $description
//         tags: $tags
//         language: $language
//       }
//     ) {
//       id
//     }
//   }
// `;
// class Editor extends Component {
//   state = {
//     title: "",
//     description: "",
//     code: "//type code here",
//     tags: [],
//     mode: "markdown",
//     readOnly: false,
//     isDone: false
//   };

//   componentDidMount() {
//     getData(this.props.match.params.id).then(data => {
//       this.setState({
//         title: data.data.chakiboo.title,
//         description: data.data.chakiboo.description,
//         code: data.data.chakiboo.code,
//         language: data.data.chakiboo.language
//       });
//     });
//   }

//   handleChange = event => {
//     event.preventDefault();

//     let value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleCodeChange(event) {
//     const value = event.target.value;
//     this.setState({
//       code: value
//     });
//     console.log(value);
//   }

//   changeMode = e => {
//     var mode = e.target.value;
//     console.log(mode);
//     this.setState({
//       mode: mode,
//       code: defaults[mode]
//     });
//   };

//   updateCode = newCode => {
//     this.setState({
//       code: newCode
//     });
//   };
//   handleSubmit = event => {
//     event.preventDefault();

//     let descriptionFull = this.state.description;
//     let tags = [];
//     if (descriptionFull.indexOf("#") >= 0) {
//       let parsedTags = descriptionFull
//         .match(/(^|\W)(#[a-z\d][\w-]*)/gi)
//         .map(value => value.substr(2));
//       //console.log(parsedTags);

//       tags.push(parsedTags);
//       this.setState({
//         tags: parsedTags
//       });
//       alert(
//         "Title is: " +
//           this.state.title +
//           ". And the description is: " +
//           this.state.description +
//           "the hash is " +
//           parsedTags +
//           "the code is: " +
//           this.state.code
//       );
//     } else {
//       alert(
//         "Title is: " +
//           this.state.title +
//           ". And the description is: " +
//           this.state.description +
//           ". The code is: " +
//           this.state.code
//       );
//     }

//     console.log(tags);
//   };
//   render() {
//     if (this.state.isDone) {
//       return <Redirect to="/" />;
//     }
//     return (
//       // <Query query={FETCH_CHAKIBOO} variables={{id: this.props.match.params.id}}>
//       //     {({ loading, error, data }) => {
//       // if (loading) return <div>Loading...</div>;
//       // if (error) return <div>Error :(</div>;
//       //     this.setState({
//       //         title: data.chakiboo.title,
//       //         description: data.chakiboo.description,
//       //         code: data.chakiboo.code,
//       //         language: data.chakiboo.language
//       //     })
//       // return(
//       <Mutation mutation={UPDATE_CHAKIBOO}>
//         {(addChakiboo, { data, error }) => {
//           return (
//             <div>
//               <Monaco
//                 value={this.state.code}
//                 onChange={this.updateCode.bind(this)}
//                 options={options}
//                 changeMode={this.changeMode}
//                 mode={this.state.mode}
//               />
//               <MonacoForm
//                 handleChange={this.handleChange}
//                 handleSubmit={e => {
//                   e.preventDefault();
//                   console.log("run");

//                   addChakiboo({
//                     variables: {
//                       id: this.props.match.params.id,
//                       title: this.state.title,
//                       description: this.state.description,
//                       code: this.state.code,
//                       tags: this.state.tags,
//                       language: this.state.mode
//                     }
//                   });
//                   this.setState({ isDone: true });
//                 }}
//                 title={this.state.title}
//                 description={this.state.description}
//                 tags={this.state.tags}
//               />
//             </div>
//           );
//         }}
//       </Mutation>
//     );
//     // }}
//     // </Query>
//   }
// }

export default Editor;
