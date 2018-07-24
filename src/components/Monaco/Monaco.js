import React from "react";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";


const Monaco = (props) => {
  return (
  
  <div>
    
         <CodeMirror 
           value={props.value} 
           onChange={props.onChange} 
           options={props.options} 
        /> 

         <select 
          onChange={props.changeMode}
          value={props.mode}>
          <option value="markdown">Markdown</option>
          <option value="javascript">JavaScript</option>
        </select> 
         
      </div>
      )
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
