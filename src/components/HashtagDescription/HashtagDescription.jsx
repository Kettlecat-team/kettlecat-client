import React from "react";
import { Link } from "react-router-dom";

const parseString = text => {
  var parts = text.split(/(^|\W)(#[a-z\d][\w-]*)/gi);
  for (var partIndex in parts) {
    if (parts[partIndex].charAt(0) === "#") {
      parts[partIndex] = (
        <Link to={`/tag/${parts[partIndex].substring(1)}`}>
          {parts[partIndex]}
        </Link>
      );
    }
    // console.log(parts);
    // const newText = (
    //   <React.Fragment>
    //     {text.replace(/(^|\W)(#[a-z\d][\w-]*)/gi, matchText => (
    //       <Link to={`/tag/${matchText}`}>#{matchText}</Link>
    //     ))}
    //   </React.Fragment>
    // );
    // console.log(newText);
    // return newText;
  }
  return <React.Fragment>{parts}</React.Fragment>;
};

const HashtagDescription = function(props) {
  return <React.Fragment>{parseString(props.value)}</React.Fragment>;
};

export default HashtagDescription;
