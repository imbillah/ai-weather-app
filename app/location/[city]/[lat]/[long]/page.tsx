import React from "react";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const ResultPage = ({ params: { city, lat, long } }: Props) => {
  return <div>Result of {city + lat + long}</div>;
};

export default ResultPage;
