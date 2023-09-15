var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");
var container = document.querySelector(".container");
var btnlogin = document.querySelector(".btnlogin");
var overlay = document.querySelector(".overlay");
var active = document.querySelector(".active");

btnlogin.addEventListener("click", function () {
  container.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
});

loginButton.addEventListener("click", function () {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerButton.addEventListener("click", function () {
  registerButton.classList.add("active");
  loginButton.classList.remove("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// ẩn hiện overlay
overlay.addEventListener("click", function () {
  container.setAttribute("hidden", "hidden");
  overlay.setAttribute("hidden", "hidden");
});
// end

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function emailCheck(field) {
  var regexCheck =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  var emailAnnouncement =
    field.parentElement.parentElement.querySelector(".announcement");
  let isValid;
  if (field.value == "") {
    emailAnnouncement.innerText = "Vui lòng nhập thông tin";
    isValid = false;
  } else if (field.value.match(regexCheck)) {
    emailAnnouncement.innerText = "";
    isValid = true;
  } else {
    emailAnnouncement.innerText = "Vui lòng nhập đúng định dạng email";
    isValid = false;
  }
  if (isValid) {
    field.classList.remove("error");
  } else {
    field.classList.add("error");
  }
  return isValid;
}
// Kiểm tra xem nhập text ở pass chưa
function passCheck(field) {
  const mess =
    field.parentElement.parentElement.querySelector(".announcementPass");
  let isValid;
  if (field.value == "") {
    mess.innerText = "Vui lòng nhập thông tin";
    isValid = false;
  } else {
    mess.innerText = "";
    isValid = true;
  }
  if (isValid) {
    field.classList.remove("error");
  } else {
    field.classList.add("error");
  }
  return isValid;
}

function textCheck(field) {
  const mess =
    field.parentElement.parentElement.querySelector(".announcementText");
  let isValid;
  if (field.value == "") {
    mess.innerText = "Vui lòng nhập thông tin";
    isValid = false;
  } else {
    mess.innerText = "";
    isValid = true;
  }
  if (isValid) {
    field.classList.remove("error");
  } else {
    field.classList.add("error");
  }
  return isValid;
}

var lgValidateAll = function () {
  let isValid;
  isValid = emailCheck(loginEmail);
  isValid = emailCheck(registerEmail);
  isValid = passCheck(loginPassword);
  isValid = passCheck(newPassword);
  isValid = textCheck(newUsername);
  return isValid;
};
var btnDN = document.querySelector(".btn-dn");
var btnDK = document.querySelector(".btn-dk");
var lgSuccess = document.querySelector(".Login-notifications");
loginEmail.oninput = lgValidateAll;
loginPassword.oninput = lgValidateAll;
btnDN.onclick = function (e) {
  e.preventDefault();
  if (lgValidateAll()) {
    lgSuccess.innerText = "Account not existed.";
  }
};

// đăng kí
var lgSuccess = document.querySelector(".tb-DKTC");

btnDK.onclick = function (e) {
  e.preventDefault();
  if (lgValidateAll()) {
    lgSuccess.innerText = "Đăng kí thành công!";
  }
};
