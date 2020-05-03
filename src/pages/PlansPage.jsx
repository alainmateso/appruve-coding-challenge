import React from "react";
import Plan from "../components/Plan";

function PlansPage({ plansData, username }) {
  return (
    <div className="card-container">
      <Plan username={username} plansData={plansData} />
    </div>
  );
}

export default PlansPage;
