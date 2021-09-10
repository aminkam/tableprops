import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Navbarr = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography variant="h5" noWrap>
            Shopping Table
          </Typography>
          <IconButton aria-label="search" color="inherit"></IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          ></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbarr;
