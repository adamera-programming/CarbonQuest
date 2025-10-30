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