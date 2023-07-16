import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createMuiTheme } from "@material-ui/core";
import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";
import SearchBar from "./SearchBar";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(0, 0, 0)", 
      },
    },
    typography: {
        button : {
            textTransform: "none",
            
        }
    },
})

function NavBar({onSearch}) {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
            <img src={sobifyNavLogoImg} alt="Sobify nav logo" style={{height: 40, marginRight: 10}}/>
        </Link>
        <SearchBar onSearch={onSearch}/>
        <div dtylr={{display: "flex", alignItems: "center"}}>
        <Button color="inherit" component={NavLink} exact to="/login" activeClassName="active">
          Login
        </Button>
        <Button color="inherit" component={NavLink} exact to="/account" activeClassName="active" style={{marginLeft: 10}}>
          Account
        </Button>
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;


