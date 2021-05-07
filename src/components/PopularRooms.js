import React from "react";
import Populars from "./commons/Populars";
import styled from "styled-components";
import { MdStar } from "react-icons/md";

const { useEffect, useState } = React;

const PopularRooms = () => {
  const [loading, setLoading] = useState(true);
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    fetch("https://api.dogegarden.net/v1/popularRooms")
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        setPopulars([resJson]);
        setLoading(false);
      });

    return () => {
      console.log("cleaning populars ...");
    };
  }, []);

  return (
    <Center>
      <Container>
        <h2>
          <MdStar />
          Popular Rooms
        </h2>
        <hr />
        {!loading && populars.length !== 0
          ? populars[0].rooms.map((r, idx) => (
              <Populars title={r.name} people={r.numPeopleInside} key={idx} />
            ))
          : "Loading data ..."}
      </Container>
    </Center>
  );
};

const Container = styled.div`
  background-color: #1f2937;
  color: white;
  padding: 10px;
  border-radius: 1em;
  width: 680px;
  margin: 0px auto;
  @media all and (max-width: 900px) {
    max-width: 78%;
  }
  h2 {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
`;

const Center = styled.div`
  display: flex;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export default PopularRooms;
