import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1 }}>
          Sobify
        </Typography>
        <Button color="rgba(4, 22, 52)" component={NavLink} exact to="/about" activeClassName="active">
          Login
        </Button>
        <Button color="inherit" component={NavLink} exact to="/contact" activeClassName="active">
          Account
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


