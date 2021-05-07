import React from "react";
import styled from "styled-components";

const Card = ({ value, label }) => {
  return (
    <Cards>
      <h2>{value}</h2>
      <p>{label}</p>
    </Cards>
  );
};

const Cards = styled.div`
  padding: 25px;
  background-color: white;
  margin: 15px;
  text-align: center;
  border-radius: 0.5em;
  h2 {
    font-size: 2.1rem;
  }
  p {
    font-size: 0.9rem;
    text-transform: capitalize;
  }
`;

export default Card;
