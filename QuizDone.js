textLabel("QuizDoneHeader", "Congratulations! You completed the quiz!");
    hideElement("QuizDoneHeader");
    setPosition("QuizDoneHeader", 10, 100, 300, 65);
    setProperty("QuizDoneHeader", "font-size", 22);
    setProperty("QuizDoneHeader", "text-color", "white");
    setProperty("QuizDoneHeader", "background-color", "black");
    setProperty("QuizDoneHeader", "text-align", "center");
    appendItem(allUI, "QuizDoneHeader");
textLabel("QuizCorrect", "You got " + Counter + " out of 5 correct!");
    hideElement("QuizCorrect");
    setPosition("QuizCorrect", 10, 220, 300, 35);
    setProperty("QuizCorrect", "font-size", 18);
    setProperty("QuizCorrect", "text-align", "center");
    appendItem(allUI, "QuizCorrect");
button("QuizAgain", "Try Again?");
    hideElement("QuizAgain");
    setPosition("QuizAgain", 10, 280, 300, 40);
    setProperty("QuizAgain", "font-size", 15);
    setProperty("QuizAgain", "text-align", "center");
    appendItem(allUI, "QuizAgain");

onEvent("QuizAgain", "click", function( ) {
  QuizMain();
  Counter = 0;
});

//When Q5A || Q5B || Q5C || Q5D is clicked
function QuizDone(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("QuizDoneHeader");
    setText("QuizCorrect", "You got " + Counter + " out of 5 correct!");
    showElement("QuizCorrect");
    showElement("QuizAgain");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}