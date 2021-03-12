/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = ({ breakpoints }) => ({
  root: {
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 1000
    }
  }
});

const PageWrapper = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

PageWrapper.propTypes = {};
PageWrapper.defaultProps = {};

export default withStyles(styles)(PageWrapper);
