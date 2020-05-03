import React, { Component } from "react";
import LoginForm from "./pages/LoginForm";
import PlansPage from "./pages/PlansPage";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    // This is the mocked response data from the API
    plans: [
      {
        name: "Gold",
        price: "20 USD",
        moreInfo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Silver",
        price: "15 USD",
        moreInfo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Silver",
        price: "10 USD",
        moreInfo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    username: "User",
  };

  render() {
    const { username, plans } = this.state;
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <LoginForm
          />}
        />
        <Route
          path="/plans"
          render={() => <PlansPage username={username} plansData={plans} />}
        />
      </div>
    );
  }
}

export default App;
