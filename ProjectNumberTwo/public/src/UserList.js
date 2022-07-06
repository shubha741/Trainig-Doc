import React from "react";
import "./css/Main.css";

class UserList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section>
          <ul className="nav nav-tabs navBar text-center">
            <li className="nav-item ">
              <a className="nav-link " href="#" aria-current="page">
                Group Chat
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active"
                href="#"
                onClick={() => this.props.updatePage("UserList")}
                aria-current="page"
              >
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
        <section className="mt-4 userList  tableDesign">
          <h4 className="pl-5"> Users</h4>
          <div className="mt-4 text-center">
            <table className=" table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User Email ID</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
          
                  {this.props.users.map((ListUsers, index) => (
                    <tr key={index}>
                      <td>{ListUsers.fullname}</td>
                      <td>{ListUsers.email}</td>
                      <td>Edit | Delete</td>
                    </tr>
                  ))}
   
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}

export default UserList;
