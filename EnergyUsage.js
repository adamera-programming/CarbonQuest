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