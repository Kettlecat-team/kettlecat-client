import React from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import ViewIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import { ThumbUp } from "@material-ui/icons";
import LoginContext from "./../../contexts/LoginContext";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function IconLabelButtons(props) {
  const { classes, chakibooID, authorID } = props;
  return (
    <LoginContext.Consumer>
      {({ isLogged, loggedUserID }) => {
        if (isLogged) {
          console.log(loggedUserID);
          console.log(authorID);
          if (loggedUserID === authorID) {
            return (
              <React.Fragment>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  <SaveIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Delete
                  <DeleteIcon className={classes.rightIcon} />
                </Button>

                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                >
                  Copy
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
                <IconButton>
                  <ThumbUp />
                </IconButton>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                >
                  Copy
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
                <IconButton>
                  <ThumbUp />
                </IconButton>
              </React.Fragment>
            );
          }
        } else {
          return (
            <Button variant="contained" size="small" className={classes.button}>
              <ViewIcon
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              View
            </Button>
          );
        }
      }}
    </LoginContext.Consumer>
  );
}

export default withStyles(styles)(IconLabelButtons);
