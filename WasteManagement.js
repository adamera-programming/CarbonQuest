//NOTE:Need to add to V2(Current)

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