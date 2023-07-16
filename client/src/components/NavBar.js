import React from "react";
import SearchBar from "./SearchBar";

// router
import {Link, NavLink} from "react-router-dom";
// styling - material ui
import {AppBar, Toolbar, Typography, Button, ThemeProvider, createMuiTheme, IconButton} from "@material-ui/core";
// mui icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// styling - styled components
import styled from "styled-components";
// images
import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";


// styled component variables
const StyledIconButton = styled(IconButton)`
    &:hover{
        color: rgba(30, 215, 96);
    }
`;


// this is the mui theme for the NavBar
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
});


function NavBar({onSearch}) {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
            <img src={sobifyNavLogoImg} alt="Sobify nav logo" style={{height: 40, marginRight: 10}}/>
        </Link>
        <SearchBar onSearch={onSearch}/>
        <div style={{display: "flex", alignItems: "center"}}>

        {/* register for a new account icon */}
        <StyledIconButton color="inherit" component={NavLink} exact to="/login" activeClassName="active"
>          
          <PersonAddIcon/>
        </StyledIconButton>
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




