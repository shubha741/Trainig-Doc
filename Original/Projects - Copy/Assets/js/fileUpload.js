const uploadPageHandler = () => {
  let registerUser = new Array();

  registerUser = JSON.parse(localStorage.getItem("registerUser"))
    ? JSON.parse(localStorage.getItem("registerUser"))
    : [];

  let loginUser = new Array();

  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];

  let filesUploaded = new Array();

  filesUploaded = JSON.parse(localStorage.getItem("filesUploaded"))
    ? JSON.parse(localStorage.getItem("filesUploaded"))
    : [];

  let onlineuser = " ";

  for (key in notLoginedUser) {
    onlineuser += `<tr><td> ${notLoginedUser[key].fullName}</td> <td> ${notLoginedUser[key].email}</td><td>                                <a href="edit-users.html">Edit </a>
    <a data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a></tr>`;
  }

  document.getElementById("displayRegisterNames").innerHTML = uploadList;
};
