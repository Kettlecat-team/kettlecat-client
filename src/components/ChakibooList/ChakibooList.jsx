import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChakibooListButtons from "./ChakibooListButtons";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const ChakibooList = (props) => {
const {chakiboos} = props.data;
const { classes } = props;

  return ((chakiboos.map(({title, description, id,}) =>(
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}> 
            <div>{title} </div>
            <div>{description} </div>
            <ChakibooListButtons/>
         </Paper>
         
        </Grid>
      </Grid>
    </div>
    )))
  );
};

export default withStyles(styles)(ChakibooList);
