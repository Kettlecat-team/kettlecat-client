import React, {Component} from 'react';
import Monaco from "../../components/Monaco";
import MonacoForm from '../../components/MonacoForm';
let defaults = {
    markdown: "//code",
    javascript: "//code",
  }
  let options = {
    lineNumbers: true,

  }
class ChakibooCreator extends Component {
    state = {
        title: "",
        description: "",
        code: "//type code here",
        tags: [],
        mode: "markdown",
        readOnly: false,
    }

    handleChange = event => {
        event.preventDefault();
        
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value,
        });
    };

    handleCodeChange(event) {

        const value = event.target.value;
        this.setState({ 
          code: value
        })
        console.log(value);
      };

      changeMode = (e) => {
        var mode = e.target.value;
        console.log(mode);
            this.setState({
                mode: mode,
                code: defaults[mode]
            });
      }
      
      updateCode = (newCode) => {
        this.setState({
          code: newCode
        });
    
      }
    handleSubmit = event => {
        event.preventDefault();
    
        let descriptionFull = this.state.description;
        let tags = [];
        if (descriptionFull.indexOf('#') >=0) {
          let parsedTags = descriptionFull.match(/(^|\W)(#[a-z\d][\w-]*)/gi).map(value => value.substr(2));
          //console.log(parsedTags);
            
          tags.push(parsedTags);
          this.setState({
              tags: parsedTags,
          });
          alert(
            "Title is: " +
              this.state.title +
              ". And the description is: " +
              this.state.description + "the hash is " + parsedTags + "the code is: " + this.state.code
          );
        } else{
            alert(
                "Title is: " +
                  this.state.title +
                  ". And the description is: " +
                  this.state.description + ". The code is: " + this.state.code
              );
        }
       
        console.log(tags);
    }
    render() {
        return (
            <div>
                <Monaco 
                    value={this.state.code}
                    onChange={this.updateCode.bind(this)}
                    options={options}
                    changeMode={this.changeMode}
                    mode={this.state.mode}
                />
                <MonacoForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    title= {this.state.title}
                    description= {this.state.description}
                    tags= {this.state.tags}
                    launguage= {this.state.language}
                />
            </div>
        )
    }
};

export default ChakibooCreator;