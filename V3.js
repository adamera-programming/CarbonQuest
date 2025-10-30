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
    setProperty("screen1", "background-color", "#4A90E2");
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
    curUser=records.length;
    curUser=curUser+1;
      
      //New  Line
      var today = new Date();

      userId.email = getText("EmailInput");
      userId.username = getText("UsernameInput1");
      userId.password = getText("PasswordInput1");

      //New Line
      userId.month = today.getMonth() + 1;
      
      //New Line
      userId.date = today.getDate();
      
      //New Line
      userId.year = today.getFullYear();
      
      //New Lines
      hQ=randomNumber(0,homeQuests.length-1);
      fQ=randomNumber(0,foodWasteQuests.length-1);
      oQ=randomNumber(0,outQuests.length-1);
      userId.homeQuest = hQ;
      userId.foodQuest = fQ;
      userId.outQuest = oQ;
      createRecord("userIds", userId, function() {
      MainPage();
      updateCarb(0,0);
      });
    } else{
        showElement("AccountExists");
        pause(3000);
        hideElement("AccountExists");
    }
  });
});
var curUser ="";
//Account Login (accountLogin.js)
onEvent("Log", "click", function() {
  var correct="no";
  readRecords("userIds", {}, function(records) {
    if (records.length>0) {
      for (var i = 0; i < records.length; i++) {
        if(getText("UsernameInput")==records[i].email){
          if(getText("PasswordInput")==records[i].password){
            correct="yes";
            curUser=i+1;
            break;
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
      dateRefresh();
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
textLabel("OurAI", "Chatbot");
  hideElement("OurAI");
  setPosition("OurAI", 0, 400, 64, 50);
  setProperty("OurAI", "font-size", 10);
  setProperty("OurAI", "text-color", "black");
  setProperty("OurAI", "background-color", "white");
  setProperty("OurAI", "text-align", "center");
  appendItem(allUI, "OurAI");
image("OurAIIcon", "  https://static.vecteezy.com/system/resources/previews/010/927/083/original/chatbot-icon-on-white-background-online-support-service-bot-sign-chat-bot-sign-for-support-service-concept-flat-style-vector.jpg");
  hideElement("OurAIIcon");
  setPosition("OurAIIcon", 20, 417, 30, 30);
  appendItem(allUI, "OurAIIcon");
textLabel("Quests", "Quests");
  hideElement("Quests");
  setPosition("Quests", 64, 400, 64, 50);
  setProperty("Quests", "font-size", 11);
  setProperty("Quests", "text-color", "black");
  setProperty("Quests", "background-color", "white");
  setProperty("Quests", "text-align", "center");
  appendItem(allUI, "Quests");
image("QuestsIcon", "https://cdn3.emoji.gg/emojis/1968-assassin-quest.png");
  hideElement("QuestsIcon");
  setPosition("QuestsIcon", 74, 410, 45, 45);
  appendItem(allUI, "QuestsIcon");
textLabel("Main", "Home");
  hideElement("Main");
  setPosition("Main", 128, 400, 64, 50);
  setProperty("Main", "font-size", 11);
  setProperty("Main", "text-color", "white");
  setProperty("Main", "background-color", "black");
  setProperty("Main", "text-align", "center");
  appendItem(allUI, "Main");
image("MainIcon", "https://image.emojipng.com/436/2028436-small.png");
  hideElement("MainIcon");
  setPosition("MainIcon", 146, 417, 30, 30);
  appendItem(allUI, "MainIcon");
textLabel("Quiz", "Quiz");
  hideElement("Quiz");
  setPosition("Quiz", 192, 400, 64, 50);
  setProperty("Quiz", "font-size", 11);
  setProperty("Quiz", "text-color", "black");
  setProperty("Quiz", "background-color", "white");
  setProperty("Quiz", "text-align", "center");
  appendItem(allUI, "Quiz");
image("QuizIcon", "https://s.pngkit.com/png/small/113-1138206_question-mark-question-mark-vector-icon.png");
  hideElement("QuizIcon");
  setPosition("QuizIcon", 210, 417, 30, 30);
  appendItem(allUI, "QuizIcon");
textLabel("Settings", "Settings");
  hideElement("Settings");
  setPosition("Settings", 256, 400, 64, 50);
  setProperty("Settings", "font-size", 10);
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
  setProperty("Settings", "text-align", "center");
  appendItem(allUI, "Settings");
image("SettingsIcon", "https://image.emojipng.com/779/2687779.jpg");
  hideElement("SettingsIcon");
  setPosition("SettingsIcon", 277, 417, 30, 30);
  appendItem(allUI, "SettingsIcon");
textLabel("Streak", "CarbonQuest");
  hideElement("Streak");
  setPosition("Streak", 0, 10, 320, 45);
  setProperty("Streak", "font-size", 32);
  setProperty("Streak", "text-color", "white");
  setProperty("Streak", "text-align", "center");
  appendItem(allUI, "Streak");
textLabel("Greeting", "Hello " + "Congressman" + "!");
  hideElement("Greeting");
  setPosition("Greeting", 40, 60, 250, 50);
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
textLabel("MainMessageBackground", "You are helping get rid of climate change every day! Hint: Do not use fossil fuels to travel today.");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}



//Settings
textLabel("SettingsHeader", "Settings");
    hideElement("SettingsHeader");
    setPosition("SettingsHeader", 0, 20, 320, 45);
    setProperty("SettingsHeader", "text-color", "white");
    setProperty("SettingsHeader", "text-align", "center");
    setProperty("SettingsHeader", "font-size", 32);
    appendItem(allUI, "SettingsHeader");
button("Privacy", "🔒 Privacy & Security");
    hideElement("Privacy");
    setPosition("Privacy", 10, 95, 300, 45);
    setProperty("Privacy", "font-size", 15);
    setProperty("Privacy", "background-color", "#A4C5E8");
    setProperty("Privacy", "border-color", "#A4C5E8");
    appendItem(allUI, "Privacy");
button("AccountInfo", "👤 Account Information");
    hideElement("AccountInfo");
    setPosition("AccountInfo", 10, 155, 300, 45);
    setProperty("AccountInfo", "font-size", 15);
    setProperty("AccountInfo", "background-color", "#A4C5E8");
    setProperty("AccountInfo", "border-color", "#A4C5E8");
    appendItem(allUI, "AccountInfo");
button("Resources", "📖 Resources");
    hideElement("Resources");
    setPosition("Resources", 10, 215, 300, 45);
    setProperty("Resources", "font-size", 15);
    setProperty("Resources", "background-color", "#A4C5E8");
    setProperty("Resources", "border-color", "#A4C5E8");
    appendItem(allUI, "Resources");
button("LogOut", "Log Out");
    hideElement("LogOut");
    setPosition("LogOut", 10, 340, 300, 50);
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
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
button("EnergyUsage", "Energy Usage");
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
image("train", "https://i.pinimg.com/736x/1e/62/2d/1e622df4013d149b3369dc4d74238c8f.jpg");
    hideElement("train");
    setPosition("train", 165, 75, 150, 90);
    appendItem(allTransportation, "train");
    appendItem(allUI, "train");
image("motorcycle", "https://static.vecteezy.com/system/resources/previews/006/458/309/non_2x/motorcycle-cartoon-clipart-colored-illustration-free-vector.jpg");
    hideElement("motorcycle");
    setPosition("motorcycle", 5, 193, 150, 90);
    appendItem(allTransportation, "motorcycle");
    appendItem(allUI, "motorcycle");
image("plane", "https://media.istockphoto.com/id/2161583461/vector/hand-drawn-illustration-of-airplane.jpg?s=612x612&w=0&k=20&c=zQK75CUYYL-rdSNg6P57t6Xz_IeJaUKkAvilH0euWZ0=");
    hideElement("plane");
    setPosition("plane", 165, 193, 150, 90);
    appendItem(allTransportation, "plane");
    appendItem(allUI, "plane");
image("bicycle", "https://media.istockphoto.com/id/1283591249/vector/bicycle-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=aF_6Q2aUTad3e9UBaG8YV8uYxooAuIczzvY3AnbIRog=");
    hideElement("bicycle");
    setPosition("bicycle", 5, 313, 150, 90);
    appendItem(allTransportation, "bicycle");
    appendItem(allUI, "bicycle");
image("walk", "https://media.istockphoto.com/id/1146421775/vector/walking-man-vector-icon.jpg?s=612x612&w=0&k=20&c=HephUruuaStyhi2FqNCgVw9yfym9H97pNGQY8C5n7s0=");
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

image("redmeat", "https://media.istockphoto.com/id/1269486434/vector/raw-piece-of-meat-for-cooking-steak.jpg?s=612x612&w=0&k=20&c=uXskr8f46Y4TxpRkhXzEHscqb06WPpQLdpGz5Rjoxww=");
    hideElement("redmeat");
    setPosition("redmeat", 5, 75, 150, 90);
    appendItem(allFood, "redmeat");
    appendItem(allUI, "redmeat");
image("poultry", "https://img.freepik.com/free-vector/chicken-white-background_1308-38327.jpg?semt=ais_hybrid&w=740&q=80");
    hideElement("poultry");
    setPosition("poultry", 165, 75, 150, 90);
    appendItem(allFood, "poultry");
    appendItem(allUI, "poultry");
image("vegetable", "https://i.pinimg.com/736x/c2/8c/51/c28c51c74efeb16be574f3159b22d2c3.jpg");
    hideElement("vegetable");
    setPosition("vegetable", 5, 193, 150, 90);
    appendItem(allFood, "vegetable");
    appendItem(allUI, "vegetable");
image("seafood", "https://media.istockphoto.com/id/2193206127/vector/crab-served-with-lemon-lettuce-and-tomatoes.jpg?s=612x612&w=0&k=20&c=uT-vqOD5PLdhBZ_gf7hTJA1ITBlrl8YQWmVKLq-ntgc=");
    hideElement("seafood");
    setPosition("seafood", 165, 193, 150, 90);
    appendItem(allFood, "seafood");
    appendItem(allUI, "seafood");
image("dairy", "https://img.freepik.com/free-vector/group-dairy-product-cheese-butter-milk_1308-160301.jpg?semt=ais_hybrid&w=740&q=80");
    hideElement("dairy");
    setPosition("dairy", 5, 313, 150, 90);
    appendItem(allFood, "dairy");
    appendItem(allUI, "dairy");
image("egg", "https://thumbs.dreamstime.com/b/cracked-broken-spilled-chicken-egg-sketch-style-vector-illustration-isolated-white-background-hand-drawn-sketched-raw-89386802.jpg");
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


image("clothes", "https://thumb.ac-illust.com/7c/7c8bcb7b3e3e9020b3efcbee7f35954d_t.jpeg");
    hideElement("clothes");
    setPosition("clothes", 5, 75, 150, 90);
    appendItem(allShopping, "clothes");
    appendItem(allUI, "clothes");
image("appliances", "https://img.freepik.com/free-vector/different-kind-kitchen-appliances_1308-1937.jpg");
    hideElement("appliances");
    setPosition("appliances", 165, 75, 150, 90);
    appendItem(allShopping, "appliances");
    appendItem(allUI, "appliances");
image("plastic", "https://media.istockphoto.com/id/1254871693/vector/single-use-disposable-plastic-items-icons-and-symbols.jpg?s=612x612&w=0&k=20&c=26maRmA0MPLi0wHdni7XN7mITBwYlds0TDgvkr3hVrQ=");
    hideElement("plastic");
    setPosition("plastic", 5, 193, 150, 90);
    appendItem(allShopping, "plastic");
    appendItem(allUI, "plastic");
image("reusable", "https://media.istockphoto.com/id/1148775774/vector/set-of-ecological-items-reusable-coffee-cup-glass-jar-wooden-cutlery-lunch-box-zero-waste.jpg?s=612x612&w=0&k=20&c=qdEYnYNpksBezaGPxHGuSJc2JC_TaL7WksE9LfBv_gE=");
    hideElement("reusable");
    setPosition("reusable", 165, 193, 150, 90);
    appendItem(allShopping, "reusable");
    appendItem(allUI, "reusable");
image("online", "https://media.istockphoto.com/id/1170763624/vector/ordering-food-using-online-mobile-application.jpg?s=612x612&w=0&k=20&c=JwM2JxQqF-1z1c4hb0fRL4F_EBlKRGvcUDI2r6dS--k=");
    hideElement("online");
    setPosition("online", 5, 313, 150, 90);
    appendItem(allShopping, "online");
    appendItem(allUI, "online");
image("ecopackaging", "https://media.istockphoto.com/id/1357287362/vector/biodegradable-packaging-cardboard-box-with-a-leaf-environmental-friendly-package.jpg?s=612x612&w=0&k=20&c=5UZ9eBTbk8ZhREl92px2-Q6v2MXkz0xVmIjUL9xsVb0=");
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
textLabel("DevicesQuestion", "How many minutes have used devices?");
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
textLabel("LightsQuestion", "How many minutes have you left lights on?");
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
textLabel("EfficentAppliancesLabel", "Appliances");
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
textLabel("EfficentAppliancesQuestion", "How many minutes have you used appliances?");
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
textLabel("RenewableEnergyQuestion", "How many minutes have you used renewable energy?");
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


image("coolingheating", "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-vector-eps10-set-of-heating-and-cooling-buttons-hot-and-cold-icon-collection-vector-png-image_46311654.jpg");
    hideElement("coolingheating");
    setPosition("coolingheating", 5, 75, 150, 90);
    appendItem(allEnergy, "coolingheating");
    appendItem(allUI, "coolingheating");
image("shower", "data:image/png;base64,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");
    hideElement("shower");
    setPosition("shower", 165, 75, 150, 90);
    appendItem(allEnergy, "shower");
    appendItem(allUI, "shower");
image("devices", "https://img.freepik.com/free-vector/illustration-digital-devices-collection_53876-5292.jpg?semt=ais_hybrid&w=740&q=80");
    hideElement("devices");
    setPosition("devices", 5, 193, 150, 90);
    appendItem(allEnergy, "devices");
    appendItem(allUI, "devices");
image("lights", "data:image/jpeg;base64,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");
    hideElement("lights");
    setPosition("lights", 165, 193, 150, 90);
    appendItem(allEnergy, "lights");
    appendItem(allUI, "lights");
image("efficentappliances", "data:image/jpeg;base64,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");
    hideElement("efficentappliances");
    setPosition("efficentappliances", 5, 313, 150, 90);
    appendItem(allEnergy, "efficentappliances");
    appendItem(allUI, "efficentappliances");
image("renewableenergy", "data:image/jpeg;base64,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");
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
button("back5", "Back");
    hideElement("back5");
    setPosition("back5", 5, 410, 310, 35);
    appendItem(allUI, "back5");


image("recycled", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCMtqFDG7_89dEYI5KvTtxRGSzSaRQEnR0g&s");
    hideElement("recycled");
    setPosition("recycled", 5, 75, 150, 90);
    appendItem(allWaste, "recycled");
    appendItem(allUI, "recycled");
image("composte", "data:image/jpeg;base64,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9V0P4lP4fz/w1eGjqx//ACDZumq6d13HlKj+JW/D+afDR1dNPUgbTVPg0D5FYz2lk9KweHr1SNk1KYP9Ini92HLD4LTfW5reu3uZRhxwmtD6NaZBF0MMXGwB7stuSqzM2neW2eUbQnWNAEAQBsUsWSIEBAQEBAQEBAQEBAQEBAQEBAQEBB5D9rmtLzVNhpOLabAOmgwXucA4MJ7oBGG0ngsZZQ5dStS6zejttQhjGmWsjtOkEAnu5zt8kTCC1g0baLDaOna+C6o8sqskQSS4tO7A5YghCYeuaj2inbLKy0ES8y17djXtMGBuOBE7HBIhEys7WgYAAeGCyQyRDkt9jFQbnDI/IqGUTs16OthP7N+Dxv2/qkEx6u9SxRtm7NoqN7wkfH5lR6sp8kkpYiAgICAgICAgICAgICAgICAgICAgwqVA0FxwAzRL8+a/CNI2hxBIc8PE7WlrfQjyWLLZ69o4utdNppvHRwC0jKDlgMz8wid4hWPtbqUadnZRBmo54PHs5nhu/iSUO37FaThY6rjk60G75U6YPv8AgphjL0JSgQEHDpGx3+03B4y48PFRLKJZaPtt8QcHjMb+KQTGzTbOzXpO34fL5p6keSSUsRAQEBAQEBAQEBAQEBAQEBAQEBAQYuaCIIkHYiVR141HZbaYdSu069MG677rm53HxjE4g7JO8qNjd5gNF6VsRLGUrQ0T/ptNRh4gtDm/NQy3b9F6k6Qt1S/Wa+mD7VWuCCB+6w9o8BAHEJsjd7XobRdOy0WUKQhlMQJzJOLnHiSST4rJDtRAgICDgt1iLjfp4PHv/VRMMoloa2rUqML23QwyTETkfkETyhLKWAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD//2Q==");
    hideElement("composte");
    setPosition("composte", 165, 75, 150, 90);
    appendItem(allWaste, "composte");
    appendItem(allUI, "composte");
image("repaired", "data:image/jpeg;base64,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");
    hideElement("repaired");
    setPosition("repaired", 5, 193, 150, 90);
    appendItem(allWaste, "repaired");
    appendItem(allUI, "repaired");
image("landfill", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFhUWGBcZFhgXFxgVGhYXFxcXFxcXFxgYHSggGBolGxUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGyslHyYtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAIDBQEGB//EAEAQAAEDAgQEBAMGAwcEAwEAAAEAAhEDIQQSMVEFIkFhBhNxgTKRoRRCscHR8FKS4RUjM2Jy0vEHY4KiU7LiQ//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAA3EQACAgEDAgQEBAUEAgMAAAAAAQIDEQQSITFBBRNRYRQiMnGBkaGxFVLB0fAGM0LhI1M0YvH/2gAMAwEAAhEDEQA/APsSsKwQAIAEAAKAJiolgCXmBLAzucIwAZgmNEkgBAAgAQAIAEACABAAgAQAIAEACABAHHOi6GAk5yWBMZD4EBSwGQ8xGAyL1nGboAlTNkxE0ACABAAgAQAIAEACABAAgAQAIAEACABAAgDocjAZLWOlIlkkkAIAEACABAAgDkpgdSAEACABAAmBVVIIhLAmJgSUCGVIAQBVW6JMFyWNEJgdQAIAEACABAAgAQBS7ED1UcktrI/aeye4ewDieyWQ2HW4gdUZE4FzXA6J5Fg6mIEACABAAgABRgC1tTdLAE0iSOZhugAJTDIFICjzg67TZSxgjkhUqgRPXRGAyTQASjAHcx3RgAlGAOIAEAJ4TE5nuGR4ibuAg3i0ElQjLLxgvsqcI7tyfsOKZQCAMjjrZLP7k1Pi0cG5bt3Kou7G7RviXzJf1NYK8xM6gRTia2UTEppZE3gtaZAKQyvEVcomJTihN4J03SAd0MESSGCAEFWXAgAQAIAAUCwXMxG6kmLaXseDonkg0STECABAAgAQBGtUIaY2Qllg3hGccU/+Iq3aivI7jTLaZ/zBVxXLJy6IcfofRRJsz+H/AAn1VkiqJzHas9f0SiOQ2okgQAIAEACABAGLwh7TWqAVKjjzSHTlHP8AdkLPWvmZv1MZeTHMYr3T5NpaDACAMbxAWzTzGqPi/wAPN/l+KFnuxlHQ0W7Etqj+PX8DYC0GB9TqBCvEPhHr+RUo9SMhinoPQJdx9ijH/D7j804dRT6FtD4W+gSfUa6FiQwQAgqy4EACABAAgAQAAwgC9mI3CkmQcS0VRunkjhkg4bhMWDqABAFeI+E+ia6ifQylaVDdasCG30InsoqL5Jt8IuqY0XFyltHuF8LiA0QQdU2iKeDmIrhxBANv6ISHJ5G6OIDiYBsotYJJ5LlEYIAEACABAGbw5lQVHlzw5vNDcsRzbzeypgnueWa7p1utKMcP1H31ANTCvSMgviOJU2NLnOho1JsB809rFlFdasHEEHfXvH6KE4Nk4SSGvPHS6ltZDKOef2TwLIpiqxNuilFEWyZxZEAAaBCgh7iNXEZm3F5CFHDCUsoupYgBoHZRxyPPBP7R2Q+A5D7R2UW0TUWZLOIbt+RVOS7BczGsPWPVPIYLmvB0IKYiSABAAgAQAIAEACAOh3dAsExWO6eROKOvrEgiNQmpicMiZplWqxFXlSIkdlLciOGcTyhHUCBMBrh+p9FXMnAeUCZU6sPVNITZW6qU8CyQJTEJ4/HGmJDS47AgE3i0kD6oxkMio4q5pdFNxgSILeeZMNk6+sC4UY1pMlKxtEcVxJ7jGRwhuaeUg/5Nfi+ndWJJEMshSxzuUFjriSTlGU/wug636SLG6YETjnENhjm5pmcpyR/Ffr2lIQ5wvFFwhzSDfWJMGAeUkQUmSH3mxKSAWJJKllISTfQ6KZSc4klW2SFLuoOz0JKr1JimFBzbJqCRJRJ4BAMwlAkCABAFrK7ho4oAuZj3dYP0TyLBa3iA6gj6p5DBc3FsP3vnZGQLmuB0MpiOoAEACABAxV1B4ktqH0cA4em6xSotgm65v7NZX9y6M4NpSiR4djDUBkAERp++yq8P1ktTGW5cr0HqaY14aGRUGshdRRecdzI5pEKldg1I1je/5IinJ4T5CTUUm+haWjZDbQ0k10ImmE1Ni8tMswxyk9VLfnqQVbXQm6oSmmiLTwRUhAkAIAWxdSCOdzbdBP5hGATKPP8A+6/+Uf7kYHkPP/7r/wCUf7kYDJIPJ0fU/k//AElwPkmA7+Op/KP96WUPDLaIcDdzj2IA/BxRuQtjO1q7WgydNeqhObUd2CUYxzjIo7GOLmhuUNP3istV07Z4Sxj1Nkq6q4KUnnPTBRiuMNouayq9oc8wwfDmiM0EmDqLd1bS5zclJY5K7VCMVJcl2G4qypU8toPwZsxgDWMu5PolG1Sm4LqiCacd2RynUa4S0gjcEG+1lZyGTjqzQQCRJ0HUqO9ZxknGubWccEwdk1JPOCEk11MNRJAgAQAIAEACABAAEAWsxDho4/j+KALmY93UA/RPIsFzMeOoI+qeQwXMxLD94e9vxRkRaCnwB59rSHuaCRqLbArxc5Tptkotrl9DtpKytOSI1g9rCGviesAwdwDZaqfFdRV1e5e5W9JU84WDNwOAex1Wq95e+qQZy5QIECw9vkrrPE424ymse5D4aUU9uGeio4/lFwDEQd91vXisZYkUR0XytdDlWtUOUg6G8d9LLq13QdXmcY+5zp12eaq/1LPtDifi7iBFtPdc7Uztg00+Ox1KoVS4S+5N2NyiXbxZFetwnKZCzSZeIDGFxIeJHyOoW2i9WR3Ix20+XLbLqXSrt7KnAJRvYKCK6tIOiemiN7HsQPpgkEi407I3MexEo6pZyPC7HUhgjAEDU1jUfL3KhGanJxj2JOO1ZkYWK4jTY8BxbnLoE/eIiQO9wscLL6rH1aXVZNfw9N8EujJYpvLnAsBPLqJOkHZQuVU573J89kTqrlHFbXQx2YttfFlsh7qNDKHRMOe4eYQOwAHuQuhBSX/kk898dOi9TBqI/J5UOH0z6ZfU0eIebTovdSDHva0klwIs0WDGMFz6kKpa2Fk8bcfb+46fD/h4Zb3P1/6OcKwBZSY0vAOpLJaC95kkt+8TMXUYW02ycMtP7krabq8ziNurFrg6ASNeqzxbpte2tyXqaJqVlKTlj1RLGVm5M4cWtIB0nWOgPdXV2wqulsRCdUrKlveCtaCgEACABAAgCuviGsEuMfifQJN4GkzPPGmzZhj1A+ijvJbB7C4lrxLT6jqPVSTTItNFyGxdehMU1xJ+NJP5YNo2LSNrOTvlqH8bf/rH8H/9jhYtGl8Ud9qr2YyQs02yOckWkjQwuv0MpTm/vJPX8wvKeIQ26l+519M81F2IHKVhZcjmGPKmmN9SqsOcbGEu4FjqMXBI9CpxnKPCYsLOcFeGLtWke60fG3OKjJ5wVKiEXlBiHOPxTEiNISt1W6vbjksWclmBzgEtEjpeLhdvw2E7a1h4Ri1s0k5RjmSQ9w7GOeYc3Kbm5ub/AHRsF27fKT2wll4ODpJ32LNkdv4/saCrNqBAAgAQAIATxWLEFrTz7fqRoLqjWKca89CejshZZjrhmJVxhpZ3vdYCXTpAvouPTrJ1z8uCy2dC6rfzLhI8LivE9V9dlZ/w035mstABsR3dlkTuvQyp3ww+r6mJW/MvRHusXx6kyk6q0+YALhhHUA3M8tiDvfRcOqmcbVF8fc6E5pwyuh4PwpSquxDXUiG5eZxcbZJAcD1dMwu1qpxhU9xz6YOU8RPpeHxzb29CdO9ly9HKqDc54Rp1SnJqETy/EOPtdiqdKlUlpqFtSwDbkBoa68mdtVqs0yxKePcVeolDEU8m81ud4bUnlECJbbc7nossdZvr+ZvHqimUd9jUYuKfcvzNeYuSLWG24HbRaq9dFrEFz9si+Fdn19F7mLR8U4R2lYD1a9v4hafLkVGu1wIBBkG4I6hQys4DDOpgCAFMfjhTG7joPzKTeCcY5MCtVLjLjJVeSxLBBIYxRcWkEWKBNZNajxKWuJHM1pPYxp6Xj5qvUSbht9WkKMVF7ieJwfl4jDM8oPa9r/NJBdpl5yZsSepXSWnrWIqK4Ob50+rkzabwqgOZ1Jl9BCbor6bUR82zruZj1cUyjTqPecrGPeLAmBngAAXi689ZBLxLal/mDsVyb0uWxoGbrsGUpr2IK894xU/MUkux0dFJbWhl4kFclmwowZsQoobDGDQoYIYCYhfC6kJIbLMQOUpsSK8GD0cRF7ae46roaC+cOE+MkbIp9UNVXua8OkERJaSW6DpAgnrdehqmpT3p59jBdFOG1rn1GeD8SFdheGlsOILSQSI6n1CuqnvjnGOTJOG14HlYQKq+IawEvcGgCTJ6BJvCyH2KWcSpuALSXA6EAmeqirIvpyEvl6hVxMtP3QR8RIn21U1LDy+CcKXYsevoJDCta2aVydXukk76W1hUeJXO6tJFfh2ir0tknJ8v16mdxPhbMQx1Kq5wkg5m8sEaQDIPuscZxohGWFlnQcPMnJLPB5jj3hrDAHyqlQPA+EQ8TGpn8JU6/EJ/81wKzSx/4s0uDeHg7C/ZnEkPqZy/L5R+ES28yBF+4V3m22WJqBR/4oReZvPpgf4V4cpYWXyczhl5nTyyHaC3QKjVSu8vdZglopqcsbSrxD5oovdh2F50tdzQdXAakj96LNpvD4zn5k5ZXXHc0W3NZjFY9z5waFSOWlUgCTyOsB7LvynCOFnBz9rfY+heEMQX4cPxFSXl5AzyHZQBBvqLm65uq0m15qWE+xohfCyLrsfTubGAwzGuqVqL3OcSA8D4YggevspUaOOMxlh+pVZY6ko7cr3PkAqD7tz2XUK28cn1Pwg57cIzzWlpAcGgiDlk5bdPfpC4tqctRiJuTUacy/Q0mxofn0Porr3bVjhYMtMqrMrLyQxNNzqeaiQXD4gdR/p6H3WjMXHdFpojHO/bJY9DzNai4OIeCHa36z1nqqX6mjGOAhAHUACAHeF08xMGCCwgxOjs0EbS0Ln63UeTKE/dltdSsTj6mtiKDqjg6q/MAIy5Q1puDcdRbRZbvGLrYbUse6Crw+EJbnyRdgKX/wAbP5Quf8Vf/O/zNfk1/wAqMrxXTa3A1Q0AC1gIH+INlr8OnKerjKTy+f2KtXFKlpcGphajS1sEHlGhB6L0zRy0XKLin1RJNrodDlls0NFnWKLI3Tj0YpjMS2gx1UyQBp1cSYa0dySB7rFLweDfySa+5etbJfUgo4rzWuAaWuY7K4GNYBMEajmWK7wi+PTDL69ZB9eByloFinRZX9SwXqyMujKG2qHuqO5Z2GHiQQpMQvgPjA3stGhW65R9Su+eyDkM497RLXOnMQMrRBvcam4j/lekemjU/q5OXLW7sKK++TjnPZJk3OvU9LxIN1Zucbdjz+RXjfma6EKmLqEXcQO1h9FOd0Y9WTrplN8Isbh2kcwBncazuCudqbZKbSfBurqjjJXXwbG5ctmtjlFhpEQOlvx3WzR07luXUy6hxjly6E3OzGPLAaW/ECR1+EDTpqo6u+abW19ME6KYeXlTLg2GZQBYW/HUdVjjbzyu2C2enjjlv79TNr1ajGl2TO6LAnLJHTMJA+SsSxGMLFhdmTjUuXVLMu+RTheDzl1WtSykcxYH5gBrzQB1my0aemuUuG2vUovm4xy+r7Ico8WFVxBpuYGktIdIgSIi1vXotym51uWcJdu5yNRmu6MFFvK69s+hUONPc8sOCxA/vIz/AN3ApxAeTMTI0va/ZZrnprcOTOjSrovakWeZVa3OC2C4Nl3Q3vb0+qNQqbKlKMWkv1KaldTc1bOLz2XOPuWUcM9xDX1LG+YfO3fZRpnK/wCVJcF9sK6vmy8v8gZgnNqNzOzWvaL+my0anVuVLio7cdzmafw5w1KunPKl27f4hmviHNswSZ0ibRuFxqr5VYlHozsXQeoWI4WPUzXso0R572lpykZQ3MT1dZosJE30HVdtxrVjlXPP7HK0sL5V5uW3tjvkawWMNRjXhhbI+FwIOpAJ9oKwanTZblFr35OtTfFYhJP0XAywuMh3cgjSbWPayqjqYyh5dvKRZKhRlvq6vqmVUaLmvdIi0MMyHdbjoVfp6Y2waS2r27ld04145zIyuMYtjqraBDvOyucA0DLkDS4lziR/DFp1FlonVtwoPhfmUQm2s2LDM5VkgQAIA0uE1QARF5B9lxvFc5g+xs0vdD1fHNa0uJgAEknQAalcmuLm1FdWaeIrL6I8ZifGFV7j5FEEDq8OeSNy1pGX5ld+PhFUIp3Tw/wRzpeITb+SPH4mVjfFFas11Coym0P0c0OFwQYu47Lbp/C6qZqyLef0M12tssjtkjN8O49zapyOLDlN4Gki3X9hdNpMxKXoejZxjEET55+Q/wBqWyI97FMZ4hrsAd9ocIJkANJd0Au1GxBvYs3jmKqxmLnZSHAAZoI0JgKM51w+p4JRU5LgXd4oxNMuIJGd2ZxBF3QASba2HyUsRaXoRcmuozhvFGMfo519AIJPsGqMlXFZljHuSi5P6SY8UYpjwXuNtcw0PTM2BZZ5aPTXLO1P7Fivur7ntPDHFKtWjmrZS/O4S0QCBEGJ7rn3eEUZ4bRrr1lmOTQAvIsoV+F1VzU1J5XPb+xKWrlOLi0uRLi/HPJrU/Nymk5rhmAJqNdbmdb4Lxa66cY+e/nTTTzwZlXCv6XnK7lmHxYqQ+ncaGbttBBse5spTssts3KLx7lcq1p60m02/QlxXi7KVSjRZlcarsrhJlkxDssGAZNrdO6ov06i3OHVLv0LtPOW3Enw/wBDUoYjODTdroHTFo3Gmiz+erYpSS3evYdMoVzxGTx6EQxjWj4i2Q03J6zc7CSVr0sr3JKcePZENVVU45jLn3JvpugAWHeJINwRIgH266KErdtjjY8Jk1CUq06u3UjXBgzB6iD+5WbUaeGnkmsyRfp9RbbCWVhi+O4rQAGckOFsrRpaxj96rsaev4mvKj+ZxdVqVprMTlyMcLrGr/e03cosQ6066x+7rFXTqKZ7G164+5ueoo1EFbFvnjPpgVfxWn576OUl7Whz4gtAkdZub7KHm3UvNjW3PQ0vT16hbY9fUdbSBiAZIlsEXEmRHbvutNyhfX8qWTJVXOm3E28CdLiAa7LLXhzrgkW73tKy0znVmNklLHZdjTbp1Nbq00S4hyRbpPJeNplRlpK0vNUnj2/qThYptUyST9xl+JLQC45uUSemm3rdaI0y37rJLD7EJ2bIqNcenfsKBtYVXTDmG9MiWw0jSCPzVNsNsHGeOvBVFttOrr3RhePeIMFIUmv5y8EtH8IBnNsDYd5Kr8PqzNyXT9zZqprG0d8Ocb+0UyGgMdTygtkmW9CCdRaFXqKfh55T4ZZRKFsdsjYZiGxckGCTmiAdgQNFCypSksLbn1/oDs8uLbaeOmOpVhyaxdmIbkMNIzOa8G8glomP1WvSKdafzLDMl+21KSi2eO8b1TSxFMMdzNY4zM2eYiDp8JstdEXzueSNk844xgwKfFq41qT6tb+it8iJDez0uAxPmMD+p17EarJOO2WC2LyhhQJFlGsW6RfdZ9RpY3pKWeCyuyUOgn4gquqYeo3sDbrlIdHpZR0mhqps3r9Rai6c63Et8HGl5A3vm3zSdY7RHZcjxdTWqlv6dvQ06JxVK2mBxjDMq4zKzYFxHRzZN/8A1n1Xc8JdkdLmfrwYNZFSuaj6F2D8OtpuzteQ4gzYOF7mAe62fEPsir4ePqON4cQI8z/0Z+ifxEvQPh4+ohxbg4NPNmLjTlwGVo9ZgX6qULm2sojOhJPDNzweaXkDe+b/AFSdY7RC8n4tv+KlvzjsdbROPlLbjPc89xvBMr4o02mARzkRZwBPz+EFdzwuU4aRb89ePU5+rUXdx+ho+B/LGcOs8G46wBYekysPj2/fHOdv+dTT4dtSaXX3KvGbKbqlNjPiJIO+UwBPvMKfgTmlNv6exHxBRe1LqOcJwAoM8tri4STJ1vG3oupKe55KYQUFgfFZ38R+ZUW2SwjB8VEkMe46Etv3uPwK00S5wQmsFfAa78PRrYm/lmGsb0c+YDzs0aT1n0VOrpstlFQysdyNM4JPOGYlTFEHPmJdObNN80zm+d1uaTW19CCfc+ieHOKVa1I4h7Gk5jTlsAGA13suHfpHVxD6WdCmxT6fUXV+JOZUzFsh0cs9okHSbKrfYo7YtjVTzmxLPY061QvYHNzAkSLx8wLQlRZGFidiyu+f3Fq6Z2USVTw+zXr6P2LOHuDaflzmdf0A6QYnv7lbf4pp28QRiq0WoSxKWX3fv6HnqvD2uxD2OLrNzT/EYEAEjoD9Fop8SujHbWt3pnsZ9b4TRfZ5tr2+uH+vI1UxDcJQe6Tl6gQS4kwB0v8AotkK5t+Zc/mfbsilKuCVVH0rv3efU8SzGvr13V5LCD90xA6CRr3RJJrD6GmGYLhn0DD8Ra6myo6lFTKZcSRe4zNvyg6+659uooqe1dTQtPddy3x7lODpMe1ptIs7Y/5oPU7rn36iM8NLkVliqi4Ty17dBzC2cSwEtFhpYx9VXC2aWc4f6FsaVFK5Jy46FWDxzzVcPhynlLrteCNJiA4ev4LVpFJz3zK5RzWlDjL5T9BjGPdNzbpue5/RY79RiW6znqb4w2wShwfMa3BcQ6o5xySSXF2axJ7RK9BGyEY7UjnSjKTyzQ4Dgq9Gu2oSGNEh0Gc7TqI20PsoznXNYaDbNdGe24lXpFpdSqgXBDct5iDBJ07R0UNQo2x/uUwr5xJBQ4hTZDWuc6Tq7pPf1XKdNk08rGOh0a/LrxGKMfxfwsV8tRpDXNEFwvImwcJ01g9yrdJdOrjHDJX1xnymeab4bcfirfJv9V0/iOM4MXlG1gcIKTAxsnudSd1RKW55LEsDCiMEAccP2UAYtbgPMSx5ZOoEx7XVrsUl8yyU+Vh5TGcBw3ypy3J1J19OwUZz3Eq61DkaLX7qJYGV37KAOFjv2UAZdTgdyWOcydQP+dFY7E/qWSnyscpjGC4aKQ5QSTqTr/QJSnuJwhs5KsXwjM7O0ljupHX+qas42tZRGVfO5cHcHwkMOYy525SdnGEsIca8ctj2Q7KBMPLOxQBF1GdWz6iQpRm4PKIzrVkXF9B2njaoEACNi0EHtBtCvnq5zWGZqNBXT9P6kWNoGA/C0wNHZGBuYX2iDMfVYbna3mMsG2OzGGjtU0+VtOj5dMGcrYE6bWmB3V++coJWNNr0KvL2Sbg+pJmJLXOyMGQgDK7mEDqb6+ii0vQnHcsZ6jlXizjTaA0B18wFhY26zELLPTb589DRG5Je4h9rr5gQ+ABBAA5vfonDSVQluRCVspLDLKGOrNcXAiTYyAZA6LWpbfp4KVHjnko4i51dhZVDSJBtywRpBbCsV80sFfkQzuRXwnhFOmAcs5XTckzob9IUXY5IkopM2Mfi6dQEQ4bafroua9NJSybvOi44M7DVCw/dI2P6q2Wmi0ZLs28N4Q9S429oy8hGYmSLkHpYqxUx2KLXQcMQfD4J1+NOLQA5szJGWxJva9o0VlVliymlgjZVCWPVCXFeJ1atMsY9tNxIhzQZEG+pOoVUNNXH6lksnbOS4eCKuIggASAEwBIATAEgBAHJQBzMN0AGcbhMDnmDcIAPMG4QB3zBuEAGcboA7mCQBKACUAEhAHMw3TAM43CAImq3cIAPObugDhrhAHPtA2QBfgAHvymwgnUfmsmsulTXugsvJZVFSlhs1f7Kbu76fouZ/EtR/J+5o8ir+Y5/ZLf4nfT9EfxLUfyfuHkV/wA36mPjxkeWtdIEbdRPRdbS2ysrU58PkzWxUZYQrUrQCS6ANVoSzwivOFllr6nIADrc++ib44EueSpIYIAEACABADqQwQA9g+GOeA7odO/6dbpwSm9qks+hCybrWcPBpUsFRa4Z2mCDr0OkyqISUbHGyTz2x0LZyk60648fqVcT4ewRlDReJBAkm95Ollrphvi4LmSMmq1Pk7bJYUX69TKq4GowMzAOL3ZWhpFwZOa+gAF1CNc9vzFiuTjnHYnR4e9wkCAPn8lTK1ReO5fXFT78EsVwGq1odmDpvGlvwVj3RmoNcsjmLi5J8Iza2EqN+JhvMW1A1IUppxeJEYS3LKKcp2KQwynZABB2QAQdkAEIA44SgAAhAHUACABAAgAQAIAEACABAHA0FzQdC9gPoXCforaVmaKr3iDwfQ+G0mim90QzM/IIgRuBtMrc8HOw+rI8Il1GiNqbPblCaikiLbbPn5bzPH+d/wD9iudc0pHUpT2IQ41ScacAG5HyuimUc9UFyeFwPARA7WUNyfRliTOoAEACABAAgB0JDXPQ1sHgGNI80knZscsb7qiN6dnLwiyytxhnuzvH+K06LHnO0HLNNgk5naxbckbRKsnQrLFKvp6olXdshizD9iFPHCqG5iWuIEta3OHnV0ze8x9VZKXGXwRhhPHX2NTM1zoPxa5HRbuFC6yEKs1cN9yuNHmWJ2847ehTiuF0/NZiSJcGkQZcSXEBpF7QAR/5FRTv8jdu5Jvy3Ztx/YsfUF5bBi2su0EDuiN/xEFCb5Xcb0qolvhyn+hLDOeGkEHWzTEi3bVWQqslFRjN8evV/iZ1bXHLUcvp7GbhatanUDHNlrpj5k8pGnosN+ZTbXJuqwl6EeKYI5szG6DmA/RXVScVibIWxTeYmWtBQCABAAgDhamBW6iPRAFL6ZCBEEAAcN08NAmmdSAi50Cdk11wJvCK8OXVAHNgA6SCbfMfJNpJ4EpZWTQwnDajxJAjoQbH53CxXa2mmW2TeS+uicllDQ4S7YfNU/xTT+5Z8NMqrYcsMOELVTfC6O6BTODi8SLOHtmvRadM0n/xY51jqLgaK2iG7Mm3wR1E9uIpLk9XiATTJl05J+N56a6rVKpKlyy849TDG5yuUcLGfQ5gmhtCjlLg4tpTD3DUDoDATnVjDy+3cIW9Vhd+x5bgwl7j3fpb752XD8Zjsikn3Ot4fJyjnBsZb6nTc/qvOpvB0u3Q4aYJIIkQNb77+icbpx5TwRaUlyjMxOEpOD8gyuZci8W6QfTULq6XWXxnGM3lSM1unhtbj1Rk+Wdl3znnMh2QAZDsUAd8s7IA38HwaobvGVtjc+8QLytUK61W3PqYdS9S74RrisLq8/0HqlPMeUQb6yAfdcBadajLcsfhwdqU3W0ks/ieG8ScIxZc6s+mC3QBjgcrRpmmLnX3XU0d1Fdflxlz7mW2qxvcz13h2madGk113eWC425XdW21EGZ0WHVuErG684L6XOFebccdxzG1P7t1UCIYST95zWiQOyq2ye2L7k4zg1ujyeA4h4txR5aJYxm8yfnqPZd+qnZHa+f87HOc+W0ZzOL4mcz673HpcgBS+HrxjaRlJyXJ9LDqzvKc1vJlmpeCG5QbT1BK4sKrJSbjnCNCmoPM0lxx36jGJaHuGXNy3kwAJ2cLz+q0xrqg5PEk/wCpG1WWQTcljPYtwxOYMjp6zrcfJZ3TO15l6fiaHdXTHbnJk8dw7Gy+Q0yOWIkHT3/FXQ3xnsx+ZT5kZx3ZWTIkggOaWyJbIiQNbajUa7rVZVKEdzK4Wxm2kSlVFiBAAgAQAIAQ4nAbbU2/VXUrLKbntWDzfh904usR/Cfo5oVty+VFOnbcmeoo5cwzEhvWLlYpuW17OptjhvkoxXF8C1xpvOIDjb/CMGeoIEEKiPxrw1GISnUuG2SwvF8ExjWB9Yhoi7BKlJa1vO2Io20RWMv8jd4Fx7D4gOZQc7NTAlr2ljo/iAOonqFwddpL65b7O/c36e+E/lizS87sufg27BDiTc0O2tHbWV1vDL1HNfTJk1VL+pDOGZSs9sgiYMXEiD9FXbfqNPNw3slGqFqUnFMS474roYTKytUqjzA6A1uYENgEH+YK/TPW6pPbN4RRcqKJLdBcmVT/AOouBgNa+vaIApkxGkei1/C+JNfX+qM6v0n8q/IspeKsE27W1R/4Aa3PVU2+Ga23/cefxLIa3Tw+lfoW4TxhhKlZtEPqNe85Wl7C1pPQZtLrLb4TfXBzaWF7l0NfXKW0b4fxynUxFTDAPFWkJeHNiwIiD1+IEdis1+knXVG2WMP0L46iE5bEuUQwDebE2A16ME/FeW3Pur+9X3Xr6kJdJ/8AQuvRnNBAAgAQB66gSTmJOUgQDaNLkLNPWctZf+dy6VM2tssJL0Fa1WHGQbHWPyUHLKcecPlPoiddVmVJ4bWfvgyWN+1VC7M9tMTIe1w0kOhvsbqdWkzLbkVluIbsYNTBYuh//FwDWggyCbA82abmwi2/suiow27kljpk41tjVvlN5fXHsLHjOHxFqdTO7KSWc7coLi0tNgARseiotohKxWSmkvY2wslXU4wg2zzo8IMmB5piCZyCAbiLXsrbNX5c8Pp+pCmuVsfSXc1cL4cbSAqU6UnVrnOlwjabA9wrqr61zblJ9DJrK9Q8R0+HJdX2Rt0GhgDyXEgWlziL62Jg6rky1Mq7m48JdjpRh5lCzzJoopN5nBrjkfDoJnLuO2n4KyzV1yypJ4foUx0904qGMJepZiMWwEMa/m2sSAN+irrvjGxyim2+nsaZUylBRykl19zIx9B8VXGftDLtMAwDdmRpsARa15zCbLt08xUmvm7nKvfz7c/L2wV08Q5zWNe0faGEOgEEDLbM4/dDgTI1vYFSuUZxcH1FU3Ce9dDextHPTLG6ui8aQQel15/Swe9ptenJ2tRPEU1HIi7hbABmzi4zae8WWmUvKt23NJexmi/Mq3Vx5F8bwlzZcwhzIkGbx3Cue3OE+eo45lHODOURggDG4pVl8dGj/lbKY4jkx3Sy8GL4BrD7U4uEh1N2Yer2FZvEKnbV8rxLPBPRzUbOV2PoWOwILTUojNYnKNTHRs9exXIp1soyVd/X1OjZUmt0DwLaVbE1S28iZBkCmJ0O34rs6jU1aWtTk/tjuc2FU7ptI1XeFLWq83+m34yuOv8AUL3cw4/U3fwzj6jFirha7XjlqM0PRzTqDu06f1C66lTraOOj/NMwtT09nJ9G4dj2Yik2vTsHSCDq1zTDmn0IK8hqqJU2OEj0WmvVsNxdW+E+h/BQo/3Y/cst+hlOA+Ae/wCK1eJf/If4FWk/2z57/wBXP8TDf6av4011PAfpn90c7xb6omTwjhhBDGjM93X96Afku5ZbCqDnZ0SOVCDnJRXc9XS8KW5qsHs2QPcm64E/9QfN8sOPudOPhja5ZicZ4Q6mctQAtN2uHbbYhdfR62vVwbj17ow36eVLxL8D1fgriDcQ9xq3xdGmKbnxHnUSQWPO7gRB7k724Pi2nlStsfobzj0Z0dFYpvL6pfobdHBuYazjEPBIgNEa6wASb6klYK7YynWvRo2zjiMuTPXqTlggAQAIA9W3N1jvf0Ei+/4qqyiFsHbGS49hVXW12KucepRVxtNrHCq4tvMm5cJ0H00WnQwhdDZtfvnp+Bm1986H5jkl6Y6neFVhVJNKCAMrpEZhtfXVKGnuotcHFY6+rwHxlOqrU1Jtr9ygYuj5tSmBztyl+UABpdOUyNTqoQtlW8WxWH+honpldzW/mX7ew3XENcZkD4pggE6GegIT1FEXiVCWV6/2IaaU1mFsmQwuIbVJMDO0Xfm+IQdvX9woyUb9sZP513XRklXLTyzjK/U5g655x0EGCLzPTcIULknDflp8t9ieK1/5MdeyKsfXqQHU2B7W5g9o+IOAluWbCfzU3RBPOE0+pQrW+mU10+xXwrEitQZiHNyeZMNmbZiB7kBZ7NPLTJShz0yzTXa7nsm+O3/6Mmi15Lg3nFpJvfr3Vkr1ZFSjJRa68EVpfLk4z+aL/JFD6Qqta8l0tzN5ZaXN1yv6iDJtB13Kv09l0tu2WY92+rKtTTXXnPXsuyyUYvDeTRc9tBj3NadOUNHU3kkkwbBR+I087HsTT/cp0+itrrza9z/Y0KDX5W53AOyjNGkhvMRPosVsapZnXnK7HTrsnF7bEsP3J+RLcubm6O12iQfRVrUtpJ4+5N1RTys47pFBrtazX4RlIGjosdfey6c664w3L6mupihKd08R6L/iYeMY0O5QQ0gEAgiAfXVUwztWXknLG5rArVqZQSegU4rLwRk8LJ5fiFSKb3dcp+Z/qV0EsLBzm88lf/T/AIW+pVfUBysa0tLrHmJaQI2ga+i5niOthpopPls16OiVkm0e+HCsSy9KtTmRIc10EbGCVwrPFNPampwf6HQVVkeYs0X8Pa7mLWteYzFvWNzAJXJs1Cl8vLS6ZNMHjnuXuw8iIEKHmRxjBJy7nmPEPherWyFhZLZBkkSDEaA9/mup4V4lDSqUZ5w+hl1lLuw4mh4f4Q+hhxSeWl2dzrGRe/UBVeIayvUXb4Zx7luii6obZDbRdY3LB0H9I0KGwH0VcrNzy2Z1JLoZ3iDCg4eqSxhLab4LgLWvB6LXobcXwSk0myjU4db4y8HifB4HmunXJb5iV6Hx9y8mOOmeTneG48xn0LDAZRG1/wA5XmYpYOu8nlfGLW+Sezxl+v5Sun4I5fFYXTDTMmvx5CyZfgWg41q7gXNBoFucAcrs4NibSJm/Zdfxj6YLGef6GHQLMn9jfZgXyJx9Zw6tPkw4dQYZMFcqMpJ5Wnw/x/udB1R/9rf5HCu5BtrLMckk8IExAgAQB6ShUa15cczj6kgbC/SZWCHiEatqcen6lktHLLe7OX36Jexn8bwYqVacyQ9xBy/dFpgdJ/JdHT6+1S3Vp8/kYtV4dTdBQtfTuuv2KK2Jbg6T6gFrcs/ESYDZOokrO9XqbdQq5rL/AEX2LadHp6Ks18LP4v7nh/7Vq1sT5rDFVzhAFhqA1vcaAzqurKMNvzLggpPdmPDPpONrU6dMOdTaHOglrJMuFy0k6tlciesy2ocI1rS8Zm8sWwjWuZIHMdAOh7TqFhna5SxHv2RG2DlbiaePXI3ivOAYGMLoIBg/dvJExcRKuzbY8J8f51EoKDUMcLozvFcU5lEuLicrHE2gw0aR06rTapWNbOYrHBKvbVF7/qZ8op16gADaj2gGeVzm33sde67DisYf5GPPOT0HhbxBVbXa2pVfUa+xDnF5BPwkT3t7rDq9NB1txXK5NNF0t2G+D3OFe1peQMoc4uNzAJ1t3PQLi1aqx8Lj2N3lx6jVPE5Wl72hrbQXanfl6rq6OnanZNdTDqbd01CL/ETo1G1CcjnOcDItYzcQNP8AhV/DylbmHQvephXXtnz+7DGOeWlsFpN8zQ5uWdLDbZV3VquzE117mZamU2lWht9NuUCADA5ha+41TndDY47enQtVMm/q69ezMHjOIbnFMN+HUnUnYE3hU0SkpJ5LZVxjHETH4hTc5uVo639l1aWk8sw2ptYRicU4XWfTLWtkmOoHUHdX+dH1M/lS9CXhDCYrDVTm5abmmRLXAutBidYm6xauinURxJcmjTuyuXD4PXVeKViCA4AxY5QYO8dVzl4Tps9H+bNbun6nmqnirGUqkVHAwdCxrcw3BA+q0y8E0s4/LwzN8ZbCXzcjzvHFrNdO3LHz/oucv9PWbuZcepp/iMMdOTOoeIcbWqQyqWgno1sMHrlXUXhGkrhhxy/V9zI9TdOXHB6jC457KQa6o6o/MZc8NBg6DlAC58/C6p2NpYj7G6FzhHD5ZwY52wT/AITVjGWWfGz9Cz+03bN+v6pfwer1ZH4qXoRdxFxBBa0g2IINx804+E1ReU3/ANiepb4weExFKphquZvQ8pixB6flC7k64aip1z7/AOZOXmVU90TapeLGxzU3A7NIIPzheen/AKfs3fLJY/E6K8Shj5lyY3EuIVMS8ANsPhaL+57rs6HQV6SOf+XqYdRqZ6iXser4HSFCm5huS0gkDVxP7HsqdXB3TjJdnk004hFx9iauwIEACYAgAQBCpxCodXdtreyhKqEsZiuB75epWMW8GQb7yf1U1xwiPGcna+Le8EPOYHUO5gfYp5ed3cGkxRtCmIApMtccosdbIbb6gsLoPVeI1HDK4yPQfiqvJh6FnmyIMxjwQ4GCCCD3ClGEYvKRGcnNYky88Xra+Yd9vnGqaWM47ibZCtxKo/4nT9NfRKEVBNR7hN738xg1uC0yZBc3sDb2nRXq6SK3BDGA4eyk8VGyXjQkzEiJHdKVsnwNQS5NNmNeNDGm/TRU7I+hZvkujOVcY9xlxLj3JP4lTbbI4RxuKcNDHpIQpNdGJxT6rJc/itYiDUcR6lRmlNJS7BFbfpAcVraZzGyNqw0Sy9ykVVcY913GSoxrUeg3JvqQ889lLAsh5x7J4DIeeeyADzz2QBTiWNqCHtafUXE7HopRk10Iyin1Ehwil/CfSSp+dIr8mI/QAYIY1rR2EfPdQbb6liSXQs889lEkHnnsgA889kAHnnsgCFUhwhzWkbESmnh8Caz1M93CKUzlPpJVnmyK/KiOYWi2n8DAO/U+p1UJScupOMVHoMeedgokg887IAPPOyADzzsgA8/sgA8/sgD/2Q==");
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
/*textLabel("CarbonFootprintHeader", "My Carbon Footprint");
    hideElement("CarbonFootprintHeader");
    setPosition("CarbonFootprintHeader", 0, 0, 320, 45);
    setProperty("CarbonFootprintHeader", "background-color", "black");
    setProperty("CarbonFootprintHeader", "text-color", "white");
    setProperty("CarbonFootprintHeader", "text-align", "center");
    setProperty("CarbonFootprintHeader", "font-size", 26);
    appendItem(allUI, "CarbonFootprintHeader");
    */
image("earth", "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-490c-622f-9e0a-62fe76ecfc42/raw?se=2025-10-06T03%3A22%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=15f1ee2f-d121-5fe5-8981-dcba433ddb9d&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-06T00%3A38%3A32Z&ske=2025-10-07T00%3A38%3A32Z&sks=b&skv=2024-08-04&sig=Xiv0gABONvK3iLN%2BSv06LI4IaVbxYS8RZG0/y2wG53M%3D");
    hideElement("earth");
    setPosition("earth", 10, -25, 290, 230);
    setProperty("earth", "border-radius", 360);
    appendItem(allUI, "earth");
textLabel("CarbonFootprintBackground", "");
  hideElement("CarbonFootprintBackground");
  setPosition("CarbonFootprintBackground",  10, 170, 300, 270);
  setProperty("CarbonFootprintBackground", "background-color", "white");
  setProperty("CarbonFootprintBackground", "border-radius", 10);
  appendItem(allUI, "CarbonFootprintBackground");
image("CarbonFootprintImage", "https://static.vecteezy.com/system/resources/previews/032/420/193/non_2x/stripe-color-scale-meter-panel-gauge-with-dial-showing-positive-green-and-negative-red-pressure-with-dashboard-speedometer-vector.jpg");
  hideElement("CarbonFootprintImage");
  setPosition("CarbonFootprintImage", -40, 170, 400, 200);
  appendItem(allUI, "CarbonFootprintImage");
textLabel("Pollution", "You Caused 300 Pounds of Pollution!");
    hideElement("Pollution");
    setPosition("Pollution", 10, 170, 300, 70);
    setProperty("Pollution", "background-color", "green");
    setProperty("Pollution", "text-color", "white");
    setProperty("Pollution", "font-size", "22");
    setProperty("Pollution", "text-align", "center");
    setProperty("Pollution", "border-radius", 10);
    appendItem(allUI, "Pollution");
image("CarbonFootprintArrow", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0h0LYCMehv5kF1tThxTzbocjXTD4rIWv5w&s");
  hideElement("CarbonFootprintArrow");
  setPosition("CarbonFootprintArrow", 220, 290, 40, 40);
  appendItem(allUI, "CarbonFootprintArrow");
button("CarbonFootprintReset", "Reset");
    hideElement("CarbonFootprintReset");
    setPosition("CarbonFootprintReset", 20, 350, 280, 35);
    setProperty("CarbonFootprintReset", "background-color", "green");
    appendItem(allUI, "CarbonFootprintReset");
button("CarbonFootprintBack", "Back");
    hideElement("CarbonFootprintBack");
    setPosition("CarbonFootprintBack", 20, 395, 280, 35);
    setProperty("CarbonFootprintBack", "background-color", "grey");
    setProperty("CarbonFootprintBack", "text-color", "black");
    appendItem(allUI, "CarbonFootprintBack");

function CarbonFootprintPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    //showElement("CarbonFootprintHeader");
    showElement("earth");
    showElement("Pollution");
    showElement("CarbonFootprintReset");
    showElement("CarbonFootprintBack");
    showElement("CarbonFootprintBackground");
    showElement("CarbonFootprintImage");
    showElement("CarbonFootprintArrow");
     if (0 < pol <= 10){
    setPosition("CarbonFootprintArrow", 220, 290, 40, 40);
    } else if (10 < pol <= 20) {
      setPosition("CarbonFootprintArrow", 170, 290, 40, 40);
    } else if (20 < pol <= 30) {
        setPosition("CarbonFootprintArrow", 115, 290, 40, 40);
    } else {
      setPosition("CarbonFootprintArrow", 60, 290, 40, 40);
    }
}

onEvent("CarbonFootprintButton", "click", function(){
    CarbonFootprintPage();
});

onEvent("CarbonFootprintReset", "click", function(){
    pol = 0;
    setText("Pollution", "You Caused "+ pol + " Pounds of Pollution!");
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
    setProperty("OutputLabel", "font-size", 12);
    setProperty("OutputLabel", "text-color", "black");
    setProperty("OutputLabel", "border-width", 7);
    setProperty("OutputLabel", "border-radius", 16);
    setProperty("OutputLabel", "border-color", "white");
    setProperty("OutputLabel", "background-color", "white");
    appendItem(allUI, "OutputLabel");
textLabel("FrequentQuestions", "Frequently Asked Questions");
    hideElement("FrequentQuestions");
    setPosition("FrequentQuestions", 10, 275, 300, 20);
    setProperty("FrequentQuestions", "text-align", "center");
    appendItem(allUI, "FrequentQuestions");
dropdown("QuestionsDropdown", "Select An Option", "What is climate change?", "What causes climate change?", "How do we know climate change is happening?", "How is climate change different from global warming?", "How do greenhouse gases warm the planet?", "What causes greenhouse gas emissions?", "How is climate change affecting weather patterns?", "What are the impacts of climate change on humans?", "What can be done to stop climate change?", "How does climate change affect wildlife?", "Which regions are most vulnerable to climate change?");
    hideElement("QuestionsDropdown");
    setPosition("QuestionsDropdown", 10, 300, 300, 40);
    appendItem(allUI, "QuestionsDropdown");
button("Ask", "Ask Stratos");
    hideElement("Ask");
    setPosition("Ask", 10, 345, 300, 40);
    appendItem(allUI, "Ask");
var Questions = ["What is climate change?", "What causes climate change?", "How do we know climate change is happening?", "How is climate change different from global warming?", "How do greenhouse gases warm the planet?", "What causes greenhouse gas emissions?", "How is climate change affecting weather patterns?", "What are the impacts of climate change on humans?", "What can be done to stop climate change?", "How does climate change affect wildlife?", "Which regions are most vulnerable to climate change?"];
var Answers = ["Climate change is the long term shift in long-term shifts in global temperatures, precipitation, and weather patterns. Climate change is mostly caused by human activities such and burning fossil fuels and deforestation.", "Climate change is primarily caused by the buildup of greenhouse gases (carbon dioxide, methane, nitrous oxide, etc)from burning fossil fuels, agriculture, and land-use changes.", "We know climate change is happening because global temperatures have risen significantly over the past century. Scientists have observed melting glaciers, rising sea levels, and more frequent extreme weather events as clear evidence of a warming planet. These patterns are confirmed by extensive research from organizations like NASA and the Intergovernmental Panel on Climate Change (IPCC), which consistently show that Earth’s climate is warming at an unprecedented rate due to human influence.", "Global warming specifically refers to the earth's rising temperature. On the other hand, climate change includes global warming but also covers other shifts in weather patterns, such as changes in rainfall, storms, and sea levels. In short, global warming is one part of the broader issue of climate change.", "Greenhouse gases such as carbon dioxide and methane trap heat in the earth's atmosphere. When sunlight hits the Earth's surface, it heats the atmosphere, which then radiates heat back into space. However, some of this heat is absorbed by greenhouse gases, which then re-radiate it back to the Earth, causing the planet's temperature to rise.", "The main source of greenhouse gases is when fossil fuels are burned for electricity, heat, and transportation. Other major sources include deforestation, agriculture, and industrial processes. These activities release gases like carbon dioxide, methane, and nitrous oxide that trap heat in the atmosphere.", "Climate change affects weather patterns by making extreme events like heatwaves, storms, floods, and droughts more frequent and intense. It disrupts normal rainfall patterns, causing some regions to experience heavier rains while others face prolonged dry periods. Additionally, warmer oceans and air temperatures fuel stronger hurricanes and alter wind and jet stream patterns around the world.", "The regions in the world that are most vulnerable to climate change are areas that have limited resources. Also areas with high environmental risks have a higher vulnerbility as well."];
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
    hideElement("SettingsHeader");
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}

onEvent("QuizStart", "click", function( ) {
  Counter = 0;
  Question1();
});


//QuizQ1
textLabel("Q1Header", "What is the main greenhouse gas responsible for climate change?");
    hideElement("Q1Header");
    setPosition("Q1Header", 5, 25, 310, 80);
    setProperty("Q1Header", "text-color", "white");
    setProperty("Q1Header", "text-align", "center");
    setProperty("Q1Header", "font-size", 19);
    appendItem(allUI, "Q1Header");
button("Q1A", "A. Carbon Dioxide");
    hideElement("Q1A");
    setPosition("Q1A", 20, 139, 280, 40);
    setProperty("Q1A", "font-size", 15);
    setProperty("Q1A", "text-color", "#1F3A56");
    setProperty("Q1A", "background-color", "#A4C5E8");
    setProperty("Q1A", "border-radius", 5);
    setProperty("Q1A", "border-color", "#A4C5E8");
    setProperty("Q1A", "text-align", "center");
    appendItem(allUI, "Q1A");
button("Q1B", "B. Oxygen");
    hideElement("Q1B");
    setPosition("Q1B", 20, 199, 280, 40);
    setProperty("Q1B", "font-size", 15);
    setProperty("Q1B", "text-color", "#1F3A56");
    setProperty("Q1B", "background-color", "#A4C5E8");
    setProperty("Q1B", "border-radius", 5);
    setProperty("Q1B", "border-color", "#A4C5E8");
    setProperty("Q1B", "text-align", "center");
    appendItem(allUI, "Q1B");
button("Q1C", "C. Nitrogen");
    hideElement("Q1C");
    setPosition("Q1C", 20, 259, 280, 40);
    setProperty("Q1C", "font-size", 15);
    setProperty("Q1C", "text-color", "#1F3A56");
    setProperty("Q1C", "background-color", "#A4C5E8");
    setProperty("Q1C", "border-radius", 5);
    setProperty("Q1C", "border-color", "#A4C5E8");
    setProperty("Q1C", "text-align", "center");
    appendItem(allUI, "Q1C");
button("Q1D", "D. Helium");
    hideElement("Q1D");
    setPosition("Q1D", 20, 319, 280, 40);
    setProperty("Q1D", "font-size", 15);
    setProperty("Q1D", "text-color", "#1F3A56");
    setProperty("Q1D", "background-color", "#A4C5E8");
    setProperty("Q1D", "border-radius", 5);
    setProperty("Q1D", "border-color", "#A4C5E8");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}


//QuizQ2
textLabel("Q2Header", "Which human activity is the largest source of greenhouse gas emissions?");
    hideElement("Q2Header");
    setPosition("Q2Header", 5, 25, 310, 80);
    setProperty("Q2Header", "text-color", "white");
    setProperty("Q2Header", "text-align", "center");
    setProperty("Q2Header", "font-size", 19);
    appendItem(allUI, "Q2Header");
button("Q2A", "A. Farming");
    hideElement("Q2A");
    setPosition("Q2A", 20, 139, 280, 40);
    setProperty("Q2A", "font-size", 15);
    setProperty("Q2A", "text-color", "#1F3A56");
    setProperty("Q2A", "background-color", "#A4C5E8");
    setProperty("Q2A", "border-radius", 5);
    setProperty("Q2A", "border-color", "#A4C5E8");
    setProperty("Q2A", "text-align", "center");
    appendItem(allUI, "Q2A");
button("Q2B", "B. Burning fossil fuels for energy");
    hideElement("Q2B");
    setPosition("Q2B", 20, 199, 280, 40);
    setProperty("Q2B", "font-size", 14);
    setProperty("Q2B", "text-color", "#1F3A56");
    setProperty("Q2B", "background-color", "#A4C5E8");
    setProperty("Q2B", "border-radius", 5);
    setProperty("Q2B", "border-color", "#A4C5E8");
    setProperty("Q2B", "text-align", "center");
    appendItem(allUI, "Q2B");
button("Q2C", "C. Transportation");
    hideElement("Q2C");
    setPosition("Q2C", 20, 259, 280, 40);
    setProperty("Q2C", "font-size", 15);
    setProperty("Q2C", "text-color", "#1F3A56");
    setProperty("Q2C", "background-color", "#A4C5E8");
    setProperty("Q2C", "border-radius", 5);
    setProperty("Q2C", "border-color", "#A4C5E8");
    setProperty("Q2C", "text-align", "center");
    appendItem(allUI, "Q2C");
button("Q2D", "D. Recycling");
    hideElement("Q2D");
    setPosition("Q2D", 20, 319, 280, 40);
    setProperty("Q2D", "font-size", 15);
    setProperty("Q2D", "text-color", "#1F3A56");
    setProperty("Q2D", "background-color", "#A4C5E8");
    setProperty("Q2D", "border-radius", 5);
    setProperty("Q2D", "border-color", "#A4C5E8");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}


//QuizQ3
textLabel("Q3Header", "What effect does melting polar ice have on sea levels?");
    hideElement("Q3Header");
    setPosition("Q3Header", 5, 25, 310, 80);
    setProperty("Q3Header", "text-color", "white");
    setProperty("Q3Header", "text-align", "center");
    setProperty("Q3Header", "font-size", 19);
    appendItem(allUI, "Q3Header");
button("Q3A", "A. Sea levels stay the same");
    hideElement("Q3A");
    setPosition("Q3A", 20, 139, 280, 40);
    setProperty("Q3A", "font-size", 15);
    setProperty("Q3A", "text-color", "#1F3A56");
    setProperty("Q3A", "background-color", "#A4C5E8");
    setProperty("Q3A", "border-radius", 5);
    setProperty("Q3A", "border-color", "#A4C5E8");
    setProperty("Q3A", "text-align", "center");
    appendItem(allUI, "Q3A");
button("Q3B", "B. Sea levels go down");
    hideElement("Q3B");
    setPosition("Q3B", 20, 199, 280, 40);
    setProperty("Q3B", "font-size", 14);
    setProperty("Q3B", "text-color", "#1F3A56");
    setProperty("Q3B", "background-color", "#A4C5E8");
    setProperty("Q3B", "border-radius", 5);
    setProperty("Q3B", "border-color", "#A4C5E8");
    setProperty("Q3B", "text-align", "center");
    appendItem(allUI, "Q3B");
button("Q3C", "C. It has no effect");
    hideElement("Q3C");
    setPosition("Q3C", 20, 259, 280, 40);
    setProperty("Q3C", "font-size", 15);
    setProperty("Q3C", "text-color", "#1F3A56");
    setProperty("Q3C", "background-color", "#A4C5E8");
    setProperty("Q3C", "border-radius", 5);
    setProperty("Q3C", "border-color", "#A4C5E8");
    setProperty("Q3C", "text-align", "center");
    appendItem(allUI, "Q3C");
button("Q3D", "D. Sea levels go up");
    hideElement("Q3D");
    setPosition("Q3D", 20, 319, 280, 40);
    setProperty("Q3D", "font-size", 15);
    setProperty("Q3D", "text-color", "#1F3A56");
    setProperty("Q3D", "background-color", "#A4C5E8");
    setProperty("Q3D", "border-radius", 5);
    setProperty("Q3D", "border-color", "#A4C5E8");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}


//QuizQ4
textLabel("Q4Header", "Which renewable energy source helps reduce climate change the most?");
    hideElement("Q4Header");
    setPosition("Q4Header", 5, 25, 310, 80);
    setProperty("Q4Header", "text-color", "white");
    setProperty("Q4Header", "text-align", "center");
    setProperty("Q4Header", "font-size", 19);
    appendItem(allUI, "Q4Header");
button("Q4A", "A. Solar and wind power");
    hideElement("Q4A");
    setPosition("Q4A", 20, 139, 280, 40);
    setProperty("Q4A", "font-size", 15);
    setProperty("Q4A", "text-color", "#1F3A56");
    setProperty("Q4A", "background-color", "#A4C5E8");
    setProperty("Q4A", "border-radius", 5);
    setProperty("Q4A", "border-color", "#A4C5E8");
    setProperty("Q4A", "text-align", "center");
    appendItem(allUI, "Q4A");
button("Q4B", "B. Coal");
    hideElement("Q4B");
    setPosition("Q4B", 20, 199, 280, 40);
    setProperty("Q4B", "font-size", 15);
    setProperty("Q4B", "text-color", "#1F3A56");
    setProperty("Q4B", "background-color", "#A4C5E8");
    setProperty("Q4B", "border-radius", 5);
    setProperty("Q4B", "border-color", "#A4C5E8");
    setProperty("Q4B", "text-align", "center");
    appendItem(allUI, "Q4B");
button("Q4C", "C. Oil");
    hideElement("Q4C");
    setPosition("Q4C", 20, 259, 280, 40);
    setProperty("Q4C", "font-size", 15);
    setProperty("Q4C", "text-color", "#1F3A56");
    setProperty("Q4C", "background-color", "#A4C5E8");
    setProperty("Q4C", "border-radius", 5);
    setProperty("Q4C", "border-color", "#A4C5E8");
    setProperty("Q4C", "text-align", "center");
    appendItem(allUI, "Q4C");
button("Q4D", "D. Natural gas");
    hideElement("Q4D");
    setPosition("Q4D", 20, 319, 280, 40);
    setProperty("Q4D", "font-size", 15);
    setProperty("Q4D", "text-color", "#1F3A56");
    setProperty("Q4D", "background-color", "#A4C5E8");
    setProperty("Q4D", "border-radius", 5);
    setProperty("Q4D", "border-color", "#A4C5E8");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
}


//QuizQ5
textLabel("Q5Header", "What can individuals do to help fight climate change?");
    hideElement("Q5Header");
    setPosition("Q5Header", 5, 25, 310, 80);
    setProperty("Q5Header", "text-color", "white");
    setProperty("Q5Header", "text-align", "center");
    setProperty("Q5Header", "font-size", 20);
    appendItem(allUI, "Q5Header");
button("Q5A", "A. Use more plastic bags");
    hideElement("Q5A");
    setPosition("Q5A", 20, 139, 280, 40);
    setProperty("Q5A", "font-size", 15);
    setProperty("Q5A", "text-color", "#1F3A56");
    setProperty("Q5A", "background-color", "#A4C5E8");
    setProperty("Q5A", "border-radius", 5);
    setProperty("Q5A", "border-color", "#A4C5E8");
    setProperty("Q5A", "text-align", "center");
    appendItem(allUI, "Q5A");
button("Q5B", "B. Waste electricity");
    hideElement("Q5B");
    setPosition("Q5B", 20, 199, 280, 40);
    setProperty("Q5B", "font-size", 15);
    setProperty("Q5B", "text-color", "#1F3A56");
    setProperty("Q5B", "background-color", "#A4C5E8");
    setProperty("Q5B", "border-radius", 5);
    setProperty("Q5B", "border-color", "#A4C5E8");
    setProperty("Q5B", "text-align", "center");
    appendItem(allUI, "Q5B");
button("Q5C", "C. Walk or Bike");
    hideElement("Q5C");
    setPosition("Q5C", 20, 259, 280, 40);
    setProperty("Q5C", "font-size", 15);
    setProperty("Q5C", "text-color", "#1F3A56");
    setProperty("Q5C", "background-color", "#A4C5E8");
    setProperty("Q5C", "border-radius", 5);
    setProperty("Q5C", "border-color", "#A4C5E8");
    setProperty("Q5C", "text-align", "center");
    appendItem(allUI, "Q5C");
button("Q5D", "D. Leave lights on");
    hideElement("Q5D");
    setPosition("Q5D", 20, 319, 280, 40);
    setProperty("Q5D", "font-size", 15);
    setProperty("Q5D", "text-color", "#1F3A56");
    setProperty("Q5D", "background-color", "#A4C5E8");
    setProperty("Q5D", "border-radius", 5);
    setProperty("Q5D", "border-color", "#A4C5E8");
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
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
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
image("Stars", "https://sdmntprwestus3.oaiusercontent.com/files/00000000-af14-61fd-98fa-5b55c7dce3bd/raw?se=2025-10-04T00%3A56%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=13878fca-7e87-5f42-906f-1e5d748d95a9&skoid=f71d6506-3cac-498e-b62a-67f9228033a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-03T23%3A23%3A29Z&ske=2025-10-04T23%3A23%3A29Z&sks=b&skv=2024-08-04&sig=DLsCkH%2BSnUxUeP822NGOu0cXvEKL5hn8wTghlaDZhuI%3D");
    setPosition("Stars", 20, 160, 280, 150);
    appendItem(allUI, "Stars");
button("QuizAgain", "Try Again?");
    hideElement("QuizAgain");
    setPosition("QuizAgain", 20, 330, 280, 40);
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
    showElement("Stars");
    showElement("QuizAgain");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
    showElement("MainIcon");
    showElement("QuestsIcon");
    showElement("OurAIIcon");
    showElement("QuizIcon");
    showElement("SettingsIcon");
    var QuestsCounter = 0;
}

//Quests
var QuestsCounter;
textLabel("QuestsHeader", "Complete Quests Here!");
  hideElement("QuestsHeader");
  setPosition("QuestsHeader", 0, 20, 320, 45);
  setProperty("QuestsHeader", "text-color", "white");
  setProperty("QuestsHeader", "text-align", "center");
  setProperty("QuestsHeader", "font-size", 22);
  appendItem(allUI, "QuestsHeader");
textLabel("QuestsCompleted", "You Completed 0 out of 3 Quests");
  hideElement("QuestsCompleted");
  setPosition("QuestsCompleted", 0, 60, 320, 45);
  setProperty("QuestsCompleted", "text-color", "white");
  setProperty("QuestsCompleted", "text-align", "center");
  setProperty("QuestsCompleted", "font-size", 14);
  appendItem(allUI, "QuestsCompleted");
textLabel("QuestsSubHeader", "Every Small Action Adds Up - Thanks for Helping Our Planet!");
  hideElement("QuestsSubHeader");
  setPosition("QuestsSubHeader", 0, 345, 320, 30);
  setProperty("QuestsSubHeader", "text-color", "white");
  setProperty("QuestsSubHeader", "text-align", "center");
  setProperty("QuestsSubHeader", "font-size", 14);
  appendItem(allUI, "QuestsSubHeader");
textLabel("QuestsBackground1", "");
  hideElement("QuestsBackground1");
  setPosition("QuestsBackground1", 10, 100, 300, 70);
  setProperty("QuestsBackground1", "background-color", "#F2F2F2");
  setProperty("QuestsBackground1", "border-radius", 10);
  appendItem(allUI, "QuestsBackground1");
textLabel("QuestsBackground2", "");
  hideElement("QuestsBackground2");
  setPosition("QuestsBackground2", 10, 180, 300, 70);
  setProperty("QuestsBackground2", "background-color", "#F2F2F2");
  setProperty("QuestsBackground2", "border-radius", 10);
  appendItem(allUI, "QuestsBackground2");
textLabel("QuestsBackground3", "");
  hideElement("QuestsBackground3");
  setPosition("QuestsBackground3", 10, 260, 300, 70);
  setProperty("QuestsBackground3", "background-color", "#F2F2F2");
  setProperty("QuestsBackground3", "border-radius", 10);
  appendItem(allUI, "QuestsBackground3");
function initQuest(dif,y){
  var diff=dif.toLowerCase()+"Quest";
  textLabel(diff,"Finding "+dif+" Quest");
  setProperty(diff,"background-color","#F2F2F2");
  setProperty(diff,"text-color","#000000");
  setProperty(diff,"text-align","center");
  setProperty(diff,"border-radius","25");
  setProperty(diff, "font-family","Lucida Console");
  setProperty(diff,"font-size", 11);
  setProperty(diff,"border-width", 7);
  setProperty(diff,"border-color", "#F2F2F2");
  setPosition(diff,50,y,"200","60");
  appendItem(allUI, diff);
}
initQuest("Home",110);
initQuest("Food",190);
initQuest("Out",270);


button("QuestsDone1", "Done?");
  hideElement("QuestsDone1");
  setPosition("QuestsDone1", 240, 120, 67, 30);
  setProperty("QuestsDone1", "font-size", 10);
  appendItem(allUI, "QuestsDone1");
image("QuestsImage1", "https://openclipart.org/image/2400px/svg_to_png/70417/home-clipart.png");
  hideElement("QuestsImage1");
  setPosition("QuestsImage1", 15, 105, 55, 55);
  appendItem(allUI, "QuestsImage1");
button("QuestsDone2", "Done?");
  hideElement("QuestsDone2");
  setPosition("QuestsDone2", 240, 200, 67, 30);
  setProperty("QuestsDone2", "font-size", 10);
  appendItem(allUI, "QuestsDone2");
image("QuestsImage2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxlEYShPFCIDWnKHLpegT6u7L3xtRdFUheQ&s");
  hideElement("QuestsImage2");
  setPosition("QuestsImage2", 15, 190, 50, 50);
  appendItem(allUI, "QuestsImage2");
button("QuestsDone3", "Done?");
  hideElement("QuestsDone3");
  setPosition("QuestsDone3", 240, 280, 67, 30);
  setProperty("QuestsDone3", "font-size", 10);
  appendItem(allUI, "QuestsDone3");
image("QuestsImage3", "https://media.istockphoto.com/id/1996583897/vector/plastic-bottle-water.jpg?s=612x612&w=0&k=20&c=3qbSI3pyt-shPPtTlblI7wAcDSZuqP6Y51gxjzxJkj0=");
  hideElement("QuestsImage3");
  setPosition("QuestsImage3", 15, 270, 50, 50);
  appendItem(allUI, "QuestsImage3");
var homeQuests = [
  "Turn off lights when leaving every room.",
  "Unplug 3 devices you’re not using.",
  "Take a 5-minute (or less) shower.",
  "Air-dry your clothes instead of using the dryer.",
  "Turn off the tap while brushing your teeth.",
  "Use a cloth towel instead of paper towels today.",
  "Charge your phone only once today.",
  "Say no to printing — go digital all day.",
  "Use both sides of a paper."
];
var foodWasteQuests = [
  "Eat a fully plant-based meal.",
  "Skip meat in one meal today.",
  "Throw away zero food waste today.",
  "Use a bar of soap instead of liquid in a plastic bottle.",
  "Refill a reusable bottle instead of buying plastic.",
  "Recycle correctly (check your bin!)."
];
var outQuests = [
  "Use a reusable water bottle all day.",
  "Pick up 5+ pieces of litter outside.",
  "Walk or bike instead of using a car.",
  "Say no to plastic straws and utensils.",
  "Take reusable bags if you go shopping."
];
function questPage(){
  HideUI();
  showElement("QuestsHeader");
  showElement("QuestsSubHeader");
  showElement("QuestsCompleted");
  QuestsCounter = 0;
  showElement("homeQuest");
  showElement("foodQuest");
  showElement("outQuest");
  showElement("Main");
  showElement("Quests");
  showElement("Settings");
  showElement("Quiz");
  showElement("OurAI");
  showElement("QuestsBackground1");
  showElement("QuestsDone1");
  showElement("QuestsImage1");
  showElement("QuestsBackground2");
  showElement("QuestsDone2");
  showElement("QuestsImage2");
  showElement("QuestsBackground3");
  showElement("QuestsDone3");
  showElement("QuestsImage3");
  showElement("MainIcon");
  showElement("QuestsIcon");
  showElement("OurAIIcon");
  showElement("QuizIcon");
  showElement("SettingsIcon");
  displayQuests();
}

onEvent("Quests","click",function(){
  questPage();
});

onEvent("QuestsDone1", "click", function(){
    setText("QuestsDone1", "Completed");
    setProperty("QuestsDone1", "font-size", 8);
    QuestsCounter++;
    setText("QuestsCompleted", "You Completed " + QuestsCounter + " out of 3 Quests!");
    setProperty("QuestsDone1", "background-color", "#8fbc8f");
    setProperty("QuestsDone1", "border-color", "#8fbc8f");
});
onEvent("QuestsDone2", "click", function(){
    setText("QuestsDone2", "Completed");
    setProperty("QuestsDone2", "font-size", 8);
    QuestsCounter++;
    setText("QuestsCompleted", "You Completed " + QuestsCounter + " out of 3 Quests!");
    setProperty("QuestsDone2", "background-color", "#8fbc8f");
    setProperty("QuestsDone2", "border-color", "#8fbc8f");
});
onEvent("QuestsDone3", "click", function(){
    setText("QuestsDone3", "Completed");
    setProperty("QuestsDone3", "font-size", 8);
    QuestsCounter++;
    setText("QuestsCompleted", "You Completed " + QuestsCounter + " out of 3 Quests!");
    setProperty("QuestsDone3", "background-color", "#8fbc8f");
    setProperty("QuestsDone3", "border-color", "#8fbc8f");
});

function dateRefresh(){
    updateCarb(0,0);
  checkDateMatch();
  sameDay="no";
}
var curDay = new Date();
var curDate=0;
var curMonth=0;
var curYear=0;
var sameDay="no";
function checkDateMatch(){
  curDate=curDay.getDate();
  curMonth=curDay.getMonth()+1;
  curYear=curDay.getFullYear();
  readRecords("userIds", {}, function(records) {
    if(records[curUser-1].month==curMonth){
      if(records[curUser-1].date==curDate){
        if(records[curUser-1].year==curYear){
          sameDay="yes";
        }else{
          editDate();
        }
      }else{
        editDate();
      }
    }else{
      editDate();
    }
  });
}

function editDate(){
  updateDate();
}

function displayQuests(){
  readRecords("userIds", {}, function(records) {
    setProperty("homeQuest","text",homeQuests[records[curUser-1].homeQuest]);
    setProperty("foodQuest","text",foodWasteQuests[records[curUser-1].foodQuest]);
    setProperty("outQuest","text",outQuests[records[curUser-1].outQuest]);
  });
}

var hQ=-1;
var fQ=-1;
var oQ=-1;

function updateDate(){
  readRecords("userIds", {id:curUser}, function(records) {
    if (records.length>0) {    
      var updatedRecord = records[0];
  curDate=curDay.getDate();
  curMonth=curDay.getMonth()+1;
  curYear=curDay.getFullYear();
  updatedRecord.month = curMonth;
  updatedRecord.date = curDate;
  updatedRecord.year = curYear;
  hQ=randomNumber(0,homeQuests.length-1);
  fQ=randomNumber(0,foodWasteQuests.length-1);
  oQ=randomNumber(0,outQuests.length-1);
  updatedRecord.homeQuest = hQ;
  updatedRecord.foodQuest = fQ;
  updatedRecord.outQuest = oQ;
  updateRecord("userIds", updatedRecord, function() {
      });
    }
  });
}

//Carbon
var pol=0;
var adpol=0;
function updateCarb(mult,num){
  readRecords("userIds", {}, function(records) {
    pol=records[curUser-1].carbon;
  });
  readRecords("userIds", {id:curUser}, function(records) {
    adpol=num*mult;
    pol=pol+adpol;
    if (records.length>0) {    
      var updatedRecord = records[0];
  updatedRecord.carbon = roundToTwoDecimals(pol);
  updateRecord("userIds", updatedRecord, function() {
      });
    }
  setText("Pollution","You Caused "+ pol + " Pounds of Pollution!");
  });
  
}

function roundToTwoDecimals(number) {
  return Math.round(number * 100) / 100;
}
function add(item,numeric){
  onEvent(item+"Button", "click", function(){
    updateCarb(numeric,getText(item+"Input"));
  });
}
add("Cars",0.25);
add("Trains",0.1);
add("Motorcycles",0.15);
add("Planes",0.45);
add("Bicycle",0.01);
add("Walk",0.01);
add("RedMeat",27);
add("Poultry",2.7);
add("Vegetable",0.45);
add("SeaFood",2.3);
add("Dairy",1.4);
add("Egg",2.0);
add("Clothes",16);
add("Appliances",270);
add("Plastic",0.25);
add("Reusable",18);
add("Online",1);
add("EcoPackaging",0.1);
add("CoolingHeating",0.011);
add("Shower",0.25);
add("Devices",0.0001);
add("Lights",0.0001);
add("EfficentAppliances",0.015);
add("RenewableEnergy",0.00055);

HideUI();
HomePage();