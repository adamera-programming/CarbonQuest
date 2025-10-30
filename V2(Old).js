//NOTES: Everything is completed on the transportation screen. The only thing remaining is we need to add the formula.

//SetUp UI (allUI.js)
speed(100);
var allUI=[];
function HideUI(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
}
//Loading
image("image2", "https://www.bing.com/th/id/OIP.P_t9xeUJDkU4Lipso7vfrAHaHa?w=230&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2");
    setPosition("image2", 25, 45, 270, 270);
    appendItem(allUI, "image2");
textLabel("LoadingHeader", "CarbonQuest");
  setPosition("LoadingHeader", 10, 320, 300, 45);
  setProperty("LoadingHeader", "font-size", 38);
  appendItem(allUI, "LoadingHeader");


//HOME SCREEN (Home.js)
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

//LOGIN SCREEN (LogIn.js)
textLabel("LogInBackground", "");
    hideElement("LogInBackground");
    setPosition("LogInBackground", 15, 30, 290, 405);
    setProperty("LogInBackground", "background-color", "#F2F2F2");
    setProperty("LogInBackground", "border-radius", "10");
    appendItem(allUI, "LogInBackground");
textLabel("LogInHeader", "Log In");
    setPosition("LogInHeader", 80, 45);
    setProperty("LogInHeader", "font-size", 40);
    setProperty("LogInHeader", "text-align", "center");
    setProperty("LogInHeader", "text-color", "black");
textLabel("Username", "Email");
    setPosition("Username", 15, 115);
    setProperty("Username", "font-size", 13);
    setProperty("Username", "text-align", "left");
textLabel("Password", "Password");
    setPosition("Password", 15, 190);
    setProperty("Password", "font-size", 12);
    setProperty("Password", "text-align", "left");
textInput("UsernameInput", "");
    setPosition("UsernameInput", 30, 140, 260, 30);
textInput("PasswordInput", "");
    setPosition("PasswordInput", 30, 210, 260, 30);
textLabel("PasswordIncorrect", "The Email and Password Do Not Match!");
    setPosition("PasswordIncorrect", 30, 245, 260, 23);
    setProperty("PasswordIncorrect", "background-color", "red");
    setProperty("PasswordIncorrect", "text-color", "white");
    setProperty("PasswordIncorrect", "font-size", "10");
    setProperty("PasswordIncorrect", "text-align", "center");
    hideElement("PasswordIncorrect");
button("Log", "Log In");
    setPosition("Log", 30, 275, 260, 37);
    setProperty("Log", "background-color", "blue");
    setProperty("Log", "font-size", 14);
textLabel("ForgotPassword", "Forgot Password?");
    setPosition("ForgotPassword", 85, 325, 260, 30);
button("CreateAccount", "Create Account");
    setPosition("CreateAccount", 30, 370, 260, 37);
    setProperty("CreateAccount", "text-color", "black");
    setProperty("CreateAccount", "background-color", "white");
    setProperty("CreateAccount", "border-color", "blue");
    setProperty("CreateAccount", "font-size", 14);
appendItem(allUI, "LogInHeader");
appendItem(allUI, "Username");
appendItem(allUI, "Password");
appendItem(allUI, "UsernameInput");
appendItem(allUI, "PasswordInput");
appendItem(allUI, "Log");
appendItem(allUI, "ForgotPassword");
appendItem(allUI, "CreateAccount");
appendItem(allUI,"PasswordIncorrect");

//SIGNUP SCREEN (SignUp.js)
textLabel("SignUpBackground", "");
    hideElement("SignUpBackground");
    setPosition("SignUpBackground", 15, 30, 290, 405);
    setProperty("SignUpBackground", "background-color", "#F2F2F2");
    setProperty("SignUpBackground", "border-radius", "10");
    appendItem(allUI, "SignUpBackground");
textLabel("SignUpHeader", "Sign Up");
    setPosition("SignUpHeader", 65, 45);
    setProperty("SignUpHeader", "font-size", 40);
    setProperty("SignUpHeader", "text-align", "center");
    setProperty("SignUpHeader", "text-color", "black");
textLabel("Email", "Email");
    setPosition("Email", 15, 115);
    setProperty("Email", "font-size", 13);
    setProperty("Email", "text-align", "left");
textLabel("Username1", "Username");
    setPosition("Username1", 15, 190);
    setProperty("Username1", "font-size", 12);
    setProperty("Username1", "text-align", "left");
textLabel("Password1", "Password");
    setPosition("Password1", 15, 260);
    setProperty("Password1", "font-size", 12);
    setProperty("Password1", "text-align", "left");
textInput("EmailInput", "");
    setPosition("EmailInput", 30, 140, 260, 30);
textInput("UsernameInput1", "");
    setPosition("UsernameInput1", 30, 210, 260, 30);
textInput("PasswordInput1", "");
    setPosition("PasswordInput1", 30, 280, 260, 30);
textLabel("AccountExists", "An Account With This Email Already Exists!");
    setPosition("AccountExists", 10, 288, 300, 25);
    setProperty("AccountExists", "background-color", "red");
    setProperty("AccountExists", "text-color", "white");
    setProperty("AccountExists", "font-size", "11");
    setProperty("AccountExists", "text-align", "center");
    hideElement("AccountExists");
button("Sign", "Sign Up");
    setPosition("Sign", 30, 340, 260, 37);
    setProperty("Sign", "font-size", 14);
textLabel("HaveAccount", "Have An Account?");
    setPosition("HaveAccount", 80, 395, 300, 45);
appendItem(allUI, "SignUpHeader");
appendItem(allUI, "Email");
appendItem(allUI, "Username1");
appendItem(allUI, "Password1");
appendItem(allUI, "EmailInput");
appendItem(allUI, "UsernameInput1");
appendItem(allUI, "PasswordInput1");
appendItem(allUI, "Sign");
appendItem(allUI, "HaveAccount");
appendItem(allUI,"AccountExists");

//SetUp Screens (LoginButtons.js)
function HomePage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("image1");
    showElement("logIn");
    showElement("signUp");
    setProperty("screen1", "background-color", "#00bfff");
}
function LoadingScreen(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }  
    showElement("image2");
    showElement("LoadingHeader");
    pause(1500);
    hideElement("image2");
    hideElement("LoadingHeader");
}
function LogInPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("LogInHeader");
    showElement("LogInBackground");
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
    showElement("SignUpBackground");
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

LoadingScreen();
pause(20);
HomePage();

//Pause Function
function pause(howLong){
  var timer = getTime();
  while (((getTime() - timer) < howLong)){}
}

//Account Creation (UserId.js)
onEvent("Sign", "click", function() {
  var emailExists="no";
  readRecords("userIds", {}, function(records) {
    if (records.length>0) {
      for (var i =0; i < records.length; i++) {
        if(getText("EmailInput")==records[i].email){
          emailExists="yes";
        }
      }
    }
    if (emailExists=="no"){
      var userId={};
      userId.email = getText("EmailInput");
      userId.username = getText("UsernameInput1");
      userId.password = getText("PasswordInput1");
      createRecord("userIds", userId, function() {
      MainPage();
      });
    } else{
        showElement("AccountExists");
        pause(3000);
        hideElement("AccountExists");
    }
  });
});

//Account Login (accountLogin.js)
onEvent("Log", "click", function() {
  var correct="no";
  readRecords("userIds", {}, function(records) {
    if (records.length>0) {
      for (var i = 0; i < records.length; i++) {
        if(getText("UsernameInput")==records[i].email){
          if(getText("PasswordInput")==records[i].password){
            correct="yes";
          }
        } else {
          correct="no";
        }
      }
    }
    if (correct=="yes"){
      MainPage();
      setProperty("Main", "text-color", "white");
      setProperty("Main", "background-color", "black");
      setProperty("Quests", "text-color", "black");
      setProperty("Quests", "background-color", "white");
      setProperty("Settings", "text-color", "black");
      setProperty("Settings", "background-color", "white");
    }
    if (correct=="no"){
      showElement("PasswordIncorrect");
      pause(3000);
      hideElement("PasswordIncorrect");
    }
  });
});


//HomeUI
image("PlusSign", "https://th.bing.com/th/id/OIP.R6NuoBnrJUvwt8CjVoubKAAAAA?w=182&h=183&c=7&r=0&o=5&pid=1.7");
  hideElement("PlusSign");
  setPosition("PlusSign", 100, 105, 125, 125);
  setProperty("PlusSign", "border-radius", 100);
  appendItem(allUI, "PlusSign");
textLabel("OurAI", "AI");
  hideElement("OurAI");
  setPosition("OurAI", 0, 400, 64, 50);
  setProperty("OurAI", "font-size", 11);
  setProperty("OurAI", "text-color", "black");
  setProperty("OurAI", "background-color", "white");
  setProperty("OurAI", "text-align", "center");
  appendItem(allUI, "OurAI");
textLabel("Quests", "Quests");
  hideElement("Quests");
  setPosition("Quests", 64, 400, 64, 50);
  setProperty("Quests", "font-size", 11);
  setProperty("Quests", "text-color", "black");
  setProperty("Quests", "background-color", "white");
  setProperty("Quests", "text-align", "center");
  appendItem(allUI, "Quests");
textLabel("Main", "Main");
  hideElement("Main");
  setPosition("Main", 128, 400, 64, 50);
  setProperty("Main", "font-size", 11);
  setProperty("Main", "text-color", "white");
  setProperty("Main", "background-color", "black");
  setProperty("Main", "text-align", "center");
  appendItem(allUI, "Main");
textLabel("Quiz", "Quiz");
  hideElement("Quiz");
  setPosition("Quiz", 192, 400, 64, 50);
  setProperty("Quiz", "font-size", 11);
  setProperty("Quiz", "text-color", "black");
  setProperty("Quiz", "background-color", "white");
  setProperty("Quiz", "text-align", "center");
  appendItem(allUI, "Quiz");
textLabel("Settings", "Settings");
  hideElement("Settings");
  setPosition("Settings", 256, 400, 64, 50);
  setProperty("Settings", "font-size", 10);
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
  setProperty("Settings", "text-align", "center");
  appendItem(allUI, "Settings");
textLabel("Streak", "CarbonQuest");
  hideElement("Streak");
  setPosition("Streak", 0, 10, 320, 45);
  setProperty("Streak", "font-size", 32);
  setProperty("Streak", "text-color", "white");
  setProperty("Streak", "text-align", "center");
  appendItem(allUI, "Streak");
textLabel("Greeting", "Hello " + "Abhinav" + "!");
  hideElement("Greeting");
  setPosition("Greeting", 65, 60, 190, 50);
  setProperty("Greeting", "font-size", 20);
  setProperty("Greeting", "font-family", "Lobster");
  setProperty("Greeting", "text-color", "blue");
  setProperty("Greeting", "text-align", "center");
  appendItem(allUI, "Greeting");
button("CarbonFootprintButton", "My Carbon Footprint");
    hideElement("CarbonFootprintButton");
    setPosition("CarbonFootprintButton", 30, 240, 260, 35);
    setProperty("CarbonFootprintButton", "background-color", "blue");
    setProperty("CarbonFootprintButton", "border-radius", 20);
    appendItem(allUI, "CarbonFootprintButton");
textLabel("MainMessageBackground", "You're helping fight climate change every day!");
    hideElement("MainMessageBackground");
    setPosition("MainMessageBackground", 50, 290, 220, 100);
    setProperty("MainMessageBackground", "text-align", "center");
    setProperty("MainMessageBackground", "text-color", "blue");
    setProperty("MainMessageBackground", "font-size", 12);
    setProperty("MainMessageBackground", "border-width", 5);
    setProperty("MainMessageBackground", "background-color", "#F2F2F2");
    setProperty("MainMessageBackground", "border-radius", "10");
    setProperty("MainMessageBackground", "border-color", "#F2F2F2");
    appendItem(allUI, "MainMessageBackground");
onEvent("Main", "click", function(){
    MainPage();
    setProperty("Main", "text-color", "white");
    setProperty("Main", "background-color", "black");
    setProperty("Quests", "text-color", "black");
    setProperty("Quests", "background-color", "white");
    setProperty("OurAI", "text-color", "black");
    setProperty("OurAI", "background-color", "white");
    setProperty("Quiz", "text-color", "black");
    setProperty("Quiz", "background-color", "white");
    setProperty("Settings", "text-color", "black");
    setProperty("Settings", "background-color", "white");
});
onEvent("Quests", "click", function(){
  setProperty("Quests", "text-color", "white");
  setProperty("Quests", "background-color", "black");
  setProperty("Main", "text-color", "black");
  setProperty("Main", "background-color", "white");
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
  setProperty("OurAI", "text-color", "black");
  setProperty("OurAI", "background-color", "white");
  setProperty("Quiz", "text-color", "black");
  setProperty("Quiz", "background-color", "white");
});
onEvent("Settings", "click", function(){
    SettingsPage();
    setProperty("Settings", "text-color", "white");
    setProperty("Settings", "background-color", "black");
    setProperty("Main", "text-color", "black");
    setProperty("Main", "background-color", "white");
    setProperty("Quests", "text-color", "black");
    setProperty("Quests", "background-color", "white");
    setProperty("OurAI", "text-color", "black");
    setProperty("OurAI", "background-color", "white");
    setProperty("Quiz", "text-color", "black");
    setProperty("Quiz", "background-color", "white");
});
onEvent("Quiz", "click", function(){
    QuizMain();
    setProperty("Quiz", "text-color", "white");
    setProperty("Quiz", "background-color", "black");
    setProperty("Main", "text-color", "black");
    setProperty("Main", "background-color", "white");
    setProperty("Quests", "text-color", "black");
    setProperty("Quests", "background-color", "white");
    setProperty("OurAI", "text-color", "black");
    setProperty("OurAI", "background-color", "white");
    setProperty("Settings", "text-color", "black");
    setProperty("Settings", "background-color", "white");
});
onEvent("OurAI", "click", function( ) {
  ChatBot();
  setProperty("OurAI", "text-color", "white");
  setProperty("OurAI", "background-color", "black");
  setProperty("Quests", "text-color", "black");
  setProperty("Quests", "background-color", "white");
  setProperty("Main", "text-color", "black");
  setProperty("Main", "background-color", "white");
  setProperty("Quiz", "text-color", "black");
  setProperty("Quiz", "background-color", "white");
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
});

function MainPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Main");
    showElement("OurAI");
    showElement("Quiz");
    showElement("PlusSign");
    showElement("Quests");
    showElement("Settings");
    showElement("Streak");
    showElement("Greeting");
    showElement("CarbonFootprintButton");
    showElement("MainMessageBackground");
}



//Settings
textLabel("SettingsHeader", "Settings");
    hideElement("SettingsHeader");
    setPosition("SettingsHeader", 0, 0, 320, 45);
    setProperty("SettingsHeader", "background-color", "black");
    setProperty("SettingsHeader", "text-color", "white");
    setProperty("SettingsHeader", "text-align", "center");
    setProperty("SettingsHeader", "font-size", 32);
    appendItem(allUI, "SettingsHeader");
button("Privacy", "Privacy & Security");
    hideElement("Privacy");
    setPosition("Privacy", 5, 75, 310, 45);
    setProperty("Privacy", "font-size", 15);
    appendItem(allUI, "Privacy");
button("AccountInfo", "Account Information");
    hideElement("AccountInfo");
    setPosition("AccountInfo", 5, 135, 310, 45);
    setProperty("AccountInfo", "font-size", 15);
    appendItem(allUI, "AccountInfo");
button("Resources", "Resources");
    hideElement("Resources");
    setPosition("Resources", 5, 195, 310, 45);
    setProperty("Resources", "font-size", 15);
    appendItem(allUI, "Resources");
button("LogOut", "Log Out");
    hideElement("LogOut");
    setPosition("LogOut", 5, 340, 310, 50);
    setProperty("LogOut", "background-color", "white");
    setProperty("LogOut", "text-color", "red");
    setProperty("LogOut", "font-size", 18);
    setProperty("LogOut", "border-color", "red");
    setProperty("LogOut", "border-width", 4);
    appendItem(allUI, "LogOut");

function SettingsPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
    showElement("SettingsHeader");
    showElement("Privacy");
    showElement("AccountInfo");
    showElement("Resources");
    showElement("LogOut");
}

//LogOut
function StartPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("image1");
    showElement("logIn");
    showElement("signUp");
}

onEvent("LogOut", "click", function(){
  StartPage();
});

//Options
button("Transportation", "Transportation");
  hideElement("Transportation");
  setPosition("Transportation", 10, 60, 300, 45);
  setProperty("Transportation", "border-radius", 20);
  setProperty("Transportation", "background-color", "#46e034");
  appendItem(allUI, "Transportation");
button("Food", "Food");
  hideElement("Food");
  setPosition("Food", 10, 120, 300, 45);
  setProperty("Food", "border-radius", 20);
  setProperty("Food", "background-color", "#46e034");
  appendItem(allUI, "Food");
button("Shopping", "Shopping & Consumption");
  hideElement("Shopping");
  setPosition("Shopping", 10, 180, 300, 45);
  setProperty("Shopping", "border-radius", 20);
  setProperty("Shopping", "background-color", "#46e034");
  appendItem(allUI, "Shopping");
