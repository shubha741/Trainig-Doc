let loginUser = new Array();

loginUser = JSON.parse(localStorage.getItem("loginUser"))
  ? JSON.parse(localStorage.getItem("loginUser"))
  : [];

//register array
let registerUser = new Array();

registerUser = JSON.parse(localStorage.getItem("registerUser"))
  ? JSON.parse(localStorage.getItem("registerUser"))
  : [];

//File  Array

let myUploads = new Array();

myUploads = JSON.parse(localStorage.getItem("myUploads"))
  ? JSON.parse(localStorage.getItem("myUploads"))
  : [];

//file id

let index = registerUser.findIndex((v) => {
  return v.id == rid;
});

let loginindex = loginUser.findIndex((v) => {
  return v.id == rid;
});

let fileID = Math.floor(Math.random() * 10000);

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const reader = new FileReader();
  let fileDescription = document.getElementById("fileDescription").value;
  let fileName = document.getElementById("inputFileUpload").files[0].name;
  console.log(name);

  let fileID;
  fileID = Math.floor(Math.random() * 10000);
  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      if (fileDescription == "" || fileName == "") {
        alert("please enter  File and File name");
      } else {
        let uploadedUserId;
        uploadedUserId = loginUser[0].id;

        myUploads.push({ fileID, fileDescription, fileName, uploadedUserId });

        window.localStorage.setItem("myUploads", JSON.stringify(myUploads));
        uploadPageHandler();
        document.getElementById("fileDescription").value = "";
        document.getElementById("inputFileUpload").files[0].name = "";
      }
    } else {
      alert("files Failed");
    }
  });

  reader.readAsDataURL(document.getElementById("inputFileUpload").files[0]);
});

function uploadPageHandler() {
  let uploadList = "";
  for (key in myUploads) {
    uploadList += `<tr><td>${myUploads[key].fileDescription}</td>
      <td> ${myUploads[key].fileName}  </td> 
      <td>  <a href="#"> Edit </a>  <a href="#"> Delete </a> <a href="#"> Share </a></td><tr>`;
  }

  document.getElementById("uploadList").innerHTML = uploadList;
}
const uploadHandler = () => {
  let fileDescription;
  let fileName;
  fileDescription = document.getElementById("fileDescription").value;
  // fileName = document.getElementById("fileName").value;

  if (fileDescription == "") {
    alert(`Hey Enter File lable and and Upload`);
  }
};

const refreshChatHandler = () => {
  localStorage.removeItem("chatHistory");
  location.reload(true);
};
