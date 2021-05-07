import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <h1>DogeHouse Tracker</h1>
    </Headers>
  );
};

const Headers = styled.header`
  color: white;
  text-align: center;
  margin: 50px;
`;

export default Header;
