import React from "react";
import styled from "styled-components";

const Card = ({
  totalBotOnline,
  totalOnline,
  totalRegistered,
  totalRooms,
  totalSchedulesRooms,
}) => {
  return (
    <Container>
      <Cards>
        <h2>{totalOnline.toLocaleString()}</h2>
        <p>total online</p>
      </Cards>
      <Cards>
        <h2>{totalRegistered.toLocaleString()}</h2>
        <p>total registered</p>
      </Cards>
      <Cards>
        <h2>{totalRooms.toLocaleString()}</h2>
        <p>total rooms</p>
      </Cards>
      <Cards>
        <h2>{totalSchedulesRooms.toLocaleString()}</h2>
        <p>total Schedules Rooms</p>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1f2937;
  display: flex;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;
  border-radius: 1em;
  @media all and (max-width: 900px) {
    max-width: 80%;
  }
`;

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
