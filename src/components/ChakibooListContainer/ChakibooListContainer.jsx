import React from "react";
import Grid from '@material-ui/core/Grid';
import ChakibooList from "../ChakibooList";


const ChakibooListContainer = (props) => {

  return (
    <Grid container spacing={24}>
        <ChakibooList data={props} />
    </Grid>
  )
};

export default (ChakibooListContainer);
