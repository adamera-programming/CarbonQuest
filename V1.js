//SetUp UI
speed(100);
var allUI=[];

//HOME SCREEN
image("image1", "https://up.yimg.com/ib/th/id/OIP.n-L4jZaRZgxCkZKkgLkEKgHaFX?pid=Api&rs=1&c=1&qlt=95&w=149&h=108");
    setPosition("image1", 25, 45, 270, 270);
button("signUp", "Get Started");
    setPosition("signUp", 10, 320, 300, 45);
    setProperty("signUp", "border-radius", 20);
    setProperty("signUp", "background-color", "#46e034");
textLabel("logIn", "Already a Member? | Log In");
  setPosition("logIn", 35, 385);
  setProperty("logIn", "font-size", 14);
  setProperty("logIn", "text-align", "center");
appendItem(allUI, "image1");
appendItem(allUI, "logIn");
appendItem(allUI, "signUp");

//LOGIN SCREEN
textLabel("LogInHeader", "Log In");
    setPosition("LogInHeader", 80, 40);
    setProperty("LogInHeader", "font-size", 40);
    setProperty("LogInHeader", "text-align", "center");
    setProperty("LogInHeader", "text-color", "black");
textLabel("Username", "Username");
    setPosition("Username", 0, 110);
    setProperty("Username", "font-size", 12);
    setProperty("Username", "text-align", "left");
textLabel("Password", "Password");
    setPosition("Password", 0, 180);
    setProperty("Password", "font-size", 12);
    setProperty("Password", "text-align", "left");
textInput("UsernameInput", "");
    setPosition("UsernameInput", 10, 130, 300, 30);
textInput("PasswordInput", "");
    setPosition("PasswordInput", 10, 200, 300, 30);
button("Log", "Log In");
    setPosition("Log", 10, 270, 300, 45);
button("ForgotPassword", "Forgot Password?");
    setPosition("ForgotPassword", 10, 330, 300, 45);
button("CreateAccount", "Create Account");
    setPosition("CreateAccount", 10, 390, 300, 45);
appendItem(allUI, "LogInHeader");
appendItem(allUI, "Username");
appendItem(allUI, "Password");
appendItem(allUI, "UsernameInput");
appendItem(allUI, "PasswordInput");
appendItem(allUI, "Log");
appendItem(allUI, "ForgotPassword");
appendItem(allUI, "CreateAccount");

//SIGNUP SCREEN
textLabel("SignUpHeader", "Sign Up");
    setPosition("SignUpHeader", 65, 30);
    setProperty("SignUpHeader", "font-size", 40);
    setProperty("SignUpHeader", "text-align", "center");
    setProperty("SignUpHeader", "text-color", "black");
textLabel("Email", "Email");
    setPosition("Email", 0, 100);
    setProperty("Email", "font-size", 12);
    setProperty("Email", "text-align", "left");
textLabel("Username1", "Username");
    setPosition("Username1", 0, 170);
    setProperty("Username1", "font-size", 12);
    setProperty("Username1", "text-align", "left");
textLabel("Password1", "Password");
    setPosition("Password1", 0, 235);
    setProperty("Password1", "font-size", 12);
    setProperty("Password1", "text-align", "left");
textInput("EmailInput", "");
    setPosition("EmailInput", 10, 120, 300, 30);
textInput("UsernameInput1", "");
    setPosition("UsernameInput1", 10, 190, 300, 30);
textInput("PasswordInput1", "");
    setPosition("PasswordInput1", 10, 255, 300, 30);
button("Sign", "Sign Up");
    setPosition("Sign", 10, 320, 300, 45);
button("HaveAccount", "Have An Account?");
    setPosition("HaveAccount", 10, 380, 300, 45);
appendItem(allUI, "SignUpHeader");
appendItem(allUI, "Email");
appendItem(allUI, "Username1");
appendItem(allUI, "Password1");
appendItem(allUI, "EmailInput");
appendItem(allUI, "UsernameInput1");
appendItem(allUI, "PasswordInput1");
appendItem(allUI, "Sign");
appendItem(allUI, "HaveAccount");

//SetUp Screens

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

//SetUp Buttons

//Problem = OnEvent
onEvent("logIn", "click", function(){
    LogInPage();
});


//Problem = OnEvent
onEvent("signUp", "click", function(){
    SignUpPage();
});

//Problem = OnEvent
onEvent("CreateAccount", "click", function() {
  SignUpPage();
});

//Problem = OnEvent
onEvent("HaveAccount", "click", function() {
  LogInPage();
});

//Run App
HomePage();