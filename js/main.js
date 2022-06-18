const user = ["admin@gmail.com", "123"];

function emailForm(){
  let email = document.getElementById("email").value;
  let inputWrapper = document.querySelector(".email_input");
  let emailIcon = document.querySelector(".fa-envelope");
  let mess = document.querySelector(".email_mess");
  let sugg = document.querySelector(".sugg_email");

  if(email == user[0]){

    inputWrapper.classList.remove("error_email-input");
    emailIcon.classList.remove("error");
    mess.classList.remove("error-message");
    mess.innerHTML = "";
    sugg.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  }
  else{
    inputWrapper.classList.add("error_email-input");
    emailIcon.classList.add("error");
    mess.classList.add("error-message");
    mess.innerHTML = "invalid email address";
    sugg.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";

  }
}

function passwordForm(){
  let password = document.getElementById("password").value;
  let inputWrapper = document.querySelector(".password_input");
  let passwordIcon = document.querySelector(".fa-lock");
  let sugg = document.querySelector(".sugg_password");
   
  if(password == user[1]){
    inputWrapper.classList.remove("error_email-input");
    passwordIcon.classList.remove("error");
    sugg.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  }
  else{
    inputWrapper.classList.add("error_email-input");
    passwordIcon.classList.add("error");
    sugg.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
  }
}