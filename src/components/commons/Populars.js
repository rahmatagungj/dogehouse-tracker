import React from "react";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";

const Populars = ({ title, people }) => {
  return (
    <Lined>
      <h3>{title}</h3>
      <p>
        <MdPerson />
        {people}
      </p>
    </Lined>
  );
};

const Lined = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: fit-content;
  border-radius: 1em;
  font-size: 0.8rem;
  margin: 10px 0;
  p {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
`;

export default Populars;
