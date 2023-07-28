import React from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const params = useParams();
  console.log(params);
  return <div>Cast</div>;
};

export default Cast;
