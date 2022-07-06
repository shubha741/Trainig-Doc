import React from "react";
import RegisterSuccessfull from "./RegisterSuccessfull";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
      repassword: "",
    };
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerPageHandler = () => {
    this.props.updateUsers(this.state);
    this.props.updatePage("RegisterSuccessfull");

  };



  render() {
    return (
      <>
        <div className="container registerPage  loginPage formPage pt-5 ">
          <section>
            <div className="registerHeader">Register</div>

            <form>
              <div className="row mb-3 mt-5">
                <label className="col col-sm-5 col-form-label  ">
                  Full Name
                </label>
                <div className="col col-sm-3 ">
                  <input
                    type="text"
                    className="form-control "
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handlerChange}
                  />
                </div>
              </div>
              <div className="row  mt-4 ">
                <label className=" col col-sm-5 col-form-label ">Email</label>
                <div className=" col  col-sm-3 ">
                  <input
                    type="text"
                    className="form-control "
                    name="email"
                    value={this.state.email}
                    onChange={this.handlerChange}
                  />
                </div>
              </div>
              <div className="row mt-4  ">
                <label className="col-sm-5 col-form-label ">Password</label>
                <div className="col  col-sm-3 ">
                  <input
                    type="password"
                    className="form-control "
                    name="password"
                    value={this.state.password}
                    onChange={this.handlerChange}
                  />
                </div>
              </div>
              <div className="row mt-4 ">
                <label className="col-sm-5 col-form-label ">
                  Confirm Password
                </label>
                <div className="col  col-sm-3 ">
                  <input
                    type="password"
                    className="form-control "
                    name="repassword"
                    value={this.state.repassword}
                    onChange={this.handlerChange}
                  />
                </div>
              </div>

              <div className="row mt-5 ">
                <div className="col  col-sm-12 ">
                  <button
                    type="submit"
                    className="btn text-left light_blueBtn "
                    onClick={() => this.registerPageHandler()}
                  >
                    Register
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
