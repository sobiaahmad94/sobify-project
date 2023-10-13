import React, { useState } from "react";

// styling
import styled from "styled-components";

// react icons
import { PiMagnifyingGlassBold } from "react-icons/pi"; 

const StyledLoadingMessage = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const SearchBar = ({ onSearch }) => {
  // keywords state
  const [keywords, setKeywords] = useState("");
  // state for loading
  const [loading, setLoading] = useState(false);

  // handling input change like if something is typed into the field
  const handleInputChange = (event) => {
    setKeywords(event.target.value);
  };

// handling search result
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    // resetting the loading after the results have loaded
    await onSearch(keywords);
    setLoading(false);
    // input would be set to an empty string again
    setKeywords("");
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search"
        value={keywords}
        onChange={handleInputChange}
        style={{
          border: "1px solid rgba(20, 20, 20)",
          color: "rgba(29, 185, 84)",
          "&:focus": {
            color: "rgba(29, 185, 84)",
          },
          "&::placeholder": {
            color: "rgba(169, 169, 169)",
          },
          marginRight: "10px",
          padding: "10px",
          outline: "none",
        }}
        disabled={loading}
      />
      <button type="submit" aria-label="search" style={{ cursor: "pointer" }}>
        <PiMagnifyingGlassBold style={{ fontSize: "18", color: "rgba(255, 255, 255)" }} />
      </button>
      <span style={{ alignSelf: "center" }}>
        {loading && (
          <StyledLoadingMessage>
            Loading some tunes for you...
          </StyledLoadingMessage>
        )}
      </span>
    </form>
  );
};

export default SearchBar;
