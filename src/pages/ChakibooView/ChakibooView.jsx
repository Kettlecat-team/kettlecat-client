import React from "react";
import ChakibooCompleteForm from "../../components/ChakibooCompleteForm";

function ChakibooView(props) {
  return (
    <ChakibooCompleteForm
      isCreation={false}
      editID={props.match.params.id}
      readOnly={true}
    />
  );
}

export default ChakibooView;
