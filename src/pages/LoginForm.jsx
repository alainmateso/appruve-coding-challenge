import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
  };
  updateEmail(email) {
    this.setState(() => ({
      email,
    }));
  }

  render() {
    return (
      <div className='login-page'>
        <span>Welcome back to Appruve!</span>
        <div className='login-form'>
          <input
            type="text"
            placeholder="Username..."
            value={this.state.username}
            onChange={(e) => this.updateEmail(e.target.value)}
          />
        </div>
        <div className='login-button'>
          <Link to="/plans">
            <button
              disabled={!this.state.email}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
