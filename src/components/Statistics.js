import React from "react";
import styled from "styled-components";
import Card from "./commons/Card";

const { useEffect, useState } = React;

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [statistic, setStatistic] = useState([]);
  useEffect(() => {
    fetch("https://api.dogegarden.net/v1/statistics")
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        console.log(resJson);
        setStatistic([resJson]);
        console.log(statistic[0]);
        setLoading(false);
      });

    return () => {
      console.log("cleaning statistics ...");
    };
  }, []);

  return (
    <Flex>
      {!loading
        ? statistic.map((r, idx) => (
            <Card key={idx} value={r.totalOnline} label={r.totalOnline} />
          ))
        : null}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Statistics;
