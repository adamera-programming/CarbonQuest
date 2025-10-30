//AI
textLabel("AIHeader", "Meet Stratos!");
    hideElement("AIHeader");
    setPosition("AIHeader", 0, 0, 320, 45);
    setProperty("AIHeader", "background-color", "black");
    setProperty("AIHeader", "text-color", "white");
    setProperty("AIHeader", "text-align", "center");
    setProperty("AIHeader", "font-size", 32);
    appendItem(allUI, "AIHeader");
textLabel("OutputLabel", "");
    hideElement("OutputLabel");
    setPosition("OutputLabel", 10, 53, 300, 203);
    setProperty("OutputLabel", "background-color", "blue");
    setProperty("OutputLabel", "font-size", 20);
    setProperty("OutputLabel", "text-color", "black");
    setProperty("OutputLabel", "border-radius", 16);
    setProperty("OutputLabel", "background-color", "white");
    appendItem(allUI, "OutputLabel");
textLabel("FrequentQuestions", "Frequently Asked Questions");
    hideElement("FrequentQuestions");
    setPosition("FrequentQuestions", 10, 275, 300, 20);
    setProperty("FrequentQuestions", "text-align", "center");
    appendItem(allUI, "FrequentQuestions");
dropdown("QuestionsDropdown", "Select An Option", "How much population is caused per day?", "What is the most major cause of pollution?", "How does pollution impact our environment?");
    hideElement("QuestionsDropdown");
    setPosition("QuestionsDropdown", 10, 300, 300, 40);
    appendItem(allUI, "QuestionsDropdown");
button("Ask", "Ask Stratos");
    hideElement("Ask");
    setPosition("Ask", 10, 345, 300, 40);
    appendItem(allUI, "Ask");
var Questions = ["How much population is caused per day?", "What is the most major cause of pollution?", "How does pollution impact our environment?"];
var Answers = ["300 pounds", "Cars", "Kills sea turtles"];
var index;
function AI(){
  for(var i = 0; i<= Questions.length-1; i++) {
    if (Questions[i] == getText("QuestionsDropdown")){
      index = Questions.indexOf(getText("QuestionsDropdown"));
      setText("OutputLabel", Answers[index]);
      
    }
  }
}

onEvent("Ask", "click", function( ) {
  AI();
});

function ChatBot(){
    for (var i = 0; i < allUI.length; i++) {
        hideElement(allUI[i]);
    }
    showElement("AIHeader");
    showElement("OutputLabel");
    showElement("FrequentQuestions");
    showElement("SettingsHeader");
    showElement("QuestionsDropdown");
    showElement("Ask");
    showElement("Main");
    showElement("Quests");
    showElement("OurAI");
    showElement("Quiz");
    showElement("Settings");
}