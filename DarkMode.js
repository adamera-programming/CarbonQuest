//Dark Mode Selector

textLabel("DarkMode", "Dark Mode");
  setPosition("DarkMode", 0, 8);
  setProperty("DarkMode", "font-size", 12);
dropdown("DarkModeSelector", "SELECT", "ON", "OFF");
  setPosition("DarkModeSelector", 90, 5, 90, 25);
  setProperty("DarkModeSelector", "font-size", 10);
image("moon", "https://tse2.mm.bing.net/th/id/OIP.0o-Jbn_9IKaSZI87NtgwDAHaHa?pid=Api&P=0&h=220");
  setPosition("moon", 185, 7, 20, 20);
  hideElement("moon");
image("sun", "https://tse3.mm.bing.net/th/id/OIP.mbzKbnNJkNGrAidzO5abtwHaHa?pid=Api&P=0&h=220");
  setPosition("sun", 185, 7, 20, 20);
  hideElement("sun");
onEvent("DarkModeSelector", "click", function(){
    if (getText("DarkModeSelector") == "ON"){
        setProperty("screen1", "background-color", "black");
        showElement("moon");
        hideElement("sun");
        setProperty("SignUpHeader", "text-color", "white");
        setProperty("LogInHeader", "text-color", "white");
    } else if (getText("DarkModeSelector") == "OFF") {
        setProperty("screen1", "background-color", "white"); 
        showElement("sun");
        hideElement("moon");
        setProperty("SignUpHeader", "text-color", "black");
        setProperty("LogInHeader", "text-color", "black");
    }
});