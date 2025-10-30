function HomePage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("image1");
    showElement("logIn");
    showElement("signUp");
    setProperty("screen1", "background-color", "#a6c0f4");
}

function LogInPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("LogInHeader");
    showElement("Username");
    showElement("Password");
    showElement("UsernameInput");
    showElement("PasswordInput");
    showElement("Log");
    showElement("ForgotPassword");
    showElement("CreateAccount");
}

function SignUpPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("SignUpHeader");
    showElement("Email");
    showElement("Username1");
    showElement("Password1");
    showElement("EmailInput");
    showElement("UsernameInput1");
    showElement("PasswordInput1");
    showElement("Sign");
    showElement("HaveAccount");
}

onEvent("logIn", "click", function(){
    LogInPage();
});

onEvent("signUp", "click", function(){
    SignUpPage();
});

onEvent("CreateAccount", "click", function() {
  SignUpPage();
});

onEvent("HaveAccount", "click", function() {
  LogInPage();
});

HomePage();