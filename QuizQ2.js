textLabel("Q2Header", "Which human activity is the largest source of greenhouse gas emissions?");
    hideElement("Q2Header");
    setPosition("Q2Header", 0, 0, 320, 80);
    setProperty("Q2Header", "background-color", "black");
    setProperty("Q2Header", "text-color", "white");
    setProperty("Q2Header", "text-align", "center");
    setProperty("Q2Header", "font-size", 18.5);
    appendItem(allUI, "Q2Header");
button("Q2A", "A. Farming");
    hideElement("Q2A");
    setPosition("Q2A", 5, 104, 310, 40);
    setProperty("Q2A", "font-size", 15);
    setProperty("Q2A", "text-align", "center");
    appendItem(allUI, "Q2A");
button("Q2B", "B. Burning fossil fuels for energy");
    hideElement("Q2B");
    setPosition("Q2B", 5, 164, 310, 40);
    setProperty("Q2B", "font-size", 15);
    setProperty("Q2B", "text-align", "center");
    appendItem(allUI, "Q2B");
button("Q2C", "C. Transportation");
    hideElement("Q2C");
    setPosition("Q2C", 5, 224, 310, 40);
    setProperty("Q2C", "font-size", 15);
    setProperty("Q2C", "text-align", "center");
    appendItem(allUI, "Q2C");
button("Q2D", "D. Recycling");
    hideElement("Q2D");
    setPosition("Q2D", 5, 284, 310, 40);
    setProperty("Q2D", "font-size", 15);
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
}