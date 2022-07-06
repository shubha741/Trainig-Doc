const displayUserName = () => {
  let currentUser = new Array();
  currentUser = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : [];

  let loginUser = new Array();
  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];

  if (currentUser == "") {
    alert("U need  to  Login first");
    window.location.href = "login.html";
  } else {
    document.getElementById(
      "displayLoginEmail"
    ).innerHTML = `<b>Welcome!</b> ${loginUser[0].email}`;
  }
};

const logOut = () => {
  let loginUser = new Array();
  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];
    localStorage.removeItem("loginUser");
    localStorage.removeItem("currentUser");
    location.reload(true);

  window.location.href = "../logout.html";
};
