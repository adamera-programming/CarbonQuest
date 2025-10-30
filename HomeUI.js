//HomeUI
image("PlusSign", "LINK");
  hideElement("PlusSign");
  setPosition("PlusSign", 60, 125, 200, 200);
  appendItem(allUI, "PlusSign");
textLabel("Main", "Main");
  hideElement("Main");
  setPosition("Main", 0, 400, 106.67, 50);
  setProperty("Main", "font-size", 11);
  setProperty("Main", "text-color", "white");
  setProperty("Main", "background-color", "black");
  setProperty("Main", "text-align", "center");
  appendItem(allUI, "Main");
textLabel("Quests", "Quests");
  hideElement("Quests");
  setPosition("Quests", 106.67, 400, 106.67, 50);
  setProperty("Quests", "font-size", 11);
  setProperty("Quests", "text-color", "black");
  setProperty("Quests", "background-color", "white");
  setProperty("Quests", "text-align", "center");
  appendItem(allUI, "Quests");
textLabel("Settings", "Settings");
  hideElement("Settings");
  setPosition("Settings", 213.34, 400, 106.67, 50);
  setProperty("Settings", "font-size", 11);
  setProperty("Settings", "text-color", "black");
  setProperty("Settings", "background-color", "white");
  setProperty("Settings", "text-align", "center");
  appendItem(allUI, "Settings");
textLabel("Streak", "Streak is 100000");
  hideElement("Streak");
  setPosition("Streak", 210, 0, 110, 50);
  setProperty("Streak", "font-size", 11);
  setProperty("Streak", "text-color", "black");
  setProperty("Streak", "background-color", "white");
  setProperty("Streak", "text-align", "center");
  appendItem(allUI, "Streak");
textLabel("Greeting", "Hello " + getText("UsernameInput") + "!");
  hideElement("Greeting");
  setPosition("Greeting", 0, 0, 190, 50);
  setProperty("Greeting", "font-size", 14);
  setProperty("Greeting", "text-color", "black");
  setProperty("Greeting", "background-color", "white");
  setProperty("Greeting", "text-align", "center");
  appendItem(allUI, "Greeting");
button("CarbonFootprintButton", "My Carbon Footprint");
    hideElement("CarbonFootprintButton");
    setPosition("CarbonFootprintButton", 5, 352, 310, 35);
    appendItem(allUI, "CarbonFootprintButton");



function MainPage(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Main");
    showElement("PlusSign");
    showElement("Quests");
    showElement("Settings");
    showElement("Streak");
    showElement("Greeting");
    showElement("CarbonFootprintButton");
}