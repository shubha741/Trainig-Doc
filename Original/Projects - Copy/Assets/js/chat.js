function chatPageHandler() {
  let loginUser = new Array();

  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];
  let chatHistory = new Array();
  chatHistory = JSON.parse(localStorage.getItem("chatHistory"))
    ? JSON.parse(localStorage.getItem("chatHistory"))
    : [];

  document.getElementById("displayName").innerHTML = loginUser[0].fullName;
  console.log(loginUser[0].fullName);
  let newTableChat = "";
  for (key in chatHistory) {
    newTableChat += `<tr><td>[ ${chatHistory[key].dateTime}]</td>
    <td> ${chatHistory[key].senderName} : </td> 
    <td> ${chatHistory[key].message}</td><tr>`;
  }

  document.getElementById("tableChat").innerHTML = newTableChat;
}
const chatTypingHandler = () => {
  let loginUser = new Array();

  loginUser = JSON.parse(localStorage.getItem("loginUser"))
    ? JSON.parse(localStorage.getItem("loginUser"))
    : [];
  let chatHistory = new Array();
  chatHistory = JSON.parse(localStorage.getItem("chatHistory"))
    ? JSON.parse(localStorage.getItem("chatHistory"))
    : [];

  let id = Math.floor(Math.random() * 1000);

  let dateTime = new Date();
  let presentDay = dateTime.getDate();
  let presentMonth =
    dateTime.getMonth() < 10
      ? "0" + (dateTime.getMonth() + 1)
      : dateTime.getMonth();

  let presentYear = dateTime.getFullYear();
  let presentHour = dateTime.getHours();

  let presentMinutes =
    dateTime.getMinutes() < 10
      ? "0" + dateTime.getMinutes()
      : dateTime.getMinutes();
  let presentSeconds =
    dateTime.getSeconds() < 10
      ? "0" + dateTime.getSeconds()
      : dateTime.getSeconds();

  dateTime = `${presentYear}-${presentMonth}-${presentDay}  ${presentHour}:${presentMinutes}:${presentSeconds} `;
  let message = document.getElementById("typingBox").value;
  let senderName = loginUser[0].fullName;

  if (message == "") {
    alert(`Hey! ${senderName} please Enter  your Message `);
  } else {
   
    chatHistory.push({ id, dateTime, message, senderName });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    typingBox.value = "";
    chatPageHandler();
  }
};

const refreshChatHandler = () => {
  localStorage.removeItem("chatHistory");
  location.reload(true);
};
