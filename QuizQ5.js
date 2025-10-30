textLabel("Q5Header", "What can individuals do to help fight climate change?");
    hideElement("Q5Header");
    setPosition("Q5Header", 0, 0, 320, 80);
    setProperty("Q5Header", "background-color", "black");
    setProperty("Q5Header", "text-color", "white");
    setProperty("Q5Header", "text-align", "center");
    setProperty("Q5Header", "font-size", 18.5);
    appendItem(allUI, "Q5Header");
button("Q5A", "A. Use more plastic bags");
    hideElement("Q5A");
    setPosition("Q5A", 5, 104, 310, 40);
    setProperty("Q5A", "font-size", 15);
    setProperty("Q5A", "text-align", "center");
    appendItem(allUI, "Q5A");
button("Q5B", "B. Waste electricity");
    hideElement("Q5B");
    setPosition("Q5B", 5, 164, 310, 40);
    setProperty("Q5B", "font-size", 15);
    setProperty("Q5B", "text-align", "center");
    appendItem(allUI, "Q5B");
button("Q5C", "C. Walk or Bike");
    hideElement("Q5C");
    setPosition("Q5C", 5, 224, 310, 40);
    setProperty("Q5C", "font-size", 15);
    setProperty("Q5C", "text-align", "center");
    appendItem(allUI, "Q5C");
button("Q5D", "D. Leave lights on");
    hideElement("Q5D");
    setPosition("Q5D", 5, 284, 310, 40);
    setProperty("Q5D", "font-size", 15);
    setProperty("Q5D", "text-align", "center");
    appendItem(allUI, "Q5D");

onEvent("Q5A", "click", function( ) {
  QuizDone();
});
onEvent("Q5B", "click", function( ) {
  QuizDone();
});
onEvent("Q5C", "click", function( ) {
  Counter++;
  QuizDone();
});
onEvent("Q5D", "click", function( ) {
  QuizDone();
});

//When Q4A || Q4B || Q4C || Q4D is clicked
function Question5(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("Q5Header");
    showElement("Q5A");
    showElement("Q5B");
    showElement("Q5C");
    showElement("Q5D");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}