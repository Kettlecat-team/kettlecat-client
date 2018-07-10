import React from "react";
import Paper from '@material-ui/core/Paper';

const ChakibooList = (props) => {
const {chakiboos} = props.data
return(chakiboos.map(({title, description, id}) =>(
    <Paper>
        <div>{title} </div>
        <div>{description} </div>
    </Paper>
)));

};

export default ChakibooList;