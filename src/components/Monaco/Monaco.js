import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
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

      <select onChange={props.changeMode} value={props.options.mode}>
        <option value="markdown">Markdown</option>
        <option value="javascript">JavaScript</option>
        <option value="xml">JavaScript</option>
        <option value="htmlmixed">HTML</option>
        <option value="css">CSS</option>
        <option value="go">Go</option>
        <option value="python">Python</option>
      </select>
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
