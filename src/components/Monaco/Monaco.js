import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "../../../node_modules/@material-ui/core";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/markdown/markdown");
require("codemirror/mode/htmlmixed/htmlmixed");
require("codemirror/mode/css/css");
require("codemirror/mode/go/go");
require("codemirror/mode/python/python");

const Monaco = props => {
  return (
    <div>
      <CodeMirror
        value={props.value}
        onBeforeChange={props.onChange}
        options={props.options}
      />

      <FormControl disabled={props.readOnly}>
        <InputLabel htmlFor="language">Language</InputLabel>
        <Select
          value={props.options.mode}
          onChange={props.changeMode}
          inputProps={{
            name: "Language",
            id: "language"
          }}
        >
          <MenuItem value="markdown">Markdown</MenuItem>
          <MenuItem value="javascript">JavaScript</MenuItem>
          <MenuItem value="xml">XML</MenuItem>
          <MenuItem value="htmlmixed">HTML</MenuItem>
          <MenuItem value="css">CSS</MenuItem>
          <MenuItem value="go">Go</MenuItem>
          <MenuItem value="python">Python</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

// class Monaco extends React.Component {
//    constructor(props) {
//      super();

//      this.state = {

//        code: "//type code here",
//        mode: "javascript",
//        readOnly: false,
//      };
//    }

//   changeMode = (e) => {
//     var mode = e.target.value;
//     console.log(mode);
// 		this.setState({
// 			mode: mode,
// 			code: ""
// 		});
//   }

//   updateCode = (newCode) => {
//     this.setState({
//       code: newCode
//     });

//   }
//   render() {

//     let options = {
//       lineNumbers: true,
//       readOnly: this.state.readOnly,
//       mode: this.state.mode
//     }
//     return (
//       <div>
//         <CodeMirror
//           value={this.state.code}
//           onChange={this.updateCode.bind(this)}
//           options={options}
//         />

//         <select
//           onChange={this.changeMode}
//           value={this.state.mode}>
//           <option value="markdown">Markdown</option>
//           <option value="javascript">JavaScript</option>
//         </select>

//       </div>
//     );
//   }
// }

export default Monaco;
