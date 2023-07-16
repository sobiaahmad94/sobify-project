import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createMuiTheme, IconButton} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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

        {/* register for a new account icon */}
        <IconButton color="inherit" component={NavLink} exact to="/login" activeClassName="active">
          <PersonAddIcon/>
        </IconButton>
        {/* this is the person icon for account */}
        <IconButton color="inherit" component={NavLink} exact to="/account" activeClassName="active">
              <AccountCircleIcon />
            </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;


