import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChakibooListButtons from "./ChakibooListButtons";
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const ChakibooList = (props) => {
const { chakiboos } = props.data.data;
const { classes } = props.data;

  return ((chakiboos.map(({title, description, id,}) =>(

      <Grid item xs={6}>

        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
            {title}
            </Typography>
            <Typography color="textSecondary">
            {description}
            </Typography>
          </CardContent>
          <CardActions>
            <ChakibooListButtons/>
          </CardActions>
        </Card>
        
      </Grid>

    )))
  );
};

export default withStyles(styles)(ChakibooList);