button("EnergyUsage", "Eneergy Usage");
  hideElement("EnergyUsage");
  setPosition("EnergyUsage", 10, 240, 300, 45);
  setProperty("EnergyUsage", "border-radius", 20);
  setProperty("EnergyUsage", "background-color", "#46e034");
  appendItem(allUI, "EnergyUsage");
button("WasteManagement", "Waste Management");
  hideElement("WasteManagement");
  setPosition("WasteManagement", 10, 300, 300, 45);
  setProperty("WasteManagement", "border-radius", 20);
  setProperty("WasteManagement", "background-color", "#46e034");
  appendItem(allUI, "WasteManagement");
button("Back", "Back");
  hideElement("Back");
  setPosition("Back", 10, 385, 300, 45);
  setProperty("Back", "border-radius", 20);
  setProperty("Back", "background-color", "grey");
  appendItem(allUI, "Back");

function Options(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
  showElement("Transportation");
  showElement("Food");
  showElement("Shopping");
  showElement("EnergyUsage");
  showElement("WasteManagement");
  showElement("Back");
}

onEvent("Back", "click", function(){
  MainPage();
});
onEvent("PlusSign", "click", function(){
  Options();
});

//Transportation
var allTransportation=[];

textLabel("TransportHeader", "Transportation");
    hideElement("TransportHeader");
    setPosition("TransportHeader", 0, 0, 320, 35);
    setProperty("TransportHeader", "background-color", "black");
    setProperty("TransportHeader", "text-color", "white");
    setProperty("TransportHeader", "text-align", "center");
    setProperty("TransportHeader", "font-size", 20);
    appendItem(allUI, "TransportHeader");
textLabel("CarsLabel", "Cars");
    hideElement("CarsLabel");
    setPosition("CarsLabel", 5, 55, 150, 20);
    setProperty("CarsLabel", "background-color", "black");
    setProperty("CarsLabel", "text-color", "white");
    setProperty("CarsLabel", "text-align", "center");
    setProperty("CarsLabel", "font-size", 13);
    appendItem(allUI, "CarsLabel");
