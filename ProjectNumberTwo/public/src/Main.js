import React from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import RegisterSuccessfull from "./RegisterSuccessfull";
import LoginSuccess from "./LoginSuccess";
import UserList from "./UserList";
export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      screen: "Welcome",
      email: "",
    };
  }
  updateUsers = (user) => {
    this.setState((preveUser) => ({
      users: [...preveUser.users, user],
    }));
  };

  updateUserEmail = (email) => {
    this.setState({ email });
  };

  checkingUser = (email, password) => {
    let flag = false;
    this.state.users.forEach((user) => {
      if (user.email === email && user.password === password) 
      flag = true;
    });

    return flag;
  };
  updatePage = (pageName) => {
    this.setState({
      screen: pageName,
    });
  };

  render() {
    return (
      <div>
        {this.state.screen === "Welcome" && (
          <div>
            <Welcome updatePage={this.updatePage}></Welcome>
          </div>
        )}
        {this.state.screen === "Register" && (
          <div>
            <Register
              updateUsers={this.updateUsers}
              updatePage={this.updatePage}
            ></Register>
          </div>
        )}

        {this.state.screen === "RegisterSuccessfull" && (
          <div>
            <RegisterSuccessfull
              updatePage={this.updatePage}
            ></RegisterSuccessfull>
          </div>
        )}
        {this.state.screen === "Login" && (
          <div>
            <Login
              checkingUser={this.checkingUser}
              updateUserEmail={this.updateUserEmail}
              updatePage={this.updatePage}
            ></Login>
          </div>
        )}

        {this.state.screen === "LoginSuccess" && (
          <div>
            <LoginSuccess
              email={this.state.email}
              updatePage={this.updatePage}
            ></LoginSuccess>
          </div>
        )}

        {this.state.screen === "UserList" && (
          <div>
            <UserList
              updatePage={this.updatePage}
              users={this.state.users}
            ></UserList>
          </div>
        )}
      </div>
    );
  }
}
