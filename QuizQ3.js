textLabel("Q3Header", "What effect does melting polar ice have on sea levels?");
    hideElement("Q3Header");
    setPosition("Q3Header", 0, 0, 320, 80);
    setProperty("Q3Header", "background-color", "black");
    setProperty("Q3Header", "text-color", "white");
    setProperty("Q3Header", "text-align", "center");
    setProperty("Q3Header", "font-size", 18.5);
    appendItem(allUI, "Q3Header");
button("Q3A", "A. Sea levels stay the same");
    hideElement("Q3A");
    setPosition("Q3A", 5, 104, 310, 40);
    setProperty("Q3A", "font-size", 15);
    setProperty("Q3A", "text-align", "center");
    appendItem(allUI, "Q3A");
button("Q3B", "B. Sea levels go down");
    hideElement("Q3B");
    setPosition("Q3B", 5, 164, 310, 40);
    setProperty("Q3B", "font-size", 15);
    setProperty("Q3B", "text-align", "center");
    appendItem(allUI, "Q3B");
button("Q3C", "C. It has no effect");
    hideElement("Q3C");
    setPosition("Q3C", 5, 224, 310, 40);
    setProperty("Q3C", "font-size", 15);
    setProperty("Q3C", "text-align", "center");
    appendItem(allUI, "Q3C");
button("Q3D", "D. Sea levels go up");
    hideElement("Q3D");
    setPosition("Q3D", 5, 284, 310, 40);
    setProperty("Q3D", "font-size", 15);
    setProperty("Q3D", "text-align", "center");
    appendItem(allUI, "Q3D");

onEvent("Q3A", "click", function( ) {
  Question4();
});
onEvent("Q3B", "click", function( ) {
  Question4();
});
onEvent("Q3C", "click", function( ) {
  Question4();
});
onEvent("Q3D", "click", function( ) {
  Question4();
  Counter++;
});

//When Q2A || Q2B || Q2C || Q2D is clicked
function Question3(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q3Header");
    showElement("Q3A");
    showElement("Q3B");
    showElement("Q3C");
    showElement("Q3D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}