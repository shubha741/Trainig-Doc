import React from "react";
import "./css/form.css"

export default class LoginSuccess extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container-fluid loginSucceFull text-center">
          <section>
            <ul className="nav nav-tabs navBar text-center">
              <li className="nav-item ">
                <a className="nav-link " href="#" aria-current="page">
                  Group Chat
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#" onClick={()=>this.props.updatePage("UserList")} aria-current="page">
                  Manage users
                </a>
       
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-4">
            <h5>Login Successful</h5>
            <div className="mt-4">
              <b>Welcome</b> {this.props.email}
            </div>
          </section>
        </div>
      </>
    );
  }
}