textLabel("CarsBackground", "");
    hideElement("CarsBackground");
    setPosition("CarsBackground", 5, 75, 150, 90);
    setProperty("CarsBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "CarsBackground");
    appendItem(allUI, "CarsBackground");
textLabel("CarsQuestion", "How many miles have you used a car?");
    hideElement("CarsQuestion");
    setPosition("CarsQuestion", 5, 78, 150, 27);
    setProperty("CarsQuestion", "font-size", 10);
    setProperty("CarsQuestion", "text-align", "center");
    setProperty("CarsQuestion", "text-color", "black");
    appendItem(allTransportation, "CarsQuestion");
    appendItem(allUI, "CarsQuestion");
textInput("CarsInput", "");
    hideElement("CarsInput");
    setPosition("CarsInput", 5, 110, 150, 20);
    appendItem(allTransportation, "CarsInput");
    appendItem(allUI, "CarsInput");
button("CarsButton", "Add Info");
    hideElement("CarsButton");
    setPosition("CarsButton", 5, 135, 150, 25);
    setProperty("CarsButton", "font-size", 10);
    appendItem(allTransportation, "CarsButton");
    appendItem(allUI, "CarsButton");
textLabel("TrainsLabel", "Trains");
    hideElement("TrainsLabel");
    setPosition("TrainsLabel", 165, 55, 150, 20);
    setProperty("TrainsLabel", "background-color", "black");
    setProperty("TrainsLabel", "text-color", "white");
    setProperty("TrainsLabel", "text-align", "center");
    setProperty("TrainsLabel", "font-size", 13);
    appendItem(allUI, "TrainsLabel");
textLabel("TrainsBackground", "");
    hideElement("TrainsBackground");
    setPosition("TrainsBackground", 165, 75, 150, 90);
    setProperty("TrainsBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "TrainsBackground");
    appendItem(allUI, "TrainsBackground");
textLabel("TrainsQuestion", "How many miles have you used a train?");
    hideElement("TrainsQuestion");
    setPosition("TrainsQuestion", 165, 78, 150, 27);
    setProperty("TrainsQuestion", "font-size", 10);
    setProperty("TrainsQuestion", "text-align", "center");
    setProperty("TrainsQuestion", "text-color", "black");
    appendItem(allTransportation, "TrainsQuestion");
    appendItem(allUI, "TrainsQuestion");
textInput("TrainsInput", "");
    hideElement("TrainsInput");
    setPosition("TrainsInput", 165, 110, 150, 20);
    appendItem(allTransportation, "TrainsInput");
    appendItem(allUI, "TrainsInput");
button("TrainsButton", "Add Info");
    hideElement("TrainsButton");
    setPosition("TrainsButton", 165, 135, 150, 25);
    setProperty("TrainsButton", "font-size", 10);
    appendItem(allTransportation, "TrainsButton");
    appendItem(allUI, "TrainsButton");
textLabel("MotorcyclesLabel", "Motorcycles");
    hideElement("MotorcyclesLabel");
    setPosition("MotorcyclesLabel", 5, 173, 150, 20);
    setProperty("MotorcyclesLabel", "background-color", "black");
    setProperty("MotorcyclesLabel", "text-color", "white");
    setProperty("MotorcyclesLabel", "text-align", "center");
    setProperty("MotorcyclesLabel", "font-size", 13);
    appendItem(allUI, "MotorcyclesLabel");
textLabel("MotorcyclesBackground", "");
    hideElement("MotorcyclesBackground");
    setPosition("MotorcyclesBackground", 5, 193, 150, 90);
    setProperty("MotorcyclesBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "MotorcyclesBackground");
    appendItem(allUI, "MotorcyclesBackground");
textLabel("MotorcyclesQuestion", "How many miles have you used a motorcycle?");
    hideElement("MotorcyclesQuestion");
    setPosition("MotorcyclesQuestion", 5, 196, 150, 27);
    setProperty("MotorcyclesQuestion", "font-size", 9.5);
    setProperty("MotorcyclesQuestion", "text-align", "center");
    setProperty("MotorcyclesQuestion", "text-color", "black");
    appendItem(allTransportation, "MotorcyclesQuestion");
    appendItem(allUI, "MotorcyclesQuestion");
textInput("MotorcyclesInput", "");
    hideElement("MotorcyclesInput");
    setPosition("MotorcyclesInput", 5, 228, 150, 20);
    appendItem(allTransportation, "MotorcyclesInput");
    appendItem(allUI, "MotorcyclesInput");
button("MotorcyclesButton", "Add Info");
    hideElement("MotorcyclesButton");
    setPosition("MotorcyclesButton", 5, 253, 150, 25);
    setProperty("MotorcyclesButton", "font-size", 10);
    appendItem(allTransportation, "MotorcyclesButton");
    appendItem(allUI, "MotorcyclesButton");
textLabel("PlanesLabel", "Planes");
    hideElement("PlanesLabel");
    setPosition("PlanesLabel", 165, 173, 150, 20);
    setProperty("PlanesLabel", "background-color", "black");
    setProperty("PlanesLabel", "text-color", "white");
    setProperty("PlanesLabel", "text-align", "center");
    setProperty("PlanesLabel", "font-size", 13);
    appendItem(allUI, "PlanesLabel");
textLabel("PlanesBackground", "");
    hideElement("PlanesBackground");
    setPosition("PlanesBackground", 165, 193, 150, 90);
    setProperty("PlanesBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "PlanesBackground");
    appendItem(allUI, "PlanesBackground");
textLabel("PlanesQuestion", "How many miles have you used a plane?");
    hideElement("PlanesQuestion");
    setPosition("PlanesQuestion", 165, 196, 150, 27);
    setProperty("PlanesQuestion", "font-size", 10);
    setProperty("PlanesQuestion", "text-align", "center");
    setProperty("PlanesQuestion", "text-color", "black");
    appendItem(allTransportation, "PlanesQuestion");
    appendItem(allUI, "PlanesQuestion");
textInput("PlanesInput", "");
    hideElement("PlanesInput");
    setPosition("PlanesInput", 165, 228, 150, 20);
    appendItem(allTransportation, "PlanesInput");
    appendItem(allUI, "PlanesInput");
button("PlanesButton", "Add Info");
    hideElement("PlanesButton");
    setPosition("PlanesButton", 165, 253, 150, 25);
    setProperty("PlanesButton", "font-size", 10);
    appendItem(allTransportation, "PlanesButton");
    appendItem(allUI, "PlanesButton");
textLabel("BicycleLabel", "Bicycle");
    hideElement("BicycleLabel");
    setPosition("BicycleLabel", 5, 293, 150, 20);
    setProperty("BicycleLabel", "background-color", "black");
    setProperty("BicycleLabel", "text-color", "white");
    setProperty("BicycleLabel", "text-align", "center");
    setProperty("BicycleLabel", "font-size", 13);
    appendItem(allUI, "BicycleLabel");
textLabel("BicycleBackground", "");
    hideElement("BicycleBackground");
    setPosition("BicycleBackground", 5, 313, 150, 90);
    setProperty("BicycleBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "BicycleBackground");
    appendItem(allUI, "BicycleBackground");
textLabel("BicycleQuestion", "How many miles have you used a bicycle?");
    hideElement("BicycleQuestion");
    setPosition("BicycleQuestion", 5, 316, 150, 27);
    setProperty("BicycleQuestion", "font-size", 10);
    setProperty("BicycleQuestion", "text-align", "center");
    setProperty("BicycleQuestion", "text-color", "black");
    appendItem(allTransportation, "BicycleQuestion");
    appendItem(allUI, "BicycleQuestion");
textInput("BicycleInput", "");
    hideElement("BicycleInput");
    setPosition("BicycleInput", 5, 348, 150, 20);
    appendItem(allTransportation, "BicycleInput");
    appendItem(allUI, "BicycleInput");
button("BicycleButton", "Add Info");
    hideElement("BicycleButton");
    setPosition("BicycleButton", 5, 373, 150, 25);
    setProperty("BicycleButton", "font-size", 10);
    appendItem(allTransportation, "BicycleButton");
    appendItem(allUI, "BicycleButton");
textLabel("WalkLabel", "Walking");
    hideElement("WalkLabel");
    setPosition("WalkLabel", 165, 293, 150, 20);
    setProperty("WalkLabel", "background-color", "black");
    setProperty("WalkLabel", "text-color", "white");
    setProperty("WalkLabel", "text-align", "center");
    setProperty("WalkLabel", "font-size", 13);
    appendItem(allUI, "WalkLabel");
textLabel("WalkBackground", "");
    hideElement("WalkBackground");
    setPosition("WalkBackground", 165, 313, 150, 90);
    setProperty("WalkBackground", "background-color", "#F2F2F2");
    appendItem(allTransportation, "WalkBackground");
    appendItem(allUI, "WalkBackground");
textLabel("WalkQuestion", "How many miles have you walked?");
    hideElement("WalkQuestion");
    setPosition("WalkQuestion", 165, 316, 150, 27);
    setProperty("WalkQuestion", "font-size", 10);
    setProperty("WalkQuestion", "text-align", "center");
    setProperty("WalkQuestion", "text-color", "black");
    appendItem(allTransportation, "WalkQuestion");
    appendItem(allUI, "WalkQuestion");
textInput("WalkInput", "");
    hideElement("WalkInput");
    setPosition("WalkInput", 165, 348, 150, 20);
    appendItem(allTransportation, "WalkInput");
    appendItem(allUI, "WalkInput");
button("WalkButton", "Add Info");
    hideElement("WalkButton");
    setPosition("WalkButton", 165, 373, 150, 25);
    setProperty("WalkButton", "font-size", 10);
    appendItem(allTransportation, "WalkButton");
    appendItem(allUI, "WalkButton");
button("back", "Back");
    hideElement("back");
    setPosition("back", 5, 410, 310, 35);
    appendItem(allUI, "back");


image("car", "https://th.bing.com/th/id/R.d38a6e75b975aef8459b2b70ab41a70d?rik=%2fJ5WTX6BOvRLaA&pid=ImgRaw&r=0");
    hideElement("car");
    setPosition("car", 5, 75, 150, 90);
    appendItem(allTransportation, "car");
    appendItem(allUI, "car");
image("train", "https://tse4.mm.bing.net/th/id/OIP.C_PjIToK6OQGOyqIhURLIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("train");
    setPosition("train", 165, 75, 150, 90);
    appendItem(allTransportation, "train");
    appendItem(allUI, "train");
image("motorcycle", "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f3cd.png");
    hideElement("motorcycle");
    setPosition("motorcycle", 5, 193, 150, 90);
    appendItem(allTransportation, "motorcycle");
    appendItem(allUI, "motorcycle");
image("plane", "https://images.scrolller.com/nano/plane-1j1cuy7tem-880x942.jpg");
    hideElement("plane");
    setPosition("plane", 165, 193, 150, 90);
    appendItem(allTransportation, "plane");
    appendItem(allUI, "plane");
image("bicycle", "https://tse1.mm.bing.net/th/id/OIP.djKsGOhN9PNERzZ2KZSLGgHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("bicycle");
    setPosition("bicycle", 5, 313, 150, 90);
    appendItem(allTransportation, "bicycle");
    appendItem(allUI, "bicycle");
image("walk", "https://www.iconarchive.com/download/i137774/microsoft/fluentui-emoji-3d/Person-Walking-3d-Light.512.png");
    hideElement("walk");
    setPosition("walk", 165, 313, 150, 90);
    appendItem(allTransportation, "walk");
    appendItem(allUI, "walk");

function TransportationScreen(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("TransportHeader");
    showElement("CarsLabel");
    showElement("TrainsLabel");
    showElement("MotorcyclesLabel");
    showElement("PlanesLabel");
    showElement("BicycleLabel");
    showElement("WalkLabel");
    showElement("car");
    showElement("train");
    showElement("motorcycle");
    showElement("plane");
    showElement("bicycle");
    showElement("walk");
    showElement("back");

}

onEvent("Transportation", "click", function(){
  TransportationScreen();
});
 
onEvent("CarsButton", "click", function(){
    setText("CarsButton", "Added ✓");
    setProperty("CarsButton", "background-color", "grey");
    setProperty("CarsButton", "text-color", "black");
    pause(2000);
    setText("CarsButton", "Add Info");
    setProperty("CarsButton", "background-color", "orange");
    setProperty("CarsButton", "text-color", "white");
});

onEvent("TrainsButton", "click", function(){
    setText("TrainsButton", "Added ✓");
    setProperty("TrainsButton", "background-color", "grey");
    setProperty("TrainsButton", "text-color", "black");
    pause(2000);
    setText("TrainsButton", "Add Info");
    setProperty("TrainsButton", "background-color", "orange");
    setProperty("TrainsButton", "text-color", "white");
});

onEvent("MotorcyclesButton", "click", function(){
    setText("MotorcyclesButton", "Added ✓");
    setProperty("MotorcyclesButton", "background-color", "grey");
    setProperty("MotorcyclesButton", "text-color", "black");
    pause(2000);
    setText("MotorcyclesButton", "Add Info");
    setProperty("MotorcyclesButton", "background-color", "orange");
    setProperty("MotorcyclesButton", "text-color", "white");
});

onEvent("PlanesButton", "click", function(){
    setText("PlanesButton", "Added ✓");
    setProperty("PlanesButton", "background-color", "grey");
    setProperty("PlanesButton", "text-color", "black");
    pause(2000);
    setText("PlanesButton", "Add Info");
    setProperty("PlanesButton", "background-color", "orange");
    setProperty("PlanesButton", "text-color", "white");
});

onEvent("BicycleButton", "click", function(){
    setText("BicycleButton", "Added ✓");
    setProperty("BicycleButton", "background-color", "grey");
    setProperty("BicycleButton", "text-color", "black");
    pause(2000);
    setText("BicycleButton", "Add Info");
    setProperty("BicycleButton", "background-color", "orange");
    setProperty("BicycleButton", "text-color", "white");
});

onEvent("WalkButton", "click", function(){
    setText("WalkButton", "Added ✓");
    setProperty("WalkButton", "background-color", "grey");
    setProperty("WalkButton", "text-color", "black");
    pause(2000);
    setText("WalkButton", "Add Info");
    setProperty("WalkButton", "background-color", "orange");
    setProperty("WalkButton", "text-color", "white");
});

function carClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("CarsBackground");
    showElement("CarsQuestion");
    showElement("CarsInput");
    showElement("CarsButton");
    showElement("train");
    showElement("motorcycle");
    showElement("plane");
    showElement("bicycle");
    showElement("walk");
}

onEvent("car", "click", function(){
  carClicked();
});

function trainClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("TrainsBackground");
    showElement("TrainsQuestion");
    showElement("TrainsInput");
    showElement("TrainsButton");
    showElement("car");
    showElement("motorcycle");
    showElement("plane");
    showElement("bicycle");
    showElement("walk");
}

onEvent("train", "click", function(){
  trainClicked();
});

function motorcycleClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("MotorcyclesBackground");
    showElement("MotorcyclesQuestion");
    showElement("MotorcyclesInput");
    showElement("MotorcyclesButton");
    showElement("car");
    showElement("train");
    showElement("plane");
    showElement("bicycle");
    showElement("walk");
}

onEvent("motorcycle", "click", function(){
  motorcycleClicked();
});

function planeClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("PlanesBackground");
    showElement("PlanesQuestion");
    showElement("PlanesInput");
    showElement("PlanesButton");
    showElement("car");
    showElement("train");
    showElement("motorcycle");
    showElement("bicycle");
    showElement("walk");
}

onEvent("plane", "click", function(){
  planeClicked();
});

function bicycleClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("BicycleBackground");
    showElement("BicycleQuestion");
    showElement("BicycleInput");
    showElement("BicycleButton");
    showElement("car");
    showElement("train");
    showElement("motorcycle");
    showElement("plane");
    showElement("walk");
}

onEvent("bicycle", "click", function(){
  bicycleClicked();
});

function walkClicked(){
  for (var i = 0; i < allTransportation.length; i++) {
        hideElement(allTransportation[i]);
    }
    showElement("WalkBackground");
    showElement("WalkQuestion");
    showElement("WalkInput");
    showElement("WalkButton");
    showElement("car");
    showElement("train");
    showElement("motorcycle");
    showElement("plane");
    showElement("bicycle");
}

onEvent("walk", "click", function(){
  walkClicked();
});

onEvent("back", "click", function(){
    Options();
});

//Food
//NOTES: Everything functions properly. I need to change the images to each category and fix the alignment of each category.
//NOTES: Everything functions properly. I need to change the images to each category and fix the alignment of each category.
var allFood=[];

textLabel("FoodHeader", "Food");
    hideElement("FoodHeader");
    setPosition("FoodHeader", 0, 0, 320, 35);
    setProperty("FoodHeader", "background-color", "black");
    setProperty("FoodHeader", "text-color", "white");
    setProperty("FoodHeader", "text-align", "center");
    setProperty("FoodHeader", "font-size", 20);
    appendItem(allUI, "FoodHeader");
textLabel("RedMeatLabel", "Red Meat");
    hideElement("RedMeatLabel");
    setPosition("RedMeatLabel", 5, 55, 150, 20);
    setProperty("RedMeatLabel", "background-color", "black");
    setProperty("RedMeatLabel", "text-color", "white");
    setProperty("RedMeatLabel", "text-align", "center");
    setProperty("RedMeatLabel", "font-size", 13);
    appendItem(allUI, "RedMeatLabel");
textLabel("RedMeatBackground", "");
    hideElement("RedMeatBackground");
    setPosition("RedMeatBackground", 5, 75, 150, 90);
    setProperty("RedMeatBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "RedMeatBackground");
    appendItem(allUI, "RedMeatBackground");
textLabel("RedMeatQuestion", "How many pounds of red meat have you ate?");
    hideElement("RedMeatQuestion");
    setPosition("RedMeatQuestion", 5, 78, 150, 27);
    setProperty("RedMeatQuestion", "font-size", 9);
    setProperty("RedMeatQuestion", "text-align", "center");
    setProperty("RedMeatQuestion", "text-color", "black");
    appendItem(allFood, "RedMeatQuestion");
    appendItem(allUI, "RedMeatQuestion");
textInput("RedMeatInput", "");
    hideElement("RedMeatInput");
    setPosition("RedMeatInput", 5, 110, 150, 20);
    appendItem(allFood, "RedMeatInput");
    appendItem(allUI, "RedMeatInput");
button("RedMeatButton", "Add Info");
    hideElement("RedMeatButton");
    setPosition("RedMeatButton", 5, 135, 150, 25);
    setProperty("RedMeatButton", "font-size", 10);
    appendItem(allFood, "RedMeatButton");
    appendItem(allUI, "RedMeatButton");
textLabel("PoultryLabel", "Poultry");
    hideElement("PoultryLabel");
    setPosition("PoultryLabel", 165, 55, 150, 20);
    setProperty("PoultryLabel", "background-color", "black");
    setProperty("PoultryLabel", "text-color", "white");
    setProperty("PoultryLabel", "text-align", "center");
    setProperty("PoultryLabel", "font-size", 13);
    appendItem(allUI, "PoultryLabel");
textLabel("PoultryBackground", "");
    hideElement("PoultryBackground");
    setPosition("PoultryBackground", 165, 75, 150, 90);
    setProperty("PoultryBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "PoultryBackground");
    appendItem(allUI, "PoultryBackground");
textLabel("PoultryQuestion", "How many pounds of poultry have you ate?");
    hideElement("PoultryQuestion");
    setPosition("PoultryQuestion", 165, 78, 150, 27);
    setProperty("PoultryQuestion", "font-size", 10);
    setProperty("PoultryQuestion", "text-align", "center");
    setProperty("PoultryQuestion", "text-color", "black");
    appendItem(allFood, "PoultryQuestion");
    appendItem(allUI, "PoultryQuestion");
textInput("PoultryInput", "");
    hideElement("PoultryInput");
    setPosition("PoultryInput", 165, 110, 150, 20);
    appendItem(allFood, "PoultryInput");
    appendItem(allUI, "PoultryInput");
button("PoultryButton", "Add Info");
    hideElement("PoultryButton");
    setPosition("PoultryButton", 165, 135, 150, 25);
    setProperty("PoultryButton", "font-size", 10);
    appendItem(allFood, "PoultryButton");
    appendItem(allUI, "PoultryButton");
textLabel("VegetableLabel", "Vegetables");
    hideElement("VegetableLabel");
    setPosition("VegetableLabel", 5, 173, 150, 20);
    setProperty("VegetableLabel", "background-color", "black");
    setProperty("VegetableLabel", "text-color", "white");
    setProperty("VegetableLabel", "text-align", "center");
    setProperty("VegetableLabel", "font-size", 13);
    appendItem(allUI, "VegetableLabel");
textLabel("VegetableBackground", "");
    hideElement("VegetableBackground");
    setPosition("VegetableBackground", 5, 193, 150, 90);
    setProperty("VegetableBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "VegetableBackground");
    appendItem(allUI, "VegetableBackground");
textLabel("VegetableQuestion", "How many pounds of vegetables have you ate?");
    hideElement("VegetableQuestion");
    setPosition("VegetableQuestion", 5, 193, 150, 27);
    setProperty("VegetableQuestion", "font-size", 9);
    setProperty("VegetableQuestion", "text-align", "center");
    setProperty("VegetableQuestion", "text-color", "black");
    appendItem(allFood, "VegetableQuestion");
    appendItem(allUI, "VegetableQuestion");
textInput("VegetableInput", "");
    hideElement("VegetableInput");
    setPosition("VegetableInput", 5, 228, 150, 20);
    appendItem(allFood, "VegetableInput");
    appendItem(allUI, "VegetableInput");
button("VegetableButton", "Add Info");
    hideElement("VegetableButton");
    setPosition("VegetableButton", 5, 253, 150, 25);
    setProperty("VegetableButton", "font-size", 10);
    appendItem(allFood, "VegetableButton");
    appendItem(allUI, "VegetableButton");
textLabel("SeaFoodLabel", "Sea Food");
    hideElement("SeaFoodLabel");
    setPosition("SeaFoodLabel", 165, 173, 150, 20);
    setProperty("SeaFoodLabel", "background-color", "black");
    setProperty("SeaFoodLabel", "text-color", "white");
    setProperty("SeaFoodLabel", "text-align", "center");
    setProperty("SeaFoodLabel", "font-size", 13);
    appendItem(allUI, "SeaFoodLabel");
textLabel("SeaFoodBackground", "");
    hideElement("SeaFoodBackground");
    setPosition("SeaFoodBackground", 165, 193, 150, 90);
    setProperty("SeaFoodBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "SeaFoodBackground");
    appendItem(allUI, "SeaFoodBackground");
textLabel("SeaFoodQuestion", "How many pounds of seafood have you ate?");
    hideElement("SeaFoodQuestion");
    setPosition("SeaFoodQuestion", 165, 196, 150, 27);
    setProperty("SeaFoodQuestion", "font-size", 9);
    setProperty("SeaFoodQuestion", "text-align", "center");
    setProperty("SeaFoodQuestion", "text-color", "black");
    appendItem(allFood, "SeaFoodQuestion");
    appendItem(allUI, "SeaFoodQuestion");
textInput("SeaFoodInput", "");
    hideElement("SeaFoodInput");
    setPosition("SeaFoodInput", 165, 228, 150, 20);
    appendItem(allFood, "SeaFoodInput");
    appendItem(allUI, "SeaFoodInput");
button("SeaFoodButton", "Add Info");
    hideElement("SeaFoodButton");
    setPosition("SeaFoodButton", 165, 253, 150, 25);
    setProperty("SeaFoodButton", "font-size", 10);
    appendItem(allFood, "SeaFoodButton");
    appendItem(allUI, "SeaFoodButton");
textLabel("DairyLabel", "Dairy");
    hideElement("DairyLabel");
    setPosition("DairyLabel", 5, 293, 150, 20);
    setProperty("DairyLabel", "background-color", "black");
    setProperty("DairyLabel", "text-color", "white");
    setProperty("DairyLabel", "text-align", "center");
    setProperty("DairyLabel", "font-size", 13);
    appendItem(allUI, "DairyLabel");
textLabel("DairyBackground", "");
    hideElement("DairyBackground");
    setPosition("DairyBackground", 5, 313, 150, 90);
    setProperty("DairyBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "DairyBackground");
    appendItem(allUI, "DairyBackground");
textLabel("DairyQuestion", "How many pounds dairy have you ate?");
    hideElement("DairyQuestion");
    setPosition("DairyQuestion", 5, 316, 150, 27);
    setProperty("DairyQuestion", "font-size", 10);
    setProperty("DairyQuestion", "text-align", "center");
    setProperty("DairyQuestion", "text-color", "black");
    appendItem(allFood, "DairyQuestion");
    appendItem(allUI, "DairyQuestion");
textInput("DairyInput", "");
    hideElement("DairyInput");
    setPosition("DairyInput", 5, 348, 150, 20);
    appendItem(allFood, "DairyInput");
    appendItem(allUI, "DairyInput");
button("DairyButton", "Add Info");
    hideElement("DairyButton");
    setPosition("DairyButton", 5, 373, 150, 25);
    setProperty("DairyButton", "font-size", 10);
    appendItem(allFood, "DairyButton");
    appendItem(allUI, "DairyButton");
textLabel("EggLabel", "Eggs");
    hideElement("EggLabel");
    setPosition("EggLabel", 165, 293, 150, 20);
    setProperty("EggLabel", "background-color", "black");
    setProperty("EggLabel", "text-color", "white");
    setProperty("EggLabel", "text-align", "center");
    setProperty("EggLabel", "font-size", 13);
    appendItem(allUI, "EggLabel");
textLabel("EggBackground", "");
    hideElement("EggBackground");
    setPosition("EggBackground", 165, 313, 150, 90);
    setProperty("EggBackground", "background-color", "#F2F2F2");
    appendItem(allFood, "EggBackground");
    appendItem(allUI, "EggBackground");
textLabel("EggQuestion", "How many pounds of eggs have you ate?");
    hideElement("EggQuestion");
    setPosition("EggQuestion", 165, 316, 150, 27);
    setProperty("EggQuestion", "font-size", 10);
    setProperty("EggQuestion", "text-align", "center");
    setProperty("EggQuestion", "text-color", "black");
    appendItem(allFood, "EggQuestion");
    appendItem(allUI, "EggQuestion");
textInput("EggInput", "");
    hideElement("EggInput");
    setPosition("EggInput", 165, 348, 150, 20);
    appendItem(allFood, "EggInput");
    appendItem(allUI, "EggInput");
button("EggButton", "Add Info");
    hideElement("EggButton");
    setPosition("EggButton", 165, 373, 150, 25);
    setProperty("EggButton", "font-size", 10);
    appendItem(allFood, "EggButton");
    appendItem(allUI, "EggButton");
button("back1", "Back");
    hideElement("back1");
    setPosition("back1", 5, 410, 310, 35);
    appendItem(allUI, "back1");

image("redmeat", "https://th.bing.com/th/id/R.d38a6e75b975aef8459b2b70ab41a70d?rik=%2fJ5WTX6BOvRLaA&pid=ImgRaw&r=0");
    hideElement("redmeat");
    setPosition("redmeat", 5, 75, 150, 90);
    appendItem(allFood, "redmeat");
    appendItem(allUI, "redmeat");
image("poultry", "https://tse4.mm.bing.net/th/id/OIP.C_PjIToK6OQGOyqIhURLIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("poultry");
    setPosition("poultry", 165, 75, 150, 90);
    appendItem(allFood, "poultry");
    appendItem(allUI, "poultry");
image("vegetable", "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f3cd.png");
    hideElement("vegetable");
    setPosition("vegetable", 5, 193, 150, 90);
    appendItem(allFood, "vegetable");
    appendItem(allUI, "vegetable");
image("seafood", "https://images.scrolller.com/nano/plane-1j1cuy7tem-880x942.jpg");
    hideElement("seafood");
    setPosition("seafood", 165, 193, 150, 90);
    appendItem(allFood, "seafood");
    appendItem(allUI, "seafood");
image("dairy", "https://tse1.mm.bing.net/th/id/OIP.djKsGOhN9PNERzZ2KZSLGgHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("dairy");
    setPosition("dairy", 5, 313, 150, 90);
    appendItem(allFood, "dairy");
    appendItem(allUI, "dairy");
image("egg", "https://www.iconarchive.com/download/i137774/microsoft/fluentui-emoji-3d/Person-Walking-3d-Light.512.png");
    hideElement("egg");
    setPosition("egg", 165, 313, 150, 90);
    appendItem(allFood, "egg");
    appendItem(allUI, "egg");

function FoodScreen(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("FoodHeader");
    showElement("RedMeatLabel");
    showElement("PoultryLabel");
    showElement("VegetableLabel");
    showElement("SeaFoodLabel");
    showElement("DairyLabel");
    showElement("EggLabel");
    showElement("redmeat");
    showElement("poultry");
    showElement("vegetable");
    showElement("seafood");
    showElement("dairy");
    showElement("egg");
    showElement("back1");

}

onEvent("Food", "click", function(){
  FoodScreen();
});

onEvent("RedMeatButton", "click", function(){
    setText("RedMeatButton", "Added ✓");
    setProperty("RedMeatButton", "background-color", "grey");
    setProperty("RedMeatButton", "text-color", "black");
    pause(2000);
    setText("RedMeatButton", "Add Info");
    setProperty("RedMeatButton", "background-color", "orange");
    setProperty("RedMeatButton", "text-color", "white");
});

onEvent("PoultryButton", "click", function(){
    setText("PoultryButton", "Added ✓");
    setProperty("PoultryButton", "background-color", "grey");
    setProperty("PoultryButton", "text-color", "black");
    pause(2000);
    setText("PoultryButton", "Add Info");
    setProperty("PoultryButton", "background-color", "orange");
    setProperty("PoultryButton", "text-color", "white");
});

onEvent("VegetableButton", "click", function(){
    setText("VegetableButton", "Added ✓");
    setProperty("VegetableButton", "background-color", "grey");
    setProperty("VegetableButton", "text-color", "black");
    pause(2000);
    setText("VegetableButton", "Add Info");
    setProperty("VegetableButton", "background-color", "orange");
    setProperty("VegetableButton", "text-color", "white");
});

onEvent("SeaFoodButton", "click", function(){
    setText("SeaFoodButton", "Added ✓");
    setProperty("SeaFoodButton", "background-color", "grey");
    setProperty("SeaFoodButton", "text-color", "black");
    pause(2000);
    setText("SeaFoodButton", "Add Info");
    setProperty("SeaFoodButton", "background-color", "orange");
    setProperty("SeaFoodButton", "text-color", "white");
});

onEvent("DairyButton", "click", function(){
    setText("DairyButton", "Added ✓");
    setProperty("DairyButton", "background-color", "grey");
    setProperty("DairyButton", "text-color", "black");
    pause(2000);
    setText("DairyButton", "Add Info");
    setProperty("DairyButton", "background-color", "orange");
    setProperty("DairyButton", "text-color", "white");
});

onEvent("EggButton", "click", function(){
    setText("EggButton", "Added ✓");
    setProperty("EggButton", "background-color", "grey");
    setProperty("EggButton", "text-color", "black");
    pause(2000);
    setText("EggButton", "Add Info");
    setProperty("EggButton", "background-color", "orange");
    setProperty("EggButton", "text-color", "white");
});

function redmeatClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("RedMeatBackground");
    showElement("RedMeatQuestion");
    showElement("RedMeatInput");
    showElement("RedMeatButton");
    showElement("poultry");
    showElement("vegetable");
    showElement("seafood");
    showElement("dairy");
    showElement("egg");
}

onEvent("redmeat", "click", function(){
  redmeatClicked();
});

function poultryClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("PoultryBackground");
    showElement("PoultryQuestion");
    showElement("PoultryInput");
    showElement("PoultryButton");
    showElement("redmeat");
    showElement("vegetable");
    showElement("seafood");
    showElement("dairy");
    showElement("egg");
}

onEvent("poultry", "click", function(){
  poultryClicked();
});

function vegetableClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("VegetableBackground");
    showElement("VegetableQuestion");
    showElement("VegetableInput");
    showElement("VegetableButton");
    showElement("redmeat");
    showElement("poultry");
    showElement("seafood");
    showElement("dairy");
    showElement("egg");
}

onEvent("vegetable", "click", function(){
  vegetableClicked();
});

function seafoodClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("SeaFoodBackground");
    showElement("SeaFoodQuestion");
    showElement("SeaFoodInput");
    showElement("SeaFoodButton");
    showElement("redmeat");
    showElement("poultry");
    showElement("vegetable");
    showElement("dairy");
    showElement("egg");
}

onEvent("seafood", "click", function(){
  seafoodClicked();
});

function dairyClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("DairyBackground");
    showElement("DairyQuestion");
    showElement("DairyInput");
    showElement("DairyButton");
    showElement("redmeat");
    showElement("poultry");
    showElement("vegetable");
    showElement("seafood");
    showElement("egg");
}

onEvent("dairy", "click", function(){
  dairyClicked();
});

function eggClicked(){
  for (var i = 0; i < allFood.length; i++) {
        hideElement(allFood[i]);
    }
    showElement("EggBackground");
    showElement("EggQuestion");
    showElement("EggInput");
    showElement("EggButton");
    showElement("redmeat");
    showElement("poultry");
    showElement("vegetable");
    showElement("seafood");
    showElement("dairy");
}

onEvent("egg", "click", function(){
  eggClicked();
});

onEvent("back1", "click", function(){
    Options();
});


//Shopping & Consumption
var allShopping=[];

textLabel("ShoppingHeader", "Shopping & Consumption");
    hideElement("ShoppingHeader");
    setPosition("ShoppingHeader", 0, 0, 320, 35);
    setProperty("ShoppingHeader", "background-color", "black");
    setProperty("ShoppingHeader", "text-color", "white");
    setProperty("ShoppingHeader", "text-align", "center");
    setProperty("ShoppingHeader", "font-size", 20);
    appendItem(allUI, "ShoppingHeader");
textLabel("ClothesLabel", "Clothes");
    hideElement("ClothesLabel");
    setPosition("ClothesLabel", 5, 55, 150, 20);
    setProperty("ClothesLabel", "background-color", "black");
    setProperty("ClothesLabel", "text-color", "white");
    setProperty("ClothesLabel", "text-align", "center");
    setProperty("ClothesLabel", "font-size", 13);
    appendItem(allUI, "ClothesLabel");
textLabel("ClothesBackground", "");
    hideElement("ClothesBackground");
    setPosition("ClothesBackground", 5, 75, 150, 90);
    setProperty("ClothesBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "ClothesBackground");
    appendItem(allUI, "ClothesBackground");
textLabel("ClothesQuestion", "How many new clothes have you bought?");
    hideElement("ClothesQuestion");
    setPosition("ClothesQuestion", 5, 78, 150, 27);
    setProperty("ClothesQuestion", "font-size", 9);
    setProperty("ClothesQuestion", "text-align", "center");
    setProperty("ClothesQuestion", "text-color", "black");
    appendItem(allShopping, "ClothesQuestion");
    appendItem(allUI, "ClothesQuestion");
textInput("ClothesInput", "");
    hideElement("ClothesInput");
    setPosition("ClothesInput", 5, 110, 150, 20);
    appendItem(allShopping, "ClothesInput");
    appendItem(allUI, "ClothesInput");
button("ClothesButton", "Add Info");
    hideElement("ClothesButton");
    setPosition("ClothesButton", 5, 135, 150, 25);
    setProperty("ClothesButton", "font-size", 10);
    appendItem(allShopping, "ClothesButton");
    appendItem(allUI, "ClothesButton");
textLabel("AppliancesLabel", "Electronics/Appliances");
    hideElement("AppliancesLabel");
    setPosition("AppliancesLabel", 165, 55, 150, 20);
    setProperty("AppliancesLabel", "background-color", "black");
    setProperty("AppliancesLabel", "text-color", "white");
    setProperty("AppliancesLabel", "text-align", "left");
    setProperty("AppliancesLabel", "font-size", 10);
    appendItem(allUI, "AppliancesLabel");
textLabel("AppliancesBackground", "");
    hideElement("AppliancesBackground");
    setPosition("AppliancesBackground", 165, 75, 150, 90);
    setProperty("AppliancesBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "AppliancesBackground");
    appendItem(allUI, "AppliancesBackground");
textLabel("AppliancesQuestion", "How many electronics or appliances have you bought?");
    hideElement("AppliancesQuestion");
    setPosition("AppliancesQuestion", 165, 78, 150, 27);
    setProperty("AppliancesQuestion", "font-size", 8.5);
    setProperty("AppliancesQuestion", "text-align", "center");
    setProperty("AppliancesQuestion", "text-color", "black");
    appendItem(allShopping, "AppliancesQuestion");
    appendItem(allUI, "AppliancesQuestion");
textInput("AppliancesInput", "");
    hideElement("AppliancesInput");
    setPosition("AppliancesInput", 165, 110, 150, 20);
    appendItem(allShopping, "AppliancesInput");
    appendItem(allUI, "AppliancesInput");
button("AppliancesButton", "Add Info");
    hideElement("AppliancesButton");
    setPosition("AppliancesButton", 165, 135, 150, 25);
    setProperty("AppliancesButton", "font-size", 10);
    appendItem(allShopping, "AppliancesButton");
    appendItem(allUI, "AppliancesButton");
textLabel("PlasticLabel", "Single-Use Plastic");
    hideElement("PlasticLabel");
    setPosition("PlasticLabel", 5, 173, 150, 20);
    setProperty("PlasticLabel", "background-color", "black");
    setProperty("PlasticLabel", "text-color", "white");
    setProperty("PlasticLabel", "text-align", "center");
    setProperty("PlasticLabel", "font-size", 12);
    appendItem(allUI, "PlasticLabel");
textLabel("PlasticBackground", "");
    hideElement("PlasticBackground");
    setPosition("PlasticBackground", 5, 193, 150, 90);
    setProperty("PlasticBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "PlasticBackground");
    appendItem(allUI, "PlasticBackground");
textLabel("PlasticQuestion", "How many single-use plastic items have you used?");
    hideElement("PlasticQuestion");
    setPosition("PlasticQuestion", 5, 193, 150, 27);
    setProperty("PlasticQuestion", "font-size", 9.5);
    setProperty("PlasticQuestion", "text-align", "center");
    setProperty("PlasticQuestion", "text-color", "black");
    appendItem(allShopping, "PlasticQuestion");
    appendItem(allUI, "PlasticQuestion");
textInput("PlasticInput", "");
    hideElement("PlasticInput");
    setPosition("PlasticInput", 5, 228, 150, 20);
    appendItem(allShopping, "PlasticInput");
    appendItem(allUI, "PlasticInput");
button("PlasticButton", "Add Info");
    hideElement("PlasticButton");
    setPosition("PlasticButton", 5, 253, 150, 25);
    setProperty("PlasticButton", "font-size", 10);
    appendItem(allShopping, "PlasticButton");
    appendItem(allUI, "PlasticButton");
textLabel("ReusableLabel", "Reusable Items");
    hideElement("ReusableLabel");
    setPosition("ReusableLabel", 165, 173, 150, 20);
    setProperty("ReusableLabel", "background-color", "black");
    setProperty("ReusableLabel", "text-color", "white");
    setProperty("ReusableLabel", "text-align", "center");
    setProperty("ReusableLabel", "font-size", 13);
    appendItem(allUI, "ReusableLabel");
textLabel("ReusableBackground", "");
    hideElement("ReusableBackground");
    setPosition("ReusableBackground", 165, 193, 150, 90);
    setProperty("ReusableBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "ReusableBackground");
    appendItem(allUI, "ReusableBackground");
textLabel("ReusableQuestion", "How many reusable items have you used?");
    hideElement("ReusableQuestion");
    setPosition("ReusableQuestion", 165, 196, 150, 27);
    setProperty("ReusableQuestion", "font-size", 10);
    setProperty("ReusableQuestion", "text-align", "center");
    setProperty("ReusableQuestion", "text-color", "black");
    appendItem(allShopping, "ReusableQuestion");
    appendItem(allUI, "ReusableQuestion");
textInput("ReusableInput", "");
    hideElement("ReusableInput");
    setPosition("ReusableInput", 165, 228, 150, 20);
    appendItem(allShopping, "ReusableInput");
    appendItem(allUI, "ReusableInput");
button("ReusableButton", "Add Info");
    hideElement("ReusableButton");
    setPosition("ReusableButton", 165, 253, 150, 25);
    setProperty("ReusableButton", "font-size", 10);
    appendItem(allShopping, "ReusableButton");
    appendItem(allUI, "ReusableButton");
textLabel("OnlineLabel", "Orderded Online");
    hideElement("OnlineLabel");
    setPosition("OnlineLabel", 5, 293, 150, 20);
    setProperty("OnlineLabel", "background-color", "black");
    setProperty("OnlineLabel", "text-color", "white");
    setProperty("OnlineLabel", "text-align", "center");
    setProperty("OnlineLabel", "font-size", 13);
    appendItem(allUI, "OnlineLabel");
textLabel("OnlineBackground", "");
    hideElement("OnlineBackground");
    setPosition("OnlineBackground", 5, 313, 150, 90);
    setProperty("OnlineBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "OnlineBackground");
    appendItem(allUI, "OnlineBackground");
textLabel("OnlineQuestion", "How many times have you ordered online?");
    hideElement("OnlineQuestion");
    setPosition("OnlineQuestion", 5, 316, 150, 27);
    setProperty("OnlineQuestion", "font-size", 10);
    setProperty("OnlineQuestion", "text-align", "center");
    setProperty("OnlineQuestion", "text-color", "black");
    appendItem(allShopping, "OnlineQuestion");
    appendItem(allUI, "OnlineQuestion");
textInput("OnlineInput", "");
    hideElement("OnlineInput");
    setPosition("OnlineInput", 5, 348, 150, 20);
    appendItem(allShopping, "OnlineInput");
    appendItem(allUI, "OnlineInput");
button("OnlineButton", "Add Info");
    hideElement("OnlineButton");
    setPosition("OnlineButton", 5, 373, 150, 25);
    setProperty("OnlineButton", "font-size", 10);
    appendItem(allShopping, "OnlineButton");
    appendItem(allUI, "OnlineButton");
textLabel("EcoPackagingLabel", "Eco-Packaging");
    hideElement("EcoPackagingLabel");
    setPosition("EcoPackagingLabel", 165, 293, 150, 20);
    setProperty("EcoPackagingLabel", "background-color", "black");
    setProperty("EcoPackagingLabel", "text-color", "white");
    setProperty("EcoPackagingLabel", "text-align", "center");
    setProperty("EcoPackagingLabel", "font-size", 13);
    appendItem(allUI, "EcoPackagingLabel");
textLabel("EcoPackagingBackground", "");
    hideElement("EcoPackagingBackground");
    setPosition("EcoPackagingBackground", 165, 313, 150, 90);
    setProperty("EcoPackagingBackground", "background-color", "#F2F2F2");
    appendItem(allShopping, "EcoPackagingBackground");
    appendItem(allUI, "EcoPackagingBackground");
textLabel("EcoPackagingQuestion", "How many times have you used eco-packaging?");
    hideElement("EcoPackagingQuestion");
    setPosition("EcoPackagingQuestion", 165, 313, 150, 27);
    setProperty("EcoPackagingQuestion", "font-size", 9);
    setProperty("EcoPackagingQuestion", "text-align", "center");
    setProperty("EcoPackagingQuestion", "text-color", "black");
    appendItem(allShopping, "EcoPackagingQuestion");
    appendItem(allUI, "EcoPackagingQuestion");
textInput("EcoPackagingInput", "");
    hideElement("EcoPackagingInput");
    setPosition("EcoPackagingInput", 165, 348, 150, 20);
    appendItem(allShopping, "EcoPackagingInput");
    appendItem(allUI, "EcoPackagingInput");
button("EcoPackagingButton", "Add Info");
    hideElement("EcoPackagingButton");
    setPosition("EcoPackagingButton", 165, 373, 150, 25);
    setProperty("EcoPackagingButton", "font-size", 10);
    appendItem(allShopping, "EcoPackagingButton");
    appendItem(allUI, "EcoPackagingButton");
button("back3", "Back");
    hideElement("back3");
    setPosition("back3", 5, 410, 310, 35);
    appendItem(allUI, "back3");


image("clothes", "https://th.bing.com/th/id/R.d38a6e75b975aef8459b2b70ab41a70d?rik=%2fJ5WTX6BOvRLaA&pid=ImgRaw&r=0");
    hideElement("clothes");
    setPosition("clothes", 5, 75, 150, 90);
    appendItem(allShopping, "clothes");
    appendItem(allUI, "clothes");
image("appliances", "https://tse4.mm.bing.net/th/id/OIP.C_PjIToK6OQGOyqIhURLIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("appliances");
    setPosition("appliances", 165, 75, 150, 90);
    appendItem(allShopping, "appliances");
    appendItem(allUI, "appliances");
image("plastic", "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f3cd.png");
    hideElement("plastic");
    setPosition("plastic", 5, 193, 150, 90);
    appendItem(allShopping, "plastic");
    appendItem(allUI, "plastic");
image("reusable", "https://images.scrolller.com/nano/reusable-1j1cuy7tem-880x942.jpg");
    hideElement("reusable");
    setPosition("reusable", 165, 193, 150, 90);
    appendItem(allShopping, "reusable");
    appendItem(allUI, "reusable");
image("online", "https://tse1.mm.bing.net/th/id/OIP.djKsGOhN9PNERzZ2KZSLGgHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("online");
    setPosition("online", 5, 313, 150, 90);
    appendItem(allShopping, "online");
    appendItem(allUI, "online");
image("ecopackaging", "https://www.iconarchive.com/download/i137774/microsoft/fluentui-emoji-3d/Person-EcoPackaginging-3d-Light.512.png");
    hideElement("ecopackaging");
    setPosition("ecopackaging", 165, 313, 150, 90);
    appendItem(allShopping, "ecopackaging");
    appendItem(allUI, "ecopackaging");

function ShoppingScreen(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("ShoppingHeader");
    showElement("ClothesLabel");
    showElement("AppliancesLabel");
    showElement("PlasticLabel");
    showElement("ReusableLabel");
    showElement("OnlineLabel");
    showElement("EcoPackagingLabel");
    showElement("clothes");
    showElement("appliances");
    showElement("plastic");
    showElement("reusable");
    showElement("online");
    showElement("ecopackaging");
    showElement("back3");

}

onEvent("Shopping", "click", function(){
  ShoppingScreen();
});

onEvent("ClothesButton", "click", function(){
    setText("ClothesButton", "Added ✓");
    setProperty("ClothesButton", "background-color", "grey");
    setProperty("ClothesButton", "text-color", "black");
    pause(2000);
    setText("ClothesButton", "Add Info");
    setProperty("ClothesButton", "background-color", "orange");
    setProperty("ClothesButton", "text-color", "white");
});

onEvent("AppliancesButton", "click", function(){
    setText("AppliancesButton", "Added ✓");
    setProperty("AppliancesButton", "background-color", "grey");
    setProperty("AppliancesButton", "text-color", "black");
    pause(2000);
    setText("AppliancesButton", "Add Info");
    setProperty("AppliancesButton", "background-color", "orange");
    setProperty("AppliancesButton", "text-color", "white");
});

onEvent("PlasticButton", "click", function(){
    setText("PlasticButton", "Added ✓");
    setProperty("PlasticButton", "background-color", "grey");
    setProperty("PlasticButton", "text-color", "black");
    pause(2000);
    setText("PlasticButton", "Add Info");
    setProperty("PlasticButton", "background-color", "orange");
    setProperty("PlasticButton", "text-color", "white");
});

onEvent("ReusableButton", "click", function(){
    setText("ReusableButton", "Added ✓");
    setProperty("ReusableButton", "background-color", "grey");
    setProperty("ReusableButton", "text-color", "black");
    pause(2000);
    setText("ReusableButton", "Add Info");
    setProperty("ReusableButton", "background-color", "orange");
    setProperty("ReusableButton", "text-color", "white");
});

onEvent("OnlineButton", "click", function(){
    setText("OnlineButton", "Added ✓");
    setProperty("OnlineButton", "background-color", "grey");
    setProperty("OnlineButton", "text-color", "black");
    pause(2000);
    setText("OnlineButton", "Add Info");
    setProperty("OnlineButton", "background-color", "orange");
    setProperty("OnlineButton", "text-color", "white");
});

onEvent("EcoPackagingButton", "click", function(){
    setText("EcoPackagingButton", "Added ✓");
    setProperty("EcoPackagingButton", "background-color", "grey");
    setProperty("EcoPackagingButton", "text-color", "black");
    pause(2000);
    setText("EcoPackagingButton", "Add Info");
    setProperty("EcoPackagingButton", "background-color", "orange");
    setProperty("EcoPackagingButton", "text-color", "white");
});

function clothesClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("ClothesBackground");
    showElement("ClothesQuestion");
    showElement("ClothesInput");
    showElement("ClothesButton");
    showElement("appliances");
    showElement("plastic");
    showElement("reusable");
    showElement("online");
    showElement("ecopackaging");
}

onEvent("clothes", "click", function(){
  clothesClicked();
});

function appliancesClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("AppliancesBackground");
    showElement("AppliancesQuestion");
    showElement("AppliancesInput");
    showElement("AppliancesButton");
    showElement("clothes");
    showElement("plastic");
    showElement("reusable");
    showElement("online");
    showElement("ecopackaging");
}

onEvent("appliances", "click", function(){
  appliancesClicked();
});

function plasticClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("PlasticBackground");
    showElement("PlasticQuestion");
    showElement("PlasticInput");
    showElement("PlasticButton");
    showElement("clothes");
    showElement("appliances");
    showElement("reusable");
    showElement("online");
    showElement("ecopackaging");
}

onEvent("plastic", "click", function(){
  plasticClicked();
});

function reusableClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("ReusableBackground");
    showElement("ReusableQuestion");
    showElement("ReusableInput");
    showElement("ReusableButton");
    showElement("clothes");
    showElement("appliances");
    showElement("plastic");
    showElement("online");
    showElement("ecopackaging");
}

onEvent("reusable", "click", function(){
  reusableClicked();
});

function onlineClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("OnlineBackground");
    showElement("OnlineQuestion");
    showElement("OnlineInput");
    showElement("OnlineButton");
    showElement("clothes");
    showElement("appliances");
    showElement("plastic");
    showElement("reusable");
    showElement("ecopackaging");
}

onEvent("online", "click", function(){
  onlineClicked();
});

function ecopackagingClicked(){
  for (var i = 0; i < allShopping.length; i++) {
        hideElement(allShopping[i]);
    }
    showElement("EcoPackagingBackground");
    showElement("EcoPackagingQuestion");
    showElement("EcoPackagingInput");
    showElement("EcoPackagingButton");
    showElement("clothes");
    showElement("appliances");
    showElement("plastic");
    showElement("reusable");
    showElement("online");
}

onEvent("ecopackaging", "click", function(){
  ecopackagingClicked();
});

onEvent("back3", "click", function(){
    Options();
});





//Energy Usage
var allEnergy=[];

textLabel("EnergyHeader", "Energy Usage");
    hideElement("EnergyHeader");
    setPosition("EnergyHeader", 0, 0, 320, 35);
    setProperty("EnergyHeader", "background-color", "black");
    setProperty("EnergyHeader", "text-color", "white");
    setProperty("EnergyHeader", "text-align", "center");
    setProperty("EnergyHeader", "font-size", 20);
    appendItem(allUI, "EnergyHeader");
textLabel("CoolingHeatingLabel", "AC or Heating");
    hideElement("CoolingHeatingLabel");
    setPosition("CoolingHeatingLabel", 5, 55, 150, 20);
    setProperty("CoolingHeatingLabel", "background-color", "black");
    setProperty("CoolingHeatingLabel", "text-color", "white");
    setProperty("CoolingHeatingLabel", "text-align", "center");
    setProperty("CoolingHeatingLabel", "font-size", 13);
    appendItem(allUI, "CoolingHeatingLabel");
textLabel("CoolingHeatingBackground", "");
    hideElement("CoolingHeatingBackground");
    setPosition("CoolingHeatingBackground", 5, 75, 150, 90);
    setProperty("CoolingHeatingBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "CoolingHeatingBackground");
    appendItem(allUI, "CoolingHeatingBackground");
textLabel("CoolingHeatingQuestion", "How many minutes have you used AC or heating?");
    hideElement("CoolingHeatingQuestion");
    setPosition("CoolingHeatingQuestion", 5, 78, 150, 27);
    setProperty("CoolingHeatingQuestion", "font-size", 9);
    setProperty("CoolingHeatingQuestion", "text-align", "center");
    setProperty("CoolingHeatingQuestion", "text-color", "black");
    appendItem(allEnergy, "CoolingHeatingQuestion");
    appendItem(allUI, "CoolingHeatingQuestion");
textInput("CoolingHeatingInput", "");
    hideElement("CoolingHeatingInput");
    setPosition("CoolingHeatingInput", 5, 110, 150, 20);
    appendItem(allEnergy, "CoolingHeatingInput");
    appendItem(allUI, "CoolingHeatingInput");
button("CoolingHeatingButton", "Add Info");
    hideElement("CoolingHeatingButton");
    setPosition("CoolingHeatingButton", 5, 135, 150, 25);
    setProperty("CoolingHeatingButton", "font-size", 10);
    appendItem(allEnergy, "CoolingHeatingButton");
    appendItem(allUI, "CoolingHeatingButton");
textLabel("ShowerLabel", "Shower");
    hideElement("ShowerLabel");
    setPosition("ShowerLabel", 165, 55, 150, 20);
    setProperty("ShowerLabel", "background-color", "black");
    setProperty("ShowerLabel", "text-color", "white");
    setProperty("ShowerLabel", "text-align", "center");
    setProperty("ShowerLabel", "font-size", 13);
    appendItem(allUI, "ShowerLabel");
textLabel("ShowerBackground", "");
    hideElement("ShowerBackground");
    setPosition("ShowerBackground", 165, 75, 150, 90);
    setProperty("ShowerBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "ShowerBackground");
    appendItem(allUI, "ShowerBackground");
textLabel("ShowerQuestion", "How many minutes have you used the shower?");
    hideElement("ShowerQuestion");
    setPosition("ShowerQuestion", 165, 78, 150, 27);
    setProperty("ShowerQuestion", "font-size", 9.5);
    setProperty("ShowerQuestion", "text-align", "center");
    setProperty("ShowerQuestion", "text-color", "black");
    appendItem(allEnergy, "ShowerQuestion");
    appendItem(allUI, "ShowerQuestion");
textInput("ShowerInput", "");
    hideElement("ShowerInput");
    setPosition("ShowerInput", 165, 110, 150, 20);
    appendItem(allEnergy, "ShowerInput");
    appendItem(allUI, "ShowerInput");
button("ShowerButton", "Add Info");
    hideElement("ShowerButton");
    setPosition("ShowerButton", 165, 135, 150, 25);
    setProperty("ShowerButton", "font-size", 10);
    appendItem(allEnergy, "ShowerButton");
    appendItem(allUI, "ShowerButton");
textLabel("DevicesLabel", "Devices");
    hideElement("DevicesLabel");
    setPosition("DevicesLabel", 5, 173, 150, 20);
    setProperty("DevicesLabel", "background-color", "black");
    setProperty("DevicesLabel", "text-color", "white");
    setProperty("DevicesLabel", "text-align", "center");
    setProperty("DevicesLabel", "font-size", 13);
    appendItem(allUI, "DevicesLabel");
textLabel("DevicesBackground", "");
    hideElement("DevicesBackground");
    setPosition("DevicesBackground", 5, 193, 150, 90);
    setProperty("DevicesBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "DevicesBackground");
    appendItem(allUI, "DevicesBackground");
textLabel("DevicesQuestion", "How many minutes have you left devices on when it was not needed?");
    hideElement("DevicesQuestion");
    setPosition("DevicesQuestion", 5, 196, 150, 27);
    setProperty("DevicesQuestion", "font-size", 8.5);
    setProperty("DevicesQuestion", "text-align", "center");
    setProperty("DevicesQuestion", "text-color", "black");
    appendItem(allEnergy, "DevicesQuestion");
    appendItem(allUI, "DevicesQuestion");
textInput("DevicesInput", "");
    hideElement("DevicesInput");
    setPosition("DevicesInput", 5, 228, 150, 20);
    appendItem(allEnergy, "DevicesInput");
    appendItem(allUI, "DevicesInput");
button("DevicesButton", "Add Info");
    hideElement("DevicesButton");
    setPosition("DevicesButton", 5, 253, 150, 25);
    setProperty("DevicesButton", "font-size", 10);
    appendItem(allEnergy, "DevicesButton");
    appendItem(allUI, "DevicesButton");
textLabel("LightsLabel", "Lights");
    hideElement("LightsLabel");
    setPosition("LightsLabel", 165, 173, 150, 20);
    setProperty("LightsLabel", "background-color", "black");
    setProperty("LightsLabel", "text-color", "white");
    setProperty("LightsLabel", "text-align", "center");
    setProperty("LightsLabel", "font-size", 13);
    appendItem(allUI, "LightsLabel");
textLabel("LightsBackground", "");
    hideElement("LightsBackground");
    setPosition("LightsBackground", 165, 193, 150, 90);
    setProperty("LightsBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "LightsBackground");
    appendItem(allUI, "LightsBackground");
textLabel("LightsQuestion", "How many minutes have you left lights on when it was not needed?");
    hideElement("LightsQuestion");
    setPosition("LightsQuestion", 165, 196, 150, 27);
    setProperty("LightsQuestion", "font-size", 8.5);
    setProperty("LightsQuestion", "text-align", "center");
    setProperty("LightsQuestion", "text-color", "black");
    appendItem(allEnergy, "LightsQuestion");
    appendItem(allUI, "LightsQuestion");
textInput("LightsInput", "");
    hideElement("LightsInput");
    setPosition("LightsInput", 165, 228, 150, 20);
    appendItem(allEnergy, "LightsInput");
    appendItem(allUI, "LightsInput");
button("LightsButton", "Add Info");
    hideElement("LightsButton");
    setPosition("LightsButton", 165, 253, 150, 25);
    setProperty("LightsButton", "font-size", 10);
    appendItem(allEnergy, "LightsButton");
    appendItem(allUI, "LightsButton");
textLabel("EfficentAppliancesLabel", "Efficent Appliances");
    hideElement("EfficentAppliancesLabel");
    setPosition("EfficentAppliancesLabel", 5, 293, 150, 20);
    setProperty("EfficentAppliancesLabel", "background-color", "black");
    setProperty("EfficentAppliancesLabel", "text-color", "white");
    setProperty("EfficentAppliancesLabel", "text-align", "center");
    setProperty("EfficentAppliancesLabel", "font-size", 11);
    appendItem(allUI, "EfficentAppliancesLabel");
textLabel("EfficentAppliancesBackground", "");
    hideElement("EfficentAppliancesBackground");
    setPosition("EfficentAppliancesBackground", 5, 313, 150, 90);
    setProperty("EfficentAppliancesBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "EfficentAppliancesBackground");
    appendItem(allUI, "EfficentAppliancesBackground");
textLabel("EfficentAppliancesQuestion", "How many energy efficent appliances have you used?");
    hideElement("EfficentAppliancesQuestion");
    setPosition("EfficentAppliancesQuestion", 5, 316, 150, 27);
    setProperty("EfficentAppliancesQuestion", "font-size", 8.5);
    setProperty("EfficentAppliancesQuestion", "text-align", "center");
    setProperty("EfficentAppliancesQuestion", "text-color", "black");
    appendItem(allEnergy, "EfficentAppliancesQuestion");
    appendItem(allUI, "EfficentAppliancesQuestion");
textInput("EfficentAppliancesInput", "");
    hideElement("EfficentAppliancesInput");
    setPosition("EfficentAppliancesInput", 5, 348, 150, 20);
    appendItem(allEnergy, "EfficentAppliancesInput");
    appendItem(allUI, "EfficentAppliancesInput");
button("EfficentAppliancesButton", "Add Info");
    hideElement("EfficentAppliancesButton");
    setPosition("EfficentAppliancesButton", 5, 373, 150, 25);
    setProperty("EfficentAppliancesButton", "font-size", 10);
    appendItem(allEnergy, "EfficentAppliancesButton");
    appendItem(allUI, "EfficentAppliancesButton");
textLabel("RenewableEnergyLabel", "Renewable Energy");
    hideElement("RenewableEnergyLabel");
    setPosition("RenewableEnergyLabel", 165, 293, 150, 20);
    setProperty("RenewableEnergyLabel", "background-color", "black");
    setProperty("RenewableEnergyLabel", "text-color", "white");
    setProperty("RenewableEnergyLabel", "text-align", "center");
    setProperty("RenewableEnergyLabel", "font-size", 11);
    appendItem(allUI, "RenewableEnergyLabel");
textLabel("RenewableEnergyBackground", "");
    hideElement("RenewableEnergyBackground");
    setPosition("RenewableEnergyBackground", 165, 313, 150, 90);
    setProperty("RenewableEnergyBackground", "background-color", "#F2F2F2");
    appendItem(allEnergy, "RenewableEnergyBackground");
    appendItem(allUI, "RenewableEnergyBackground");
textLabel("RenewableEnergyQuestion", "How many times have you used renewable energy?");
    hideElement("RenewableEnergyQuestion");
    setPosition("RenewableEnergyQuestion", 165, 316, 150, 27);
    setProperty("RenewableEnergyQuestion", "font-size", 8.5);
    setProperty("RenewableEnergyQuestion", "text-align", "center");
    setProperty("RenewableEnergyQuestion", "text-color", "black");
    appendItem(allEnergy, "RenewableEnergyQuestion");
    appendItem(allUI, "RenewableEnergyQuestion");
textInput("RenewableEnergyInput", "");
    hideElement("RenewableEnergyInput");
    setPosition("RenewableEnergyInput", 165, 348, 150, 20);
    appendItem(allEnergy, "RenewableEnergyInput");
    appendItem(allUI, "RenewableEnergyInput");
button("RenewableEnergyButton", "Add Info");
    hideElement("RenewableEnergyButton");
    setPosition("RenewableEnergyButton", 165, 373, 150, 25);
    setProperty("RenewableEnergyButton", "font-size", 10);
    appendItem(allEnergy, "RenewableEnergyButton");
    appendItem(allUI, "RenewableEnergyButton");
button("back4", "Back");
    hideElement("back4");
    setPosition("back4", 5, 410, 310, 35);
    appendItem(allUI, "back4");


image("coolingheating", "https://th.bing.com/th/id/R.d38a6e75b975aef8459b2b70ab41a70d?rik=%2fJ5WTX6BOvRLaB&pid=ImgRaw&r=0");
    hideElement("coolingheating");
    setPosition("coolingheating", 5, 75, 150, 90);
    appendItem(allEnergy, "coolingheating");
    appendItem(allUI, "coolingheating");
image("shower", "https://tse4.mm.bing.net/th/id/OIP.C_PjIToK6OQGOyqIhURLIBHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("shower");
    setPosition("shower", 165, 75, 150, 90);
    appendItem(allEnergy, "shower");
    appendItem(allUI, "shower");
image("devices", "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f3cd.png");
    hideElement("devices");
    setPosition("devices", 5, 193, 150, 90);
    appendItem(allEnergy, "devices");
    appendItem(allUI, "devices");
image("lights", "https://images.scrolller.com/nano/lights-1j1cuy7tem-880x942.jpg");
    hideElement("lights");
    setPosition("lights", 165, 193, 150, 90);
    appendItem(allEnergy, "lights");
    appendItem(allUI, "lights");
image("efficentappliances", "https://tse1.mm.bing.net/th/id/OIP.djKsGOhN9PNERzZ2KZSLGgHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("efficentappliances");
    setPosition("efficentappliances", 5, 313, 150, 90);
    appendItem(allEnergy, "efficentappliances");
    appendItem(allUI, "efficentappliances");
image("renewableenergy", "https://www.iconarchive.com/download/i137774/microsoft/fluentui-emoji-3d/Person-RenewableEnergying-3d-Light.512.png");
    hideElement("renewableenergy");
    setPosition("renewableenergy", 165, 313, 150, 90);
    appendItem(allEnergy, "renewableenergy");
    appendItem(allUI, "renewableenergy");

function EnergyScreen(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("EnergyHeader");
    showElement("CoolingHeatingLabel");
    showElement("ShowerLabel");
    showElement("DevicesLabel");
    showElement("LightsLabel");
    showElement("EfficentAppliancesLabel");
    showElement("RenewableEnergyLabel");
    showElement("coolingheating");
    showElement("shower");
    showElement("devices");
    showElement("lights");
    showElement("efficentappliances");
    showElement("renewableenergy");
    showElement("back4");

}

onEvent("EnergyUsage", "click", function(){
  EnergyScreen();
});

onEvent("CoolingHeatingButton", "click", function(){
    setText("CoolingHeatingButton", "Added ✓");
    setProperty("CoolingHeatingButton", "background-color", "grey");
    setProperty("CoolingHeatingButton", "text-color", "black");
    pause(2000);
    setText("CoolingHeatingButton", "Add Info");
    setProperty("CoolingHeatingButton", "background-color", "orange");
    setProperty("CoolingHeatingButton", "text-color", "white");
});

onEvent("ShowerButton", "click", function(){
    setText("ShowerButton", "Added ✓");
    setProperty("ShowerButton", "background-color", "grey");
    setProperty("ShowerButton", "text-color", "black");
    pause(2000);
    setText("ShowerButton", "Add Info");
    setProperty("ShowerButton", "background-color", "orange");
    setProperty("ShowerButton", "text-color", "white");
});

onEvent("DevicesButton", "click", function(){
    setText("DevicesButton", "Added ✓");
    setProperty("DevicesButton", "background-color", "grey");
    setProperty("DevicesButton", "text-color", "black");
    pause(2000);
    setText("DevicesButton", "Add Info");
    setProperty("DevicesButton", "background-color", "orange");
    setProperty("DevicesButton", "text-color", "white");
});

onEvent("LightsButton", "click", function(){
    setText("LightsButton", "Added ✓");
    setProperty("LightsButton", "background-color", "grey");
    setProperty("LightsButton", "text-color", "black");
    pause(2000);
    setText("LightsButton", "Add Info");
    setProperty("LightsButton", "background-color", "orange");
    setProperty("LightsButton", "text-color", "white");
});

onEvent("EfficentAppliancesButton", "click", function(){
    setText("EfficentAppliancesButton", "Added ✓");
    setProperty("EfficentAppliancesButton", "background-color", "grey");
    setProperty("EfficentAppliancesButton", "text-color", "black");
    pause(2000);
    setText("EfficentAppliancesButton", "Add Info");
    setProperty("EfficentAppliancesButton", "background-color", "orange");
    setProperty("EfficentAppliancesButton", "text-color", "white");
});

onEvent("RenewableEnergyButton", "click", function(){
    setText("RenewableEnergyButton", "Added ✓");
    setProperty("RenewableEnergyButton", "background-color", "grey");
    setProperty("RenewableEnergyButton", "text-color", "black");
    pause(2000);
    setText("RenewableEnergyButton", "Add Info");
    setProperty("RenewableEnergyButton", "background-color", "orange");
    setProperty("RenewableEnergyButton", "text-color", "white");
});

function coolingheatingClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("CoolingHeatingBackground");
    showElement("CoolingHeatingQuestion");
    showElement("CoolingHeatingInput");
    showElement("CoolingHeatingButton");
    showElement("shower");
    showElement("devices");
    showElement("lights");
    showElement("efficentappliances");
    showElement("renewableenergy");
}

onEvent("coolingheating", "click", function(){
  coolingheatingClicked();
});

function showerClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("ShowerBackground");
    showElement("ShowerQuestion");
    showElement("ShowerInput");
    showElement("ShowerButton");
    showElement("coolingheating");
    showElement("devices");
    showElement("lights");
    showElement("efficentappliances");
    showElement("renewableenergy");
}

onEvent("shower", "click", function(){
  showerClicked();
});

function devicesClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("DevicesBackground");
    showElement("DevicesQuestion");
    showElement("DevicesInput");
    showElement("DevicesButton");
    showElement("coolingheating");
    showElement("shower");
    showElement("lights");
    showElement("efficentappliances");
    showElement("renewableenergy");
}

onEvent("devices", "click", function(){
  devicesClicked();
});

function lightsClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("LightsBackground");
    showElement("LightsQuestion");
    showElement("LightsInput");
    showElement("LightsButton");
    showElement("coolingheating");
    showElement("shower");
    showElement("devices");
    showElement("efficentappliances");
    showElement("renewableenergy");
}

onEvent("lights", "click", function(){
  lightsClicked();
});

function efficentappliancesClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("EfficentAppliancesBackground");
    showElement("EfficentAppliancesQuestion");
    showElement("EfficentAppliancesInput");
    showElement("EfficentAppliancesButton");
    showElement("coolingheating");
    showElement("shower");
    showElement("devices");
    showElement("lights");
    showElement("renewableenergy");
}

onEvent("efficentappliances", "click", function(){
  efficentappliancesClicked();
});

function renewableenergyClicked(){
  for (var i = 0; i < allEnergy.length; i++) {
        hideElement(allEnergy[i]);
    }
    showElement("RenewableEnergyBackground");
    showElement("RenewableEnergyQuestion");
    showElement("RenewableEnergyInput");
    showElement("RenewableEnergyButton");
    showElement("coolingheating");
    showElement("shower");
    showElement("devices");
    showElement("lights");
    showElement("efficentappliances");
}

onEvent("renewableenergy", "click", function(){
  renewableenergyClicked();
});

onEvent("back4", "click", function(){
    Options();
});



//Waste Managment
var allWaste=[];

textLabel("WasteHeader", "Waste Management");
    hideElement("WasteHeader");
    setPosition("WasteHeader", 0, 0, 320, 35);
    setProperty("WasteHeader", "background-color", "black");
    setProperty("WasteHeader", "text-color", "white");
    setProperty("WasteHeader", "text-align", "center");
    setProperty("WasteHeader", "font-size", 20);
    appendItem(allUI, "WasteHeader");
textLabel("RecycledLabel", "Recycled Items");
    hideElement("RecycledLabel");
    setPosition("RecycledLabel", 5, 55, 150, 20);
    setProperty("RecycledLabel", "background-color", "black");
    setProperty("RecycledLabel", "text-color", "white");
    setProperty("RecycledLabel", "text-align", "center");
    setProperty("RecycledLabel", "font-size", 13);
    appendItem(allUI, "RecycledLabel");
textLabel("RecycledBackground", "");
    hideElement("RecycledBackground");
    setPosition("RecycledBackground", 5, 75, 150, 90);
    setProperty("RecycledBackground", "background-color", "#F2F2F2");
    appendItem(allWaste, "RecycledBackground");
    appendItem(allUI, "RecycledBackground");
textLabel("RecycledQuestion", "How many items have you recycled?");
    hideElement("RecycledQuestion");
    setPosition("RecycledQuestion", 5, 78, 150, 27);
    setProperty("RecycledQuestion", "font-size", 10);
    setProperty("RecycledQuestion", "text-align", "center");
    setProperty("RecycledQuestion", "text-color", "black");
    appendItem(allWaste, "RecycledQuestion");
    appendItem(allUI, "RecycledQuestion");
textInput("RecycledInput", "");
    hideElement("RecycledInput");
    setPosition("RecycledInput", 5, 110, 150, 20);
    appendItem(allWaste, "RecycledInput");
    appendItem(allUI, "RecycledInput");
button("RecycledButton", "Add Info");
    hideElement("RecycledButton");
    setPosition("RecycledButton", 5, 135, 150, 25);
    setProperty("RecycledButton", "font-size", 10);
    appendItem(allWaste, "RecycledButton");
    appendItem(allUI, "RecycledButton");
textLabel("ComposteLabel", "Composted Food");
    hideElement("ComposteLabel");
    setPosition("ComposteLabel", 165, 55, 150, 20);
    setProperty("ComposteLabel", "background-color", "black");
    setProperty("ComposteLabel", "text-color", "white");
    setProperty("ComposteLabel", "text-align", "center");
    setProperty("ComposteLabel", "font-size", 13);
    appendItem(allUI, "ComposteLabel");
textLabel("ComposteBackground", "");
    hideElement("ComposteBackground");
    setPosition("ComposteBackground", 165, 75, 150, 90);
    setProperty("ComposteBackground", "background-color", "#F2F2F2");
    appendItem(allWaste, "ComposteBackground");
    appendItem(allUI, "ComposteBackground");
textLabel("ComposteQuestion", "How many foods have you composted?");
    hideElement("ComposteQuestion");
    setPosition("ComposteQuestion", 165, 78, 150, 27);
    setProperty("ComposteQuestion", "font-size", 10);
    setProperty("ComposteQuestion", "text-align", "center");
    setProperty("ComposteQuestion", "text-color", "black");
    appendItem(allWaste, "ComposteQuestion");
    appendItem(allUI, "ComposteQuestion");
textInput("ComposteInput", "");
    hideElement("ComposteInput");
    setPosition("ComposteInput", 165, 110, 150, 20);
    appendItem(allWaste, "ComposteInput");
    appendItem(allUI, "ComposteInput");
button("ComposteButton", "Add Info");
    hideElement("ComposteButton");
    setPosition("ComposteButton", 165, 135, 150, 25);
    setProperty("ComposteButton", "font-size", 10);
    appendItem(allWaste, "ComposteButton");
    appendItem(allUI, "ComposteButton");
textLabel("RepairedLabel", "Reused or Repaired");
    hideElement("RepairedLabel");
    setPosition("RepairedLabel", 5, 173, 150, 20);
    setProperty("RepairedLabel", "background-color", "black");
    setProperty("RepairedLabel", "text-color", "white");
    setProperty("RepairedLabel", "text-align", "center");
    setProperty("RepairedLabel", "font-size", 11);
    appendItem(allUI, "RepairedLabel");
textLabel("RepairedBackground", "");
    hideElement("RepairedBackground");
    setPosition("RepairedBackground", 5, 193, 150, 90);
    setProperty("RepairedBackground", "background-color", "#F2F2F2");
    appendItem(allWaste, "RepairedBackground");
    appendItem(allUI, "RepairedBackground");
textLabel("RepairedQuestion", "How many items have you reused or repaired?");
    hideElement("RepairedQuestion");
    setPosition("RepairedQuestion", 5, 196, 150, 27);
    setProperty("RepairedQuestion", "font-size", 9.5);
    setProperty("RepairedQuestion", "text-align", "center");
    setProperty("RepairedQuestion", "text-color", "black");
    appendItem(allWaste, "RepairedQuestion");
    appendItem(allUI, "RepairedQuestion");
textInput("RepairedInput", "");
    hideElement("RepairedInput");
    setPosition("RepairedInput", 5, 228, 150, 20);
    appendItem(allWaste, "RepairedInput");
    appendItem(allUI, "RepairedInput");
button("RepairedButton", "Add Info");
    hideElement("RepairedButton");
    setPosition("RepairedButton", 5, 253, 150, 25);
    setProperty("RepairedButton", "font-size", 10);
    appendItem(allWaste, "RepairedButton");
    appendItem(allUI, "RepairedButton");
textLabel("LandfillLabel", "Landfill");
    hideElement("LandfillLabel");
    setPosition("LandfillLabel", 165, 173, 150, 20);
    setProperty("LandfillLabel", "background-color", "black");
    setProperty("LandfillLabel", "text-color", "white");
    setProperty("LandfillLabel", "text-align", "center");
    setProperty("LandfillLabel", "font-size", 13);
    appendItem(allUI, "LandfillLabel");
textLabel("LandfillBackground", "");
    hideElement("LandfillBackground");
    setPosition("LandfillBackground", 165, 193, 150, 90);
    setProperty("LandfillBackground", "background-color", "#F2F2F2");
    appendItem(allWaste, "LandfillBackground");
    appendItem(allUI, "LandfillBackground");
textLabel("LandfillQuestion", "How many items created landfill trash?");
    hideElement("LandfillQuestion");
    setPosition("LandfillQuestion", 165, 196, 150, 27);
    setProperty("LandfillQuestion", "font-size", 9);
    setProperty("LandfillQuestion", "text-align", "center");
    setProperty("LandfillQuestion", "text-color", "black");
    appendItem(allWaste, "LandfillQuestion");
    appendItem(allUI, "LandfillQuestion");
textInput("LandfillInput", "");
    hideElement("LandfillInput");
    setPosition("LandfillInput", 165, 228, 150, 20);
    appendItem(allWaste, "LandfillInput");
    appendItem(allUI, "LandfillInput");
button("LandfillButton", "Add Info");
    hideElement("LandfillButton");
    setPosition("LandfillButton", 165, 253, 150, 25);
    setProperty("LandfillButton", "font-size", 10);
    appendItem(allWaste, "LandfillButton");
    appendItem(allUI, "LandfillButton");
/*textLabel("C5Label", "C5");
    hideElement("C5Label");
    setPosition("C5Label", 5, 293, 150, 20);
    setProperty("C5Label", "background-color", "black");
    setProperty("C5Label", "text-color", "white");
    setProperty("C5Label", "text-align", "center");
    setProperty("C5Label", "font-size", 13);
    appendItem(allUI, "C5Label");
textLabel("C5Background", "");
    hideElement("C5Background");
    setPosition("C5Background", 5, 313, 150, 90);
    setProperty("C5Background", "background-color", "#F2F2F2");
    appendItem(allWaste, "C5Background");
    appendItem(allUI, "C5Background");
textLabel("C5Question", "How many miles have you used a C5p?");
    hideElement("C5Question");
    setPosition("C5Question", 5, 316, 150, 27);
    setProperty("C5Question", "font-size", 10);
    setProperty("C5Question", "text-align", "center");
    setProperty("C5Question", "text-color", "black");
    appendItem(allWaste, "C5Question");
    appendItem(allUI, "C5Question");
textInput("C5Input", "");
    hideElement("C5Input");
    setPosition("C5Input", 5, 348, 150, 20);
    appendItem(allWaste, "C5Input");
    appendItem(allUI, "C5Input");
button("C5Button", "Add Info");
    hideElement("C5Button");
    setPosition("C5Button", 5, 373, 150, 25);
    setProperty("C5Button", "font-size", 10);
    appendItem(allWaste, "C5Button");
    appendItem(allUI, "C5Button");
textLabel("C6Label", "C6ing");
    hideElement("C6Label");
    setPosition("C6Label", 165, 293, 150, 20);
    setProperty("C6Label", "background-color", "black");
    setProperty("C6Label", "text-color", "white");
    setProperty("C6Label", "text-align", "center");
    setProperty("C6Label", "font-size", 13);
    appendItem(allUI, "C6Label");
textLabel("C6Background", "");
    hideElement("C6Background");
    setPosition("C6Background", 165, 313, 150, 90);
    setProperty("C6Background", "background-color", "#F2F2F2");
    appendItem(allWaste, "C6Background");
    appendItem(allUI, "C6Background");
textLabel("C6Question", "How many miles have you C6ped?");
    hideElement("C6Question");
    setPosition("C6Question", 165, 316, 150, 27);
    setProperty("C6Question", "font-size", 10);
    setProperty("C6Question", "text-align", "center");
    setProperty("C6Question", "text-color", "black");
    appendItem(allWaste, "C6Question");
    appendItem(allUI, "C6Question");
textInput("C6Input", "");
    hideElement("C6Input");
    setPosition("C6Input", 165, 348, 150, 20);
    appendItem(allWaste, "C6Input");
    appendItem(allUI, "C6Input");
button("C6Button", "Add Info");
    hideElement("C6Button");
    setPosition("C6Button", 165, 373, 150, 25);
    setProperty("C6Button", "font-size", 10);
    appendItem(allWaste, "C6Button");
    appendItem(allUI, "C6Button");*/
button("back5", "Back");
    hideElement("back5");
    setPosition("back5", 5, 410, 310, 35);
    appendItem(allUI, "back5");


image("recycled", "https://th.bing.com/th/id/R.d38a6e75b975aef8459b2b70ab41a70d?rik=%2fJ5WTX6BOvRLaC&pid=ImgRaw&r=0");
    hideElement("recycled");
    setPosition("recycled", 5, 75, 150, 90);
    appendItem(allWaste, "recycled");
    appendItem(allUI, "recycled");
image("composte", "https://tse4.mm.bing.net/th/id/OIP.C_PjIToK6OQGOyqIhURLICHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("composte");
    setPosition("composte", 165, 75, 150, 90);
    appendItem(allWaste, "composte");
    appendItem(allUI, "composte");
image("repaired", "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f3cd.png");
    hideElement("repaired");
    setPosition("repaired", 5, 193, 150, 90);
    appendItem(allWaste, "repaired");
    appendItem(allUI, "repaired");
image("landfill", "https://images.scrolller.com/nano/landfill-1j1cuy7tem-880x942.jpg");
    hideElement("landfill");
    setPosition("landfill", 165, 193, 150, 90);
    appendItem(allWaste, "landfill");
    appendItem(allUI, "landfill");
/*image("C5p", "https://tse1.mm.bing.net/th/id/OIP.djKsGOhN9PNERzZ2KZSLGgHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
    hideElement("C5p");
    setPosition("C5p", 5, 313, 150, 90);
    appendItem(allWaste, "C5p");
    appendItem(allUI, "C5p");
image("C6p", "https://www.iconarchive.com/download/i137774/microsoft/fluentui-emoji-3d/Person-C6ing-3d-Light.512.png");
    hideElement("C6p");
    setPosition("C6p", 165, 313, 150, 90);
    appendItem(allWaste, "C6p");
    appendItem(allUI, "C6p");*/

function WasteScreen(){
  for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("WasteHeader");
    showElement("RecycledLabel");
    showElement("ComposteLabel");
    showElement("RepairedLabel");
    showElement("LandfillLabel");
    showElement("recycled");
    showElement("composte");
    showElement("repaired");
    showElement("landfill");
    showElement("back5");

}

onEvent("WasteManagement", "click", function(){
  WasteScreen();
});

onEvent("RecycledButton", "click", function(){
    setText("RecycledButton", "Added ✓");
    setProperty("RecycledButton", "background-color", "grey");
    setProperty("RecycledButton", "text-color", "black");
    pause(2000);
    setText("RecycledButton", "Add Info");
    setProperty("RecycledButton", "background-color", "orange");
    setProperty("RecycledButton", "text-color", "white");
});

onEvent("ComposteButton", "click", function(){
    setText("ComposteButton", "Added ✓");
    setProperty("ComposteButton", "background-color", "grey");
    setProperty("ComposteButton", "text-color", "black");
    pause(2000);
    setText("ComposteButton", "Add Info");
    setProperty("ComposteButton", "background-color", "orange");
    setProperty("ComposteButton", "text-color", "white");
});

onEvent("RepairedButton", "click", function(){
    setText("RepairedButton", "Added ✓");
    setProperty("RepairedButton", "background-color", "grey");
    setProperty("RepairedButton", "text-color", "black");
    pause(2000);
    setText("RepairedButton", "Add Info");
    setProperty("RepairedButton", "background-color", "orange");
    setProperty("RepairedButton", "text-color", "white");
});

onEvent("LandfillButton", "click", function(){
    setText("LandfillButton", "Added ✓");
    setProperty("LandfillButton", "background-color", "grey");
    setProperty("LandfillButton", "text-color", "black");
    pause(2000);
    setText("LandfillButton", "Add Info");
    setProperty("LandfillButton", "background-color", "orange");
    setProperty("LandfillButton", "text-color", "white");
});

function recycledClicked(){
  for (var i = 0; i < allWaste.length; i++) {
        hideElement(allWaste[i]);
    }
    showElement("RecycledBackground");
    showElement("RecycledQuestion");
    showElement("RecycledInput");
    showElement("RecycledButton");
    showElement("composte");
    showElement("repaired");
    showElement("landfill");
}

onEvent("recycled", "click", function(){
  recycledClicked();
});

function composteClicked(){
  for (var i = 0; i < allWaste.length; i++) {
        hideElement(allWaste[i]);
    }
    showElement("ComposteBackground");
    showElement("ComposteQuestion");
    showElement("ComposteInput");
    showElement("ComposteButton");
    showElement("recycled");
    showElement("repaired");
    showElement("landfill");
}

onEvent("composte", "click", function(){
  composteClicked();
});

function repairedClicked(){
  for (var i = 0; i < allWaste.length; i++) {
        hideElement(allWaste[i]);
    }
    showElement("RepairedBackground");
    showElement("RepairedQuestion");
    showElement("RepairedInput");
    showElement("RepairedButton");
    showElement("recycled");
    showElement("composte");
    showElement("landfill");
}

onEvent("repaired", "click", function(){
  repairedClicked();
});

function landfillClicked(){
  for (var i = 0; i < allWaste.length; i++) {
        hideElement(allWaste[i]);
    }
    showElement("LandfillBackground");
    showElement("LandfillQuestion");
    showElement("LandfillInput");
    showElement("LandfillButton");
    showElement("recycled");
    showElement("composte");
    showElement("repaired");
}

onEvent("landfill", "click", function(){
  landfillClicked();
});

onEvent("back5", "click", function(){
    Options();
});



//Carbon Footprint
textLabel("CarbonFootprintHeader", "My Carbon Footprint");
    hideElement("CarbonFootprintHeader");
    setPosition("CarbonFootprintHeader", 0, 0, 320, 45);
    setProperty("CarbonFootprintHeader", "background-color", "black");
    setProperty("CarbonFootprintHeader", "text-color", "white");
    setProperty("CarbonFootprintHeader", "text-align", "center");
    setProperty("CarbonFootprintHeader", "font-size", 26);
    appendItem(allUI, "CarbonFootprintHeader");
image("earth", "https://images.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg?cs=srgb&dl=astronomy-discovery-earth-2422.jpg&fm=jpg");
    hideElement("earth");
    setPosition("earth", 10, 55, 290, 230);
    appendItem(allUI, "earth");
textLabel("Pollution", "You Caused 300 Pounds of Pollution!");
    hideElement("Pollution");
    setPosition("Pollution", 5, 295, 310, 70);
    setProperty("Pollution", "background-color", "black");
    setProperty("Pollution", "text-color", "white");
    setProperty("Pollution", "font-size", "25");
    setProperty("Pollution", "text-align", "center");
    appendItem(allUI, "Pollution");
button("CarbonFootprintBack", "Back");
    hideElement("CarbonFootprintBack");
    setPosition("CarbonFootprintBack", 5, 410, 310, 35);
    appendItem(allUI, "CarbonFootprintBack");

function CarbonFootprintPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("CarbonFootprintHeader");
    showElement("earth");
    showElement("Pollution");
    showElement("CarbonFootprintBack");
}

onEvent("CarbonFootprintButton", "click", function(){
    CarbonFootprintPage();
});

onEvent("CarbonFootprintBack", "click", function(){
    MainPage();
});

//AI
textLabel("AIHeader", "Meet Stratos!");
    hideElement("AIHeader");
    setPosition("AIHeader", 0, 0, 320, 45);
    setProperty("AIHeader", "background-color", "black");
    setProperty("AIHeader", "text-color", "white");
    setProperty("AIHeader", "text-align", "center");
    setProperty("AIHeader", "font-size", 32);
    appendItem(allUI, "AIHeader");
textLabel("OutputLabel", "");
    hideElement("OutputLabel");
    setPosition("OutputLabel", 10, 53, 300, 203);
    setProperty("OutputLabel", "background-color", "blue");
    setProperty("OutputLabel", "font-size", 20);
    setProperty("OutputLabel", "text-color", "black");
    setProperty("OutputLabel", "border-radius", 16);
    setProperty("OutputLabel", "background-color", "white");
    appendItem(allUI, "OutputLabel");
textLabel("FrequentQuestions", "Frequently Asked Questions");
    hideElement("FrequentQuestions");
    setPosition("FrequentQuestions", 10, 275, 300, 20);
    setProperty("FrequentQuestions", "text-align", "center");
    appendItem(allUI, "FrequentQuestions");
dropdown("QuestionsDropdown", "Select An Option", "How much population is caused per day?", "What is the most major cause of pollution?", "How does pollution impact our environment?");
    hideElement("QuestionsDropdown");
    setPosition("QuestionsDropdown", 10, 300, 300, 40);
    appendItem(allUI, "QuestionsDropdown");
button("Ask", "Ask Stratos");
    hideElement("Ask");
    setPosition("Ask", 10, 345, 300, 40);
    appendItem(allUI, "Ask");
var Questions = ["How much population is caused per day?", "What is the most major cause of pollution?", "How does pollution impact our environment?"];
var Answers = ["300 pounds", "Cars", "Kills sea turtles"];
var index;
function AI(){
  for(var i = 0; i<= Questions.length-1; i++) {
    if (Questions[i] == getText("QuestionsDropdown")){
      index = Questions.indexOf(getText("QuestionsDropdown"));
      setText("OutputLabel", Answers[index]);
      
    }
  }
}

onEvent("Ask", "click", function( ) {
  AI();
});

function ChatBot(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("AIHeader");
    showElement("OutputLabel");
    showElement("FrequentQuestions");
    showElement("SettingsHeader");
    showElement("QuestionsDropdown");
    showElement("Ask");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}

//Quiz
var Counter = 0;

image("QuizImage", "https://th.bing.com/th/id/OIP.whAFhy0MbAgtkccchniT6gHaHa?&dpr=1.3o=7&rm=3&rs=1&pid=ImgDetMain&o=7&rm=3");
  hideElement("QuizImage");
  setPosition("QuizImage", 74, 33, 167, 122);
  setProperty("QuizImage", "border-radius", 80);
  appendItem(allUI, "QuizImage");
textLabel("QuizHeader", "Test Your Knowledge!");
    hideElement("QuizHeader");
    setPosition("QuizHeader", 10, 185, 300, 90);
    setProperty("QuizHeader", "font-size", 22);
    setProperty("QuizHeader", "text-color", "black");
    setProperty("QuizHeader", "text-align", "center");
    appendItem(allUI, "QuizHeader");
textLabel("QuizSubHeader", "5 quick questions to test what you know about climate change");
    hideElement("QuizSubHeader");
    setPosition("QuizSubHeader", 20, 230, 280, 90);
    setProperty("QuizSubHeader", "font-size", 14);
    setProperty("QuizSubHeader", "text-color", "#5a5a5a");
    setProperty("QuizSubHeader", "text-align", "center");
    appendItem(allUI, "QuizSubHeader");
button("QuizStart", "Start Quiz");
    hideElement("QuizStart");
    setPosition("QuizStart", 15, 311, 290, 40);
    setProperty("QuizStart", "font-size", 15);
    setProperty("QuizStart", "text-align", "center");
    setProperty("QuizStart", "background-color", "green");
    appendItem(allUI, "QuizStart");


//When Quiz is clicked
function QuizMain(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("QuizImage");
    showElement("QuizHeader");
    showElement("QuizSubHeader");
    showElement("QuizStart");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}

onEvent("QuizStart", "click", function( ) {
  Counter = 0;
  Question1();
});


//QuizQ1
textLabel("Q1Header", "What is the main greenhouse gas responsible for climate change?");
    hideElement("Q1Header");
    setPosition("Q1Header", 0, 0, 320, 80);
    setProperty("Q1Header", "background-color", "black");
    setProperty("Q1Header", "text-color", "white");
    setProperty("Q1Header", "text-align", "center");
    setProperty("Q1Header", "font-size", 18.5);
    appendItem(allUI, "Q1Header");
button("Q1A", "A. Carbon Dioxide");
    hideElement("Q1A");
    setPosition("Q1A", 5, 104, 310, 40);
    setProperty("Q1A", "font-size", 15);
    setProperty("Q1A", "text-align", "center");
    appendItem(allUI, "Q1A");
button("Q1B", "B. Oxygen");
    hideElement("Q1B");
    setPosition("Q1B", 5, 164, 310, 40);
    setProperty("Q1B", "font-size", 15);
    setProperty("Q1B", "text-align", "center");
    appendItem(allUI, "Q1B");
button("Q1C", "C. Nitrogen");
    hideElement("Q1C");
    setPosition("Q1C", 5, 224, 310, 40);
    setProperty("Q1C", "font-size", 15);
    setProperty("Q1C", "text-align", "center");
    appendItem(allUI, "Q1C");
button("Q1D", "D. Helium");
    hideElement("Q1D");
    setPosition("Q1D", 5, 284, 310, 40);
    setProperty("Q1D", "font-size", 15);
    setProperty("Q1D", "text-align", "center");
    appendItem(allUI, "Q1D");

onEvent("Q1A", "click", function( ) {
  Question2();
  Counter++;
});
onEvent("Q1B", "click", function( ) {
  Question2();
});
onEvent("Q1C", "click", function( ) {
  Question2();
});
onEvent("Q1D", "click", function( ) {
  Question2();
});

//When Begin is clicked
function Question1(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q1Header");
    showElement("Q1A");
    showElement("Q1B");
    showElement("Q1C");
    showElement("Q1D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


//QuizQ2
textLabel("Q2Header", "Which human activity is the largest source of greenhouse gas emissions?");
    hideElement("Q2Header");
    setPosition("Q2Header", 0, 0, 320, 80);
    setProperty("Q2Header", "background-color", "black");
    setProperty("Q2Header", "text-color", "white");
    setProperty("Q2Header", "text-align", "center");
    setProperty("Q2Header", "font-size", 18.5);
    appendItem(allUI, "Q2Header");
button("Q2A", "A. Farming");
    hideElement("Q2A");
    setPosition("Q2A", 5, 104, 310, 40);
    setProperty("Q2A", "font-size", 15);
    setProperty("Q2A", "text-align", "center");
    appendItem(allUI, "Q2A");
button("Q2B", "B. Burning fossil fuels for energy");
    hideElement("Q2B");
    setPosition("Q2B", 5, 164, 310, 40);
    setProperty("Q2B", "font-size", 15);
    setProperty("Q2B", "text-align", "center");
    appendItem(allUI, "Q2B");
button("Q2C", "C. Transportation");
    hideElement("Q2C");
    setPosition("Q2C", 5, 224, 310, 40);
    setProperty("Q2C", "font-size", 15);
    setProperty("Q2C", "text-align", "center");
    appendItem(allUI, "Q2C");
button("Q2D", "D. Recycling");
    hideElement("Q2D");
    setPosition("Q2D", 5, 284, 310, 40);
    setProperty("Q2D", "font-size", 15);
    setProperty("Q2D", "text-align", "center");
    appendItem(allUI, "Q2D");
    
onEvent("Q2A", "click", function( ) {
  Question3();
});
onEvent("Q2B", "click", function( ) {
  Question3();
  Counter++;
});
onEvent("Q2C", "click", function( ) {
  Question3();
});
onEvent("Q2D", "click", function( ) {
  Question3();
});

//When Q1A || Q1B || Q1C || Q1D is clicked
function Question2(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q2Header");
    showElement("Q2A");
    showElement("Q2B");
    showElement("Q2C");
    showElement("Q2D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


//QuizQ3
textLabel("Q3Header", "What effect does melting polar ice have on sea levels?");
    hideElement("Q3Header");
    setPosition("Q3Header", 0, 0, 320, 80);
    setProperty("Q3Header", "background-color", "black");
    setProperty("Q3Header", "text-color", "white");
    setProperty("Q3Header", "text-align", "center");
    setProperty("Q3Header", "font-size", 18.5);
    appendItem(allUI, "Q3Header");
button("Q3A", "A. Sea levels stay the same");
    hideElement("Q3A");
    setPosition("Q3A", 5, 104, 310, 40);
    setProperty("Q3A", "font-size", 15);
    setProperty("Q3A", "text-align", "center");
    appendItem(allUI, "Q3A");
button("Q3B", "B. Sea levels go down");
    hideElement("Q3B");
    setPosition("Q3B", 5, 164, 310, 40);
    setProperty("Q3B", "font-size", 15);
    setProperty("Q3B", "text-align", "center");
    appendItem(allUI, "Q3B");
button("Q3C", "C. It has no effect");
    hideElement("Q3C");
    setPosition("Q3C", 5, 224, 310, 40);
    setProperty("Q3C", "font-size", 15);
    setProperty("Q3C", "text-align", "center");
    appendItem(allUI, "Q3C");
button("Q3D", "D. Sea levels go up");
    hideElement("Q3D");
    setPosition("Q3D", 5, 284, 310, 40);
    setProperty("Q3D", "font-size", 15);
    setProperty("Q3D", "text-align", "center");
    appendItem(allUI, "Q3D");

onEvent("Q3A", "click", function( ) {
  Question4();
});
onEvent("Q3B", "click", function( ) {
  Question4();
});
onEvent("Q3C", "click", function( ) {
  Question4();
});
onEvent("Q3D", "click", function( ) {
  Question4();
  Counter++;
});

//When Q2A || Q2B || Q2C || Q2D is clicked
function Question3(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q3Header");
    showElement("Q3A");
    showElement("Q3B");
    showElement("Q3C");
    showElement("Q3D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


//QuizQ4
textLabel("Q4Header", "Which renewable energy source helps reduce climate change the most?");
    hideElement("Q4Header");
    setPosition("Q4Header", 0, 0, 320, 80);
    setProperty("Q4Header", "background-color", "black");
    setProperty("Q4Header", "text-color", "white");
    setProperty("Q4Header", "text-align", "center");
    setProperty("Q4Header", "font-size", 18.5);
    appendItem(allUI, "Q4Header");
button("Q4A", "A. Solar and wind power");
    hideElement("Q4A");
    setPosition("Q4A", 5, 104, 310, 40);
    setProperty("Q4A", "font-size", 15);
    setProperty("Q4A", "text-align", "center");
    appendItem(allUI, "Q4A");
button("Q4B", "B. Coal");
    hideElement("Q4B");
    setPosition("Q4B", 5, 164, 310, 40);
    setProperty("Q4B", "font-size", 15);
    setProperty("Q4B", "text-align", "center");
    appendItem(allUI, "Q4B");
button("Q4C", "C. Oil");
    hideElement("Q4C");
    setPosition("Q4C", 5, 224, 310, 40);
    setProperty("Q4C", "font-size", 15);
    setProperty("Q4C", "text-align", "center");
    appendItem(allUI, "Q4C");
button("Q4D", "D. Natural gas");
    hideElement("Q4D");
    setPosition("Q4D", 5, 284, 310, 40);
    setProperty("Q4D", "font-size", 15);
    setProperty("Q4D", "text-align", "center");
    appendItem(allUI, "Q4D");

onEvent("Q4A", "click", function( ) {
  Question5();
  Counter++;
});
onEvent("Q4B", "click", function( ) {
  Question5();
});
onEvent("Q4C", "click", function( ) {
  Question5();
});
onEvent("Q4D", "click", function( ) {
  Question5();
});

//When Q3A || Q3B || Q3C || Q3D is clicked
function Question4(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q4Header");
    showElement("Q4A");
    showElement("Q4B");
    showElement("Q4C");
    showElement("Q4D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


//QuizQ5
textLabel("Q5Header", "What can individuals do to help fight climate change?");
    hideElement("Q5Header");
    setPosition("Q5Header", 0, 0, 320, 80);
    setProperty("Q5Header", "background-color", "black");
    setProperty("Q5Header", "text-color", "white");
    setProperty("Q5Header", "text-align", "center");
    setProperty("Q5Header", "font-size", 18.5);
    appendItem(allUI, "Q5Header");
button("Q5A", "A. Use more plastic bags");
    hideElement("Q5A");
    setPosition("Q5A", 5, 104, 310, 40);
    setProperty("Q5A", "font-size", 15);
    setProperty("Q5A", "text-align", "center");
    appendItem(allUI, "Q5A");
button("Q5B", "B. Waste electricity");
    hideElement("Q5B");
    setPosition("Q5B", 5, 164, 310, 40);
    setProperty("Q5B", "font-size", 15);
    setProperty("Q5B", "text-align", "center");
    appendItem(allUI, "Q5B");
button("Q5C", "C. Walk or Bike");
    hideElement("Q5C");
    setPosition("Q5C", 5, 224, 310, 40);
    setProperty("Q5C", "font-size", 15);
    setProperty("Q5C", "text-align", "center");
    appendItem(allUI, "Q5C");
button("Q5D", "D. Leave lights on");
    hideElement("Q5D");
    setPosition("Q5D", 5, 284, 310, 40);
    setProperty("Q5D", "font-size", 15);
    setProperty("Q5D", "text-align", "center");
    appendItem(allUI, "Q5D");

onEvent("Q5A", "click", function( ) {
  QuizDone();
});
onEvent("Q5B", "click", function( ) {
  QuizDone();
});
onEvent("Q5C", "click", function( ) {
  Counter++;
  QuizDone();
});
onEvent("Q5D", "click", function( ) {
  QuizDone();
});

//When Q4A || Q4B || Q4C || Q4D is clicked
function Question5(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q5Header");
    showElement("Q5A");
    showElement("Q5B");
    showElement("Q5C");
    showElement("Q5D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


//QuizDone
textLabel("QuizDoneHeader", "Great Job!");
    hideElement("QuizDoneHeader");
    setPosition("QuizDoneHeader", 10, 40, 300, 65);
    setProperty("QuizDoneHeader", "font-size", 32);
    setProperty("QuizDoneHeader", "text-color", "black");
    setProperty("QuizDoneHeader", "text-align", "center");
    appendItem(allUI, "QuizDoneHeader");
textLabel("QuizCorrect", Counter + "out of 5 Correct");
    hideElement("QuizCorrect");
    setPosition("QuizCorrect", 10, 100, 300, 35);
    setProperty("QuizCorrect", "font-size", 22);
    setProperty("QuizCorrect", "text-align", "center");
    appendItem(allUI, "QuizCorrect");
//image("Stars", "https://th.bing.com/th/id/OIP.dDMikLymKDVonKUic_6t1wHaJ2?w=153&h=192&c=7&r=0&o=5&pid=1.7");
button("QuizAgain", "Try Again?");
    hideElement("QuizAgain");
    setPosition("QuizAgain", 20, 280, 280, 40);
    setProperty("QuizAgain", "font-size", 15);
    setProperty("QuizAgain", "text-align", "center");
    setProperty("QuizAgain", "background-color", "blue");
    appendItem(allUI, "QuizAgain");

onEvent("QuizAgain", "click", function( ) {
  QuizMain();
  Counter = 0;
});

//When Q5A || Q5B || Q5C || Q5D is clicked
function QuizDone(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("QuizDoneHeader");
    setText("QuizCorrect", "You got " + Counter + " out of 5 correct!");
    showElement("QuizCorrect");
    showElement("QuizAgain");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}


/*
//Add Tasks
textLabel("Task1", "Ride your bike to work instead of driving your car");
  hideElement("Task1");
  setPosition("Task1", 0, 85, 250, 40);
  setProperty("Task1", "background-color", "white");
  setProperty("Task1", "text-color", "black");
  appendItem(allUI, "Task1");
button("Done1", "Done");
  hideElement("Done1");
  setPosition("Done1", 250, 85, 70, 40);
  setProperty("Done1", "background-color", "#46e034");
  setProperty("Done1", "text-color", "white");
  appendItem(allUI, "Done1");
textLabel("Task2", "Don't Smoke");
  hideElement("Task2");
  setPosition("Task2", 0, 130, 250, 40);
  setProperty("Task2", "background-color", "white");
  setProperty("Task2", "text-color", "black");
  appendItem(allUI, "Task2");
button("Done2", "Done");
  hideElement("Done2");
  setPosition("Done2", 250, 130, 70, 40);
  setProperty("Done2", "background-color", "#46e034");
  setProperty("Done2", "text-color", "white");
  appendItem(allUI, "Done2");
textLabel("Task3", "Take a walk");
  hideElement("Task3");
  setPosition("Task3", 0, 175, 250, 40);
  setProperty("Task3", "background-color", "white");
  setProperty("Task3", "text-color", "black");
  appendItem(allUI, "Task3");
button("Done3", "Done");
  hideElement("Done3");
  setPosition("Done3", 250, 175, 70, 40);
  setProperty("Done3", "background-color", "#46e034");
  setProperty("Done3", "text-color", "white");
  appendItem(allUI, "Done3");
textLabel("Task4", "Take a walk");
  hideElement("Task4");
  setPosition("Task4", 0, 220, 250, 40);
  setProperty("Task4", "background-color", "white");
  setProperty("Task4", "text-color", "black");
  appendItem(allUI, "Task4");
button("Done4", "Done");
  hideElement("Done4");
  setPosition("Done4", 250, 220, 70, 40);
  setProperty("Done4", "background-color", "#46e034");
  setProperty("Done4", "text-color", "white");
  appendItem(allUI, "Done4");
textLabel("Task5", "Take a walk");
  hideElement("Task5");
  setPosition("Task5", 0, 265, 250, 40);
  setProperty("Task5", "background-color", "white");
  setProperty("Task5", "text-color", "black");
  appendItem(allUI, "Task5");
button("Done5", "Done");
  hideElement("Done5");
  setPosition("Done5", 250, 265, 70, 40);
  setProperty("Done5", "background-color", "#46e034");
  setProperty("Done5", "text-color", "white");
  appendItem(allUI, "Done5");
textLabel("Task6", "Take a walk");
  hideElement("Task6");
  setPosition("Task6", 0, 310, 250, 40);
  setProperty("Task6", "background-color", "white");
  setProperty("Task6", "text-color", "black");
  appendItem(allUI, "Task6");
button("Done6", "Done");
  hideElement("Done6");
  setPosition("Done6", 250, 310, 70, 40);
  setProperty("Done6", "background-color", "#46e034");
  setProperty("Done6", "text-color", "white");
  appendItem(allUI, "Done6");
textLabel("Task7", "Take a walk");
  hideElement("Task7");
  setPosition("Task7", 0, 355, 250, 40);
  setProperty("Task7", "background-color", "white");
  setProperty("Task7", "text-color", "black");
  appendItem(allUI, "Task7");
button("Done7", "Done");
  hideElement("Done7");
  setPosition("Done7", 250, 355, 70, 40);
  setProperty("Done7", "background-color", "#46e034");
  setProperty("Done7", "text-color", "white");
  appendItem(allUI, "Done7");
textLabel("Task8", "Take a walk");
  hideElement("Task8");
  setPosition("Task8", 0, 400, 250, 40);
  setProperty("Task8", "background-color", "white");
  setProperty("Task8", "text-color", "black");
  appendItem(allUI, "Task8");
button("Done8", "Done");
  hideElement("Done8");
  setPosition("Done8", 250, 400, 70, 40);
  setProperty("Done8", "background-color", "#46e034");
  setProperty("Done8", "text-color", "white");
  appendItem(allUI, "Done8");
textLabel("Task9", "Take a walk");
  hideElement("Task9");
  setPosition("Task9", 0, 445, 250, 40);
  setProperty("Task9", "background-color", "white");
  setProperty("Task9", "text-color", "black");
  appendItem(allUI, "Task9");
button("Done9", "Done");
  hideElement("Done9");
  setPosition("Done9", 250, 445, 70, 40);
  setProperty("Done9", "background-color", "#46e034");
  setProperty("Done9", "text-color", "white");
  appendItem(allUI, "Done9");
textLabel("Task10", "Take a walk");
  hideElement("Task10");
  setPosition("Task10", 0, 490, 250, 40);
  setProperty("Task10", "background-color", "white");
  setProperty("Task10", "text-color", "black");
  appendItem(allUI, "Task10");
button("Done10", "Done");
  hideElement("Done10");
  setPosition("Done10", 250, 490, 70, 40);
  setProperty("Done10", "background-color", "#46e034");
  setProperty("Done10", "text-color", "white");
  appendItem(allUI, "Done10");
textLabel("Task11", "Take a walk");
  hideElement("Task11");
  setPosition("Task11", 0, 535, 250, 40);
  setProperty("Task11", "background-color", "white");
  setProperty("Task11", "text-color", "black");
  appendItem(allUI, "Task11");
button("Done11", "Done");
  hideElement("Done11");
  setPosition("Done11", 250, 535, 70, 40);
  setProperty("Done11", "background-color", "#46e034");
  setProperty("Done11", "text-color", "white");
  appendItem(allUI, "Done11");
textLabel("Task12", "Take a walk");
  hideElement("Task12");
  setPosition("Task12", 0, 580, 250, 40);
  setProperty("Task12", "background-color", "white");
  setProperty("Task12", "text-color", "black");
  appendItem(allUI, "Task12");
button("Done12", "Done");
  hideElement("Done12");
  setPosition("Done12", 250, 580, 70, 40);
  setProperty("Done12", "background-color", "#46e034");
  setProperty("Done12", "text-color", "white");
  appendItem(allUI, "Done12");
onEvent("PlusSign", "click", function(){
  AddTasks();
});
button("btnUp", "↑");
  hideElement("btnUp");
  setPosition("btnUp", 250, 340, 40, 40);
  appendItem(allUI, "btnUp");
button("btnDown", "↓");
  hideElement("btnDown");
  setPosition("btnDown", 250, 390, 40, 40);
  appendItem(allUI, "btnDown");

onEvent("Done1", "click", function(){
  setText("Done1", "Complete");
  setProperty("Done1", "font-size", "10");
  setProperty("Done1", "text-align", "left");
  setProperty("Done1", "background-color", "grey");
  setProperty("Done1", "text-color", "black");
});
onEvent("Done2", "click", function(){
  setText("Done2", "Complete");
  setProperty("Done2", "font-size", "10");
  setProperty("Done2", "text-align", "left");
  setProperty("Done2", "background-color", "grey");
  setProperty("Done2", "text-color", "black");
});
onEvent("Done3", "click", function(){
  setText("Done3", "Complete");
  setProperty("Done3", "font-size", "10");
  setProperty("Done3", "text-align", "left");
  setProperty("Done3", "background-color", "grey");
  setProperty("Done3", "text-color", "black");
});

function AddTasks(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("SearchInput");
    showElement("SearchButton");
    showElement("Reset");
    showElement("btnUp");
    showElement("btnDown");
    hideElement("NoResults");
    showElement("Task1");
    showElement("Done1");
    showElement("Task2");
    showElement("Done2");
    showElement("Task3");
    showElement("Done3");
    showElement("Task4");
    showElement("Done4");
    showElement("Task5");
    showElement("Done5");
    showElement("Task6");
    showElement("Done6");
    showElement("Done7");
    showElement("Task7");
    showElement("Done7");
    showElement("Task8");
    showElement("Done8");
    showElement("Task9");
    showElement("Done9");
    showElement("Task10");
    showElement("Done10");
    showElement("Task11");
    showElement("Done11");
    showElement("Task12");
    showElement("Done12");
}

//Scrolling Effect
var group = ["Task1", "Done1", "Task2", "Done2", "Task3", "Done3", "Task4", "Done4", "Task5", "Done5", "Task6", "Done6", "Task7", "Done7", "Task8", "Done8", "Task9", "Done9", "Task10", "Done10", "Task11", "Done11", "Task12", "Done12"];
var stepValue = 30;

onEvent("btnUp", "click", function( ) {
  var dir = 1*stepValue;
  scrollGroup(group,dir);
});
onEvent("btnDown", "click", function( ) {
  var dir = -1*stepValue;
  scrollGroup(group,dir);
});

function scrollGroup(group, dir){
  for (var i = 0; i < group.length; i++) {
    setPosition(group[i],getXPosition(group[i]),getYPosition(group[i]) + dir);
  }
}
// getText("Task1"), getText("Task2"), getText("Task3"), getText("Task4"), getText("Task5"), getText("Task6"), getText("Task7"), getText("Task8"), getText("Task9"), getText("Task10"), getText("Task11"), getText("Task12")
//Search Bar
var items = [getText("Task1"), getText("Task2"), getText("Task3"), getText("Task4"), getText("Task5"), getText("Task6"), getText("Task7"), getText("Task8"), getText("Task9"), getText("Task10"), getText("Task11"), getText("Task12")];
var Container =["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7", "Task8", "Task9", "Task10", "Task11", "Task12"];
var Done = ["Done1", "Done2", "Done3", "Done4", "Done5", "Done6", "Done7", "Done8", "Done9", "Done10", "Done11", "Done12"];
textInput("SearchInput", "");
  hideElement("SearchInput");
  setPosition("SearchInput", 17, 12, 200, 25);
button("SearchButton", "Search");
  hideElement("SearchButton");
  setPosition("SearchButton", 230, 10, 70, 28);
  setProperty("SearchButton", "font-size", 12);
textLabel("NoResults", "No Results Found");
  hideElement("NoResults");
  setPosition("NoResults", 40, 110, 250, 25);
  setProperty("NoResults", "background-color", "grey");
  setProperty("NoResults", "text-color", "black");
  setProperty("NoResults", "text-align", "center");
  setProperty("NoResults", "font-size", 15);
button("Reset", "Reset Search");
  hideElement("Reset");
  setPosition("Reset", 105, 45);
  setProperty("Reset", "font-size", 12);
function ZeroResults(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("SearchInput");
    showElement("SearchButton");
    showElement("Reset");
    showElement("NoResults");
}
onEvent("SearchButton", "click", function() {
  var query = getText("SearchInput").toLowerCase(); // Get user input and convert to lowercase
  var results = items.filter(function(item) {
    return item.toLowerCase().includes(query); // Check if the query matches any item
  });
  
  if (results.length > 0) {
    //console.log("Results: " + results);
    for (var i = 0; i < items.length; i++){
      if (items[i] == results)
        var index = items.indexOf(results);
        showElement(Container[index]);
        showElement(Done[index]);
    }
  } else {
    ZeroResults();
  }
});
onEvent("Reset", "click", function(){
  AddTasks();
});
/*
//Dashboard NEW
textLabel("DButton", "Home");
    setPosition("DButton", 0, 400, 65, 50);
    setProperty("DButton", "font-size", 11);
    setProperty("DButton", "text-color", "white");
    setProperty("DButton", "background-color", "black");
    setProperty("DButton", "text-align", "center");
image("image3", "https://tse4.mm.bing.net/th/id/OIP.GcRlpNTMNf06GOD3l3pILgHaHa?pid=Api&P=0&h=220");
  setPosition("image3", 15, 420, 35, 25);
textLabel("Tasks", "Tasks");
    setPosition("Tasks", 65, 400, 65, 50);
    setProperty("Tasks", "font-size", 11);
    setProperty("Tasks", "text-color", "black");
    setProperty("Tasks", "background-color", "white");
    setProperty("DButton", "text-align", "center");
textLabel("Complete", "Complete");
    setPosition("Complete", 130, 400, 80, 50);
    setProperty("Complete", "font-size", 10);
    setProperty("Complete", "text-color", "black");
    setProperty("Complete", "background-color", "white");
    setProperty("DButton", "text-align", "center");
textLabel("Quests", "Quests");
    setPosition("Quests", 210, 400, 55, 50);
    setProperty("Quests", "font-size", 9);
    setProperty("Quests", "text-color", "black");
    setProperty("Quests", "background-color", "white");
    setProperty("DButton", "text-align", "left");
textLabel("Settings", "Settings");
    setPosition("Settings", 265, 400, 55, 50);
    setProperty("Settings", "font-size", 8);
    setProperty("Settings", "text-color", "black");
    setProperty("Settings", "background-color", "white");
    setProperty("DButton", "text-align", "left");
appendItem(allUI, "DButton");
appendItem(allUI, "image3");
appendItem(allUI, "Tasks");
appendItem(allUI, "Complete");
appendItem(allUI, "Quests");
appendItem(allUI, "Settings");

function Dashboard(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("DButton");
    showElement("image3");
    showElement("Tasks");
    showElement("Complete");
    showElement("Quests");
    showElement("Settings");
}
onEvent("DButton", "click", function(){
  setProperty("DButton", "text-color", "white");
  setProperty("DButton", "background-color", "black");
});
onEvent("Tasks", "click", function(){
  setProperty("Tasks", "text-color", "white");
  setProperty("Tasks", "background-color", "black");
});
onEvent("Complete", "click", function(){
  setProperty("Complete", "text-color", "white");
  setProperty("Complete", "background-color", "black");
});
onEvent("Quests", "click", function(){
  setProperty("Quests", "text-color", "white");
  setProperty("Quests", "background-color", "black");
});
onEvent("Settings", "click", function(){
  setProperty("Settings", "text-color", "white");
  setProperty("Settings", "background-color", "black");
});

onEvent("DButton", "mouseover", function(){
  setProperty("DButton", "text-color", "white");
  setProperty("DButton", "background-color", "black");
});
onEvent("DButton", "mouseout", function(){
  setProperty("DButton", "text-color", "black");
  setProperty("DButton", "background-color", "white");
});
onEvent("Tasks", "mouseover", function(){
  setProperty("Tasks", "text-color", "white");
  setProperty("Tasks", "background-color", "black");
});
onEvent("Tasks", "mouseout", function(){
  setProperty("Tasks", "text-color", "black");
  setProperty("Tasks", "background-color", "white");
});
onEvent("Complete", "mouseover", function(){
  setProperty("Complete", "text-color", "white");
  setProperty("Complete", "background-color", "black");
});
onEvent("Complete", "mouseout", function(){
  setProperty("Complete", "text-color", "black");
  setProperty("Complete", "background-color", "white");
});
onEvent("Quests", "mouseover", function(){
  setProperty("Quests", "text-color", "white");
  setProperty("Quests", "background-color", "black");
});
onEvent("Quests", "mouseout", function(){
  setProperty("Quests", "text-color", "black");
  setProperty("Quests", "background-color", "white");
});
onEvent("Settings", "mouseover", function(){
  setProperty("Settings", "text-color", "white");
  setProperty("Settings", "background-color", "black");
});
onEvent("Settings", "mouseout", function(){
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
});*/