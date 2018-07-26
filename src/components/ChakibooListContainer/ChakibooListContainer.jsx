import React from "react";
import Grid from '@material-ui/core/Grid';
import ChakibooList from "../ChakibooList";

const ChakibooListContainer = (props) => {

  return (

    <Grid container spacing={40} style={{ padding: 20, width: '100%' }}>
        <ChakibooList data={props} />
    </Grid>
  
  )
};

export default (ChakibooListContainer);
