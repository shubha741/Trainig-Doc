import React from "react";
import "./css/form.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }



  LoginClick = () => {
    let flag = this.props.checkingUser(this.state.email, this.state.password);
    if (flag) {
      this.props.updateUserEmail(this.state.email);
      this.props.updatePage("LoginSuccess");
     
    } else {
      alert("Wrong Email or Password");
    }
  };


  LoginPageHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="container loginPage formPage pt-5">
          <section>
            <div className="registerHeader">Login</div>
            <form>
              <div className="row  mt-5 text-right">
                <label className=" col col-lg-5 col-form-label ">Email</label>
                <div className=" col  col-sm-3 ">
                  <input
                    type="email"
                    className="form-control "
                    name="email"
                    value={this.state.email}
                    onChange={this.LoginPageHandler}
                  />
                </div>
              </div>
              <div className="row mt-4  text-right">
                <label className="col col-lg-5 col-form-label">Password</label>
                <div className="col  col-sm-3 ">
                  <input
                    type="password"
                    className="form-control "
                    name="password"
                    value={this.state.password}
                    onChange={this.LoginPageHandler}
                  />
                </div>
              </div>
              <div className="row mt-5 ">
                <div className="col  col-sm-12  text-center">
                  <button
                    onClick={() => this.LoginClick()}
                    className="btn text-center light_blueBtn"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </>
    );
  }
}
