let registerUser = new Array();
registerUser = JSON.parse(localStorage.getItem("registerUser"))
  ? JSON.parse(localStorage.getItem("registerUser"))
  : [];

let loginUser = new Array();

loginUser = JSON.parse(localStorage.getItem("loginUser"))
  ? JSON.parse(localStorage.getItem("loginUser"))
  : [];

const displayRegisterList = () => {
  let onlineuser = "";
  for (key in registerUser) {
    let rid = registerUser[key].id;
    onlineuser += `<tr><td> ${registerUser[key].fullName}</td> <td> ${registerUser[key].email}</td>   <td> <a  onclick=EditRegister(${rid})>Edit </a>`;

    if (registerUser[key].id != loginUser[0].id) {
      onlineuser += `<a data-bs-toggle="modal" data-bs-target="#deleteModal" onclick=DeleteRegister(${rid})>Delete</a>`;
    } else {
      onlineuser += ` <button disabled>Delete</button></td></tr>`;
    }
  }

  document.getElementById("displayRegisterNames").innerHTML = onlineuser;
};

const deleteRegister = () => {
  let rid = localStorage.getItem("deletingUser");

  let index;
  index = registerUser.findIndex((v) => {
    return v.id == rid;
  });
  registerUser.splice(index, 1);
  localStorage.setItem("registerUser", JSON.stringify(registerUser));
  displayRegisterList();
};

const DeleteRegister = (rid) => {
  localStorage.setItem("deletingUser", rid);
};

const EditRegister = (rid) => {
  localStorage.setItem("EditingUser", rid);
  window.location.href = "edit-users.html";
};

const dummy = () => {
  let rid = localStorage.getItem("EditingUser");
  let index = registerUser.findIndex((v) => {
    return v.id == rid;
  });

  document.getElementById("editUserName").value = registerUser[index].fullName;
  document.getElementById("editUserEmail").value = registerUser[index].email;
};

const saveEvent = () => {
  let rid = localStorage.getItem("EditingUser");

  let index = registerUser.findIndex((v) => {
    return v.id == rid;
  });

  let loginindex = loginUser.findIndex((v) => {
    return v.id == rid;
  });

  let fullName = document.getElementById("editUserName").value;
  let email = document.getElementById("editUserEmail").value;

  if (loginindex == index) {
    registerUser[index].fullName = fullName;
    registerUser[index].email = email;
    loginUser[loginindex].fullName = fullName;
    loginUser[loginindex].email = email;
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
    window.location.href = "user-list.html";
  } else {
    registerUser[index].fullName = fullName;
    registerUser[index].email = email;
    localStorage.setItem("registerUser", JSON.stringify(registerUser));
    window.location.href = "user-list.html";
  }
};
