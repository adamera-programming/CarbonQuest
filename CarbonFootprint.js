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