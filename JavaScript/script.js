document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#login").onsubmit = function (e) {
      //get value from input
      let username = document.querySelector("#username").value;
      let password = document.querySelector("#password").value;
      let checkUsername = false;
      let checkPassword = false;
      let check = false;
      let errorMessageUsername = "";
      let errorMessagePassword = "";
      //alert("username : " + username + " password " + password);
  
      if (username.length >= 8) {
        checkUsername = true;
      } else {
        checkUsername = false;
        errorMessageUsername = "Please input username more than 8 characters!";
      }
  
      if (password.length >= 8) {
        checkPassword = true;
      } else {
        checkPassword = false;
        errorMessagePassword = "Please input password more than 8 characters!";
      }
  
      document.querySelector("#errorUsername").innerHTML = errorMessageUsername;
      document.querySelector("#errorPassword").innerHTML = errorMessagePassword;
  
      check = checkUsername & checkPassword;
      if(!check){e.preventDefault();}
      // alert(check);
      return check;
    };
  });