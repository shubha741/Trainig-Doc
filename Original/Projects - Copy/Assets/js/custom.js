const registerHandler = () => {
  let registerUser = new Array();

  registerUser = JSON.parse(localStorage.getItem("registerUser"))
    ? JSON.parse(localStorage.getItem("registerUser"))
    : [];

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  const password = document.getElementById("password").value;
  const Repassword = document.getElementById("Repassword").value;
  let id = Math.floor(Math.random() * 1000);

  let fileID, fileDescription, fileName;
  fileID = Math.floor(Math.random() * 10000);

  if (fullName == "") {
    alert("please Enter you name");
    return false;
  } else if (atPos < 2) {
    alert("please Enter Proper Email ID");
    return false;
  } else if (dotPos - atPos < 3) {
    alert("please Enter Proper Email ID");
    return false;
  } else if (password == "") {
    alert("please Enter Password");
    return false;
  } else if (Repassword == "") {
    alert("please confirmed  Enter Password");
    return false;
  } else if (password != Repassword) {
    alert("Passwrod miss match");
    return false;
  } else if (
    registerUser.some((v) => {
      return v.email == email && v.fullName == fullName;
    })
  ) {
    alert("User Already Exists");
    return false;
  } else {
    registerUser.push({
      id,
      fullName,
      email,
      password,
      myUploads:[],
      sharedToMe:[],
    });

    localStorage.setItem("registerUser", JSON.stringify(registerUser));
  }
};

const loginUserHandler = () => {
  let registerUser = new Array();

  registerUser = JSON.parse(localStorage.getItem("registerUser"))
    ? JSON.parse(localStorage.getItem("registerUser"))
    : [];

  let loginUser = new Array();

  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "") {
    alert("please Enter you name");
    return false;
  } else if (password == "") {
    alert("please Enter Password");
    return false;
  } else if (
    registerUser.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("login pass");

    arrayData = registerUser.find((v) => {
      return v.email == email && v.password == password;
    });

    loginUser.push(arrayData);
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
    localStorage.setItem("currentUser", true);
    window.location.href = "login-success.html";
  } else {
    alert("login failed");
    return false;
  }
};
