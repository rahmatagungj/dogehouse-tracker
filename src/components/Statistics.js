import React from "react";
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
        setStatistic([resJson]);
        setLoading(false);
        console.log(resJson);
      });

    return () => {
      console.log("cleaning statistics ...");
    };
  }, []);

  return (
    <>
      {!loading && statistic.length !== 0
        ? statistic.map((r, idx) => (
            <Card
              key={idx}
              totalBotOnline={r.totalBotsOnline}
              totalOnline={r.totalOnline}
              totalRegistered={r.totalRegistered}
              totalRooms={r.totalRooms}
              totalSchedulesRooms={r.totalScheduledRooms}
            />
          ))
        : null}
    </>
  );
};

export default Statistics;
