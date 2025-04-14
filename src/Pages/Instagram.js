import React from "react";
import { useParams } from "react-router-dom";

const Instagram = () => {
  const { userName } = useParams();
  return (
    <div className="insta">
      <h3>InstagramUser: {userName}</h3>
    </div>
  );
};
export default Instagram;
