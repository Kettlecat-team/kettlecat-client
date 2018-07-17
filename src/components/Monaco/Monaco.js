import React from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
import LanguageButton from "../LanguageButton";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

class Monaco extends React.Component {
  constructor(props) {
    super();
    this.state = {
      code: "//type code here"
    };
  }

  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    this.setState({
      code: this.state.value
    });
    console.log(this.state);
  }
  render() {
    const code = this.state.code;
    const options = {
      mode: "xml",
      theme: "material",
      lineNumbers: true
    };
    return (
      <div>
        <CodeMirror
          value={this.state.value}
          options={options}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, data, value) => {}}
        />{" "}
        {/* <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={this.props.code}
          options={options}
          onChange={this.props.handleCodeChange}
          editorDidMount={this.editorDidMount.bind(this)}
        />
        <div />
        <div className="menu">
          <label>Languages</label>
          <select className="langMenu">
            <option>bat</option>
            <option>c</option>
            <option>coffeescript</option>
            <option>cpp</option>
            <option>csharp</option>
            <option>csp</option>
            <option>css</option>
            <option>dockerfile</option>
            <option>fsharp</option>
            <option>go</option>
            <option>handlebars</option>
            <option>html</option>
            <option>ini</option>
            <option>java</option>
            <option>javascript</option>
            <option>json</option>
            <option>less</option>
            <option>lua</option>
            <option>markdown</option>
            <option>msdax</option>
            <option>mysql</option>
            <option>objective-c</option>
            <option>pgsql</option>
            <option>php</option>
            <option>plaintext</option>
            <option>postiats</option>
            <option>powershell</option>
            <option>pug</option>
            <option>python</option>
            <option>r</option>
            <option>razor</option>
            <option>redis</option>
            <option>redshift</option>
            <option>ruby</option>
            <option>rust</option>
            <option>sb</option>
            <option>scss</option>
            <option>sol</option>
            <option>sql</option>
            <option>st</option>
            <option>swift</option>
            <option>typescript</option>
            <option>vb</option>
            <option>xml</option>
            <option>yaml</option>
          </select>
        </div> */}
      </div>
    );
  }
}

export default Monaco;
