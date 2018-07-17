import React, {Component} from 'react';
import Monaco from "../../components/Monaco";
import MonacoForm from '../../components/MonacoForm';

class ChakibooCreator extends Component {
    state = {
        title: "",
        description: "",
        code: "",
        tags: [],
        launguage: "",
    }

    handleChange = event => {
        event.preventDefault();
        
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
    
        let descriptionFull = this.state.description;
        let tags = [];
        if (descriptionFull.indexOf('#') >=0) {
          let parsedTags = descriptionFull.match(/(^|\W)(#[a-z\d][\w-]*)/gi).map(value => value.substr(2));
          //console.log(parsedTags);
            
          tags.push(parsedTags);
          
          alert(
            "Title is: " +
              this.state.title +
              ". And the description is: " +
              this.state.description + "the hash is " + parsedTags
          );
        } else{
            alert(
                "Title is: " +
                  this.state.title +
                  ". And the description is: " +
                  this.state.description
              );
        }
       
        console.log(tags);
    }
    render() {
        return (
            <div>
                <Monaco />
                <MonacoForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    title= {this.state.title}
                    description= {this.state.description}
                    code= {this.state.code}
                    tags= {this.state.tags}
                    launguage= {this.state.language}
                />
            </div>
        )
    }
};

export default ChakibooCreator;