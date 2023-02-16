import React from "react";
import loading from "../loading.gif";

const Loading = () => {
  return (
    <div className="loading-card">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
