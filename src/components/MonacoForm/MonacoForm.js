import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import '../MonacoForm/MonacoForm.css';
/* import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Monaco from '../Monaco';
import TextField from '@material-ui/core/TextField'; */

/* const parseTags = description => {
  const hashtagRegExp = /(^|\W)(#[a-z\d][\w-]*)/gi;
  description.match(hashtagRegExp).map(value => value.substr(2));
  console.log(hashtagRegExp);
}; */

const MonacoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="form">
      <TextField
        id="title"
        name="title"
        label="Title"
        value={props.title}
        onChange={props.handleChange}
        disabled={props.readOnly}
        margin="normal"
        className="title"
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        value={props.description}
        onChange={props.handleChange}
        multiline
        disabled={props.readOnly}
        margin="normal"
        className="description"
      />
      {props.readOnly ? null : (
        <Button variant="contained" type="submit" color="primary" className="submitbutton">
          Submit
        </Button>
      )}
    </div>
  </form>
);
// class MonacoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       tags: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     event.preventDefault();
//     /* let tags = this.state.description;

//     console.log(tags);  */

//     let value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value
//     });
//   }
//   handleSubmit(event) {
//     event.preventDefault();

//     let descriptionFull = this.state.description;

//     if (descriptionFull.indexOf('#') >=0) {
//       let parsedTags = descriptionFull.match(/(^|\W)(#[a-z\d][\w-]*)/gi).map(value => value.substr(2));
//       console.log(parsedTags);
//     }

//     alert(
//       "Title is: " +
//         this.state.title +
//         ". And the description is: " +
//         this.state.description
//     );
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Monaco />
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={this.state.title}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <input
//             type="text"
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value={this.handleSubmit} />
//       </form>
//     );
//   }
// }

export default MonacoForm;
