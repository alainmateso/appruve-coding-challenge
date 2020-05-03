import React from "react";
import { Link } from "react-router-dom";

function Plan({ username, plansData }) {
  return (
    <div>
      <span className="welcome-message">welcome {username}</span>
      <div className="card-content">
        {plansData.map((plan) => (
          <div>
            <p className="plan-name">Plan name: {plan.name} </p>
            <p className="plan-price">Plan price: {plan.price}</p>
            <p className="plan-details">Plan details: {plan.moreInfo}</p>
            <hr />
          </div>
        ))}
      </div>
      <Link to="/">back</Link>
    </div>
  );
}

export default Plan;
