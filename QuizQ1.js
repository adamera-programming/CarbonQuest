textLabel("Q1Header", "What is the main greenhouse gas responsible for climate change?");
    hideElement("Q1Header");
    setPosition("Q1Header", 0, 0, 320, 80);
    setProperty("Q1Header", "background-color", "black");
    setProperty("Q1Header", "text-color", "white");
    setProperty("Q1Header", "text-align", "center");
    setProperty("Q1Header", "font-size", 18.5);
    appendItem(allUI, "Q1Header");
button("Q1A", "A. Carbon Dioxide");
    hideElement("Q1A");
    setPosition("Q1A", 5, 104, 310, 40);
    setProperty("Q1A", "font-size", 15);
    setProperty("Q1A", "text-align", "center");
    appendItem(allUI, "Q1A");
button("Q1B", "B. Oxygen");
    hideElement("Q1B");
    setPosition("Q1B", 5, 164, 310, 40);
    setProperty("Q1B", "font-size", 15);
    setProperty("Q1B", "text-align", "center");
    appendItem(allUI, "Q1B");
button("Q1C", "C. Nitrogen");
    hideElement("Q1C");
    setPosition("Q1C", 5, 224, 310, 40);
    setProperty("Q1C", "font-size", 15);
    setProperty("Q1C", "text-align", "center");
    appendItem(allUI, "Q1C");
button("Q1D", "D. Helium");
    hideElement("Q1D");
    setPosition("Q1D", 5, 284, 310, 40);
    setProperty("Q1D", "font-size", 15);
    setProperty("Q1D", "text-align", "center");
    appendItem(allUI, "Q1D");

onEvent("Q1A", "click", function( ) {
  Question2();
  Counter++;
});
onEvent("Q1B", "click", function( ) {
  Question2();
});
onEvent("Q1C", "click", function( ) {
  Question2();
});
onEvent("Q1D", "click", function( ) {
  Question2();
});

//When Begin is clicked
function Question1(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q1Header");
    showElement("Q1A");
    showElement("Q1B");
    showElement("Q1C");
    showElement("Q1D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}