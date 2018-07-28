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
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "../../../node_modules/react-apollo";

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

const FORK_CHAKIBOO = gql`
  mutation forkChakiboo($id: String) {
    forkChakiboo(id: $id) {
      id
    }
  }
`;

const DELETE_CHAKIBOO = gql`
  mutation deleteChakiboo($id: String) {
    deleteChakiboo(id: $id)
  }
`;

function IconLabelButtons(props) {
  const { classes, chakibooID, authorID } = props;
  return (
    <LoginContext.Consumer>
      {({ isLogged, loggedUserID }) => {
        if (isLogged) {
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
                <Mutation
                  mutation={DELETE_CHAKIBOO}
                  variables={{ id: chakibooID }}
                >
                  {(deleteChakiboo, { data, error }) => (
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => {
                        deleteChakiboo({ variables: { id: chakibooID } });
                      }}
                    >
                      Delete
                      <DeleteIcon className={classes.rightIcon} />
                    </Button>
                  )}
                </Mutation>
                <Mutation
                  mutation={FORK_CHAKIBOO}
                  variables={{ id: chakibooID }}
                >
                  {(forkChakiboo, { data, error }) => (
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      onClick={() => {
                        forkChakiboo({ variables: { id: chakibooID } });
                      }}
                    >
                      Fork
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  )}
                </Mutation>
                <IconButton>
                  <ThumbUp />
                </IconButton>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Mutation
                  mutation={FORK_CHAKIBOO}
                  variables={{ id: chakibooID }}
                >
                  {(forkChakiboo, { data, error }) => (
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      onClick={() => {
                        forkChakiboo({ variables: { id: chakibooID } });
                      }}
                    >
                      Fork
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  )}
                </Mutation>
                <IconButton>
                  <ThumbUp />
                </IconButton>
              </React.Fragment>
            );
          }
        } else {
          return (
            <Button variant="contained" size="small" className={classes.button}>
              <Link to={`/viewer/${chakibooID}`}>
                View
                <ViewIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
              </Link>
            </Button>
          );
        }
      }}
    </LoginContext.Consumer>
  );
}

export default withStyles(styles)(IconLabelButtons);
