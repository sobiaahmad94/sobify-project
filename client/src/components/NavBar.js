import React from "react";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

// styling
import styled from "styled-components";

// images 
import sobifyNavLogoImg from "../images/sobify-logo-black-background.jpeg";

// react icons
import { FaUserCircle, FaClock, FaPlayCircle } from "react-icons/fa";

const StyledIconButton = styled.div`
  font-size: 30px;
  color: rgba(255, 255, 255);
  cursor: pointer;

  &:hover {
    color: rgba(29, 185, 84);
  }
`;

function NavBar({ onSearch }) {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src={sobifyNavLogoImg} alt="Sobify nav logo" style={{ height: 40, marginRight: 10 }} />
          </Link>
          <SearchBar onSearch={onSearch} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/timemachine" style={{ textDecoration: "none", marginRight: 10 }}>
              <StyledIconButton>
                <FaClock />
              </StyledIconButton>
            </NavLink>
            
            <NavLink to="/account" style={{ textDecoration: "none", marginRight: 10 }}>
              <StyledIconButton>
                <FaUserCircle />
              </StyledIconButton>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
