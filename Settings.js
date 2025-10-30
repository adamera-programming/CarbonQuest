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
    showElement("Settings");
    showElement("SettingsHeader");
    showElement("Privacy");
    showElement("AccountInfo");
    showElement("Resources");
    showElement("LogOut");
}