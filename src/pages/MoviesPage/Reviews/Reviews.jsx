import React from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const params = useParams();
  console.log(params);

  return <div>Reviews</div>;
};

export default Reviews;
