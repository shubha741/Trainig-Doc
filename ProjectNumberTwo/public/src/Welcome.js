import React from "react";
import "./css/welcome.css";
import "./css/form.css";

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h5 className="mt-5 mb-4">Welcome to Users Module</h5>
        <h6 className="mt-5  mb-5">Existing Users</h6>
        <button
          className="loginBtn"
          onClick={() => this.props.updatePage("Login")}
        >
          Login
        </button>
        <h6 className="mt-5  mb-5">New Users</h6>
        <button
          className="loginBtn"
          onClick={() => this.props.updatePage("Register")}
        >
          Register
        </button>
      </div>
    );
  }
}
