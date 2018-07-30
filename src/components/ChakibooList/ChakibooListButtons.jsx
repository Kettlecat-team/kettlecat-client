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

import queries from "./../../graphQL/queries"

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
                <Link to={`/viewer/${chakibooID}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                  >
                    View
                    <ViewIcon
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                  </Button>
                </Link>
                <Link to={`/editor/${chakibooID}`}>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.button}
                  >
                    <SaveIcon
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                    Edit
                  </Button>
                </Link>
                <Mutation
                  mutation={DELETE_CHAKIBOO}
                  variables={{ id: chakibooID }}
                  // update={(cache, { data: { deleteChakiboo } }) => {
                  //   const { chakiboos } = cache.readQuery({
                  //     query: queries.GET_CHAKIBOOS
                  //   });
                  //   console.log(chakiboos);
                    // cache.writeQuery({
                    //   query: queries.GET_CHAKIBOOS,
                    //   data: { chakiboos: chakiboos.concat([createChakiboo]) }
                    // });
                  // }}
                >
                  {(deleteChakiboo, { data, error }) => (
                    <Button
                      variant="contained"
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
                    <React.Fragment>
                      <Link to={`/viewer/${chakibooID}`}>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.button}
                        >
                          View
                          <ViewIcon
                            className={classNames(
                              classes.leftIcon,
                              classes.iconSmall
                            )}
                          />
                        </Button>
                      </Link>
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
                    </React.Fragment>
                  )}
                </Mutation>
                {/* <IconButton>
                  <ThumbUp />
                </IconButton> */}
              </React.Fragment>
            );
          }
        } else {
          return (
            <Link to={`/viewer/${chakibooID}`}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
              >
                View
                <ViewIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
              </Button>
            </Link>
          );
        }
      }}
    </LoginContext.Consumer>
  );
}

export default withStyles(styles)(IconLabelButtons);
