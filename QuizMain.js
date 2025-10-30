var Counter = 0;

image("QuizImage", "https://th.bing.com/th/id/OIP.whAFhy0MbAgtkccchniT6gHaHa?&dpr=1.3o=7&rm=3&rs=1&pid=ImgDetMain&o=7&rm=3");
  hideElement("QuizImage");
  setPosition("QuizImage", 74, 33, 167, 122);
  appendItem(allUI, "QuizImage");
textLabel("QuizHeader", "Ready to take the Quiz?");
    hideElement("QuizHeader");
    setPosition("QuizHeader", 10, 185, 300, 90);
    setProperty("QuizHeader", "font-size", 34);
    setProperty("QuizHeader", "text-color", "white");
    setProperty("QuizHeader", "background-color", "black");
    setProperty("QuizHeader", "text-align", "center");
    appendItem(allUI, "QuizHeader");
button("QuizStart", "Begin");
    hideElement("QuizStart");
    setPosition("QuizStart", 10, 311, 300, 40);
    setProperty("QuizStart", "font-size", 15);
    setProperty("QuizStart", "text-align", "center");
    appendItem(allUI, "QuizStart");


//When Quiz is clicked
function QuizMain(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("QuizImage");
    showElement("QuizHeader");
    showElement("QuizStart");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}

onEvent("QuizStart", "click", function( ) {
  Counter = 0;
  Question1();
});