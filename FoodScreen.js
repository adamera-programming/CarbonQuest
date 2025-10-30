//NOTES: Everything functions properly. I need to change the images to each category.
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
