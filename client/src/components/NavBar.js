import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
            <img src={sobifyNavLogoImg} alt="Sobify nav logo" style={{height: 40, marginRight: 10}}/>
          
        </Link>
        <Button color="inherit" component={NavLink} exact to="/login" activeClassName="active">
          Login
        </Button>
        <Button color="inherit" component={NavLink} exact to="/account" activeClassName="active">
          Account
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


