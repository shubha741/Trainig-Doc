import React from "react";

export default class RegisterSuccessfull extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container registerSucceFull pt-5">
          <section>
            <h5>Registration Successful</h5>
            <div className="mt-4">Thank you for your Registration</div>
            <div className="mt-3">
              <button onClick={() => this.props.updatePage("Welcome")}>
        
                Click to return to home page
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
