textLabel("Q4Header", "Which renewable energy source helps reduce climate change the most?");
    hideElement("Q4Header");
    setPosition("Q4Header", 0, 0, 320, 80);
    setProperty("Q4Header", "background-color", "black");
    setProperty("Q4Header", "text-color", "white");
    setProperty("Q4Header", "text-align", "center");
    setProperty("Q4Header", "font-size", 18.5);
    appendItem(allUI, "Q4Header");
button("Q4A", "A. Solar and wind power");
    hideElement("Q4A");
    setPosition("Q4A", 5, 104, 310, 40);
    setProperty("Q4A", "font-size", 15);
    setProperty("Q4A", "text-align", "center");
    appendItem(allUI, "Q4A");
button("Q4B", "B. Coal");
    hideElement("Q4B");
    setPosition("Q4B", 5, 164, 310, 40);
    setProperty("Q4B", "font-size", 15);
    setProperty("Q4B", "text-align", "center");
    appendItem(allUI, "Q4B");
button("Q4C", "C. Oil");
    hideElement("Q4C");
    setPosition("Q4C", 5, 224, 310, 40);
    setProperty("Q4C", "font-size", 15);
    setProperty("Q4C", "text-align", "center");
    appendItem(allUI, "Q4C");
button("Q4D", "D. Natural gas");
    hideElement("Q4D");
    setPosition("Q4D", 5, 284, 310, 40);
    setProperty("Q4D", "font-size", 15);
    setProperty("Q4D", "text-align", "center");
    appendItem(allUI, "Q4D");

onEvent("Q4A", "click", function( ) {
  Question5();
  Counter++;
});
onEvent("Q4B", "click", function( ) {
  Question5();
});
onEvent("Q4C", "click", function( ) {
  Question5();
});
onEvent("Q4D", "click", function( ) {
  Question5();
});

//When Q3A || Q3B || Q3C || Q3D is clicked
function Question4(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q4Header");
    showElement("Q4A");
    showElement("Q4B");
    showElement("Q4C");
    showElement("Q4D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}