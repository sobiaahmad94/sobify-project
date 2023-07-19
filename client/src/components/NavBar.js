import React from "react";
import SearchBar from "./SearchBar";

// router
import {Link, NavLink} from "react-router-dom";
// styling - material ui
import {AppBar, Toolbar, Typography, Button, ThemeProvider, createMuiTheme, IconButton} from "@material-ui/core";
// mui icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccessTimeIcon from "@material-ui/icons/AccessTime"; 
// styling - styled components
import styled from "styled-components";
// images
import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";


// styled component variables
const StyledIconButton = styled(IconButton)`
* {
    font-size: 30px;
    color: rgba(255, 255, 255);
}
    &:hover{
        color: rgba(29, 185, 84); 
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
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
      
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={sobifyNavLogoImg} alt="Sobify nav logo" style={{ height: 40, marginRight: 10 }} />
        </Link>
        <SearchBar onSearch={onSearch}/>
        <div style={{ display: "flex", alignItems: "center" }}>
        
          <NavLink to="/timemachine" style={{ textDecoration: "none", marginRight: 10 }}>
            <StyledIconButton color="inherit"><AccessTimeIcon/>
            </StyledIconButton>
          </NavLink>

          {/* <NavLink to="/all-playlists" style={{ textDecoration: "none", marginRight: 10, fontSize: 25 }}>
          <StyledIconButton color="inherit" component={NavLink} exact to="/all-playlists" activeClassName="active">
            Playlists
          </StyledIconButton>
          </NavLink> */}
          <StyledIconButton color="inherit" component={NavLink} exact to="/account" activeClassName="active">
            <AccountCircleIcon />
          </StyledIconButton>
        </div>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

}

export default NavBar;



// import React from "react";
// import SearchBar from "./SearchBar";
// import { Link, NavLink } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   ThemeProvider,
//   createMuiTheme,
//   IconButton,
// } from "@material-ui/core";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
// import styled from "styled-components";
// import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";

// const StyledIconButton = styled(IconButton)`
//   * {
//     font-size: 20px; /* Updated font size */
//     color: rgba(255, 255,255); 
//   }
//   &:hover {
//     color: rgba(29, 185, 84);
//   }
// `;

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "rgba(0, 0, 0)",
//     },
//     text: {
//       primary: "rgba(255,255, 255)", // Set the text color to white
//     },
//   },
//   typography: {
//     button: {
//       textTransform: "none",
//       fontSize: 16, // Updated font size for the buttons
//     },
//     h6: {
//       fontSize: 20, // Updated font size for the heading (Sobify)
//     },
//   },
// });

// function NavBar({ onSearch }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="static">
//         <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <img
//               src={sobifyNavLogoImg}
//               alt="Sobify nav logo"
//               style={{ height: 40, marginRight: 10 }}
//             />
//           </Link>
//           <SearchBar onSearch={onSearch} />
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <NavLink
//               to="/timemachine"
//               style={{ textDecoration: "none", marginRight: 10 }}
//             >
//               <StyledIconButton color="inherit">
//                 Time Machine Randomizer
//               </StyledIconButton>
//             </NavLink>
//             <NavLink
//               to="/timemachine"
//               style={{ textDecoration: "none", marginRight: 10 }}
//             >
//               <StyledIconButton
//                 color="inherit"
//                 component={NavLink}
//                 exact
//                 to="/all-playlists"
//                 activeClassName="active"
//               >
//                 Playlists
//               </StyledIconButton>
//             </NavLink>
//             <StyledIconButton
//               color="inherit"
//               component={NavLink}
//               exact
//               to="/account"
//               activeClassName="active"
//             >
//               <AccountCircleIcon />
//             </StyledIconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default NavBar;

