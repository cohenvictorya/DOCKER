var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
var passwordInput = document.getElementById("signupPassword");

showPasswordCheckbox.addEventListener("mouseover", function() {
    passwordInput.type = "text";
});

showPasswordCheckbox.addEventListener("mouseout", function() {
    passwordInput.type = "password";
});