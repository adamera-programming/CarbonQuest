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