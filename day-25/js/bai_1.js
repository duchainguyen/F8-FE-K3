var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");
var container = document.querySelector(".container");
var btnlogin = document.querySelector(".btnlogin");
var overlay = document.querySelector(".overlay");
var active = document.querySelector(".active");
// var notifications = document.querySelector(".login-notifications");

btnlogin.addEventListener("click", function () {
  container.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
});

loginButton.addEventListener("click", function () {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  newPassword.value = "";
  newUsername.value = "";
  registerEmail.value = "";
  // notifications.innerText = "";
});
registerButton.addEventListener("click", function () {
  registerButton.classList.add("active");
  loginButton.classList.remove("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  loginEmail.value = "";
  loginPassword.value = "";
  // notifications.innerText = "";
});

// ẩn hiện overlay
overlay.addEventListener("click", function () {
  container.setAttribute("hidden", "hidden");
  overlay.setAttribute("hidden", "hidden");
});
// end

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

// đăngki

// end
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

function passCheckDK(field) {
  const newPasswordValue = field.value;
  // if (newPasswordValue.length < 6) {
  //   const passAnnouncement = document.querySelector(".announcementPasss");
  //   passAnnouncement.innerText = "Mật khẩu phải chứa ít nhất 6 ký tự";
  //   newPassword.classList.add("error");
  //   isValid = false;
  // } else {
  //   const passAnnouncement = document.querySelector(".announcementPass");
  //   passAnnouncement.innerText = ""; // Xóa thông báo lỗi nếu hợp lệ
  //   newPassword.classList.remove("error");
  const mess =
    field.parentElement.parentElement.querySelector(".announcementPasss");
  let isValid;
  if (field.value == "") {
    mess.innerText = "Vui lòng nhập thông tin";
    isValid = false;
  }
  // bắt điều kiện cho đki mật khẩu dài từ 6-20 kí tự
  else if (newPasswordValue.length < 6 || newPasswordValue.length > 20) {
    mess.innerText = "Mật khẩu tối thiểu 6 - 20 ký tự";
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
  const text =
    field.parentElement.parentElement.querySelector(".announcementText");
  let isValid;
  if (field.value == "") {
    text.innerText = "Vui lòng nhập thông tin";
    isValid = false;
  } else {
    text.innerText = "";
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
  // isValid = emailCheck(registerEmail);
  isValid = passCheck(loginPassword);
  return isValid;
};

var registerEmail = document.getElementById("registerEmail");
var newUsername = document.getElementById("newUsername");
var newPassword = document.getElementById("newPassword");
var dkValidateAll = function () {
  let isValid;
  isValid = textCheck(newUsername);
  // isValid = emailCheck(loginEmail);
  isValid = emailCheck(registerEmail);
  // isValid = passCheck(loginPassword);
  isValid = passCheckDK(newPassword);

  return isValid;
};

// đăng nhập
var btnDN = document.querySelector(".btn-dn");
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
var btnDK = document.querySelector(".btn-dk");
var dkSuccess = document.querySelector(".tb-DKTC");
newUsername.oninput = dkValidateAll;
registerEmail.oninput = dkValidateAll;
newPassword.oninput = dkValidateAll;
btnDK.onclick = function (e) {
  e.preventDefault();
  if (dkValidateAll()) {
    dkSuccess.innerText = "Đăng kí thành công!";
  }
};
