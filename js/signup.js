document.querySelector(".form1").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailSignUp = document.getElementById("emailSignUp").value;
  const passwordSignUp = document.getElementById("passwordSignUp").value;
  const emailSignIn = localStorage.getItem("email");
  const passwordSignIn = localStorage.getItem("password");
  if (emailSignUp === emailSignIn && passwordSignUp === passwordSignIn) {
    window.location = "card.html";
  } else {
    window.location = "index.html";
  }
});