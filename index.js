const chatForm = get("form");
const chatInput = get("input");
const chatBox = get("main");

appendMessage(
  "bot",
  "Hi, I am an AI bot here to help you find out what kind of help is best suited for you!"
);

currQuestion = "Firstly, please tell me about your symptoms";

appendMessage("bot", currQuestion);

var counter = 0;
var questionSequence = 0;
var questions = [];
var afterDiagnosisPhase = 0;

nextQuestionPrompt = "The following questions have been asked to a patient:\n";
nextQuestionPrompt += "Question: " + currQuestion + "\n";

refinedPromt = "";

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value;

  if (!text) return;

  appendMessage("user", text);
  nextQuestionPrompt += "Response:" + text + "\n";
  if (afterDiagnosisPhase == 1) {
    queryAPI(query).then((response) => {
      appendMessage("bot", response);
    });
  } else {
    if (questionSequence && counter < 5) {
      if (questions.length != 0) {
        currQuestion = questions.pop();
        nextQuestionPrompt += "Question: " + currQuestion + "\n";
        appendMessage("bot", currQuestion);
        counter += 1;
      }

      if (questions.length == 0) {
        questionSequence = 0;
      }
    } else {
      if (counter < 3) {
        var query =
          nextQuestionPrompt +
          "What is a good follow up question to better understand the situation ? Reply only with questions.";

        //Questions

        console.log(query);
        appendMessage("bot", "Thinking ...");
        queryAPI(query).then((response) => {
          questions = treatQuestions(response);
          if (questions.length != 0) {
            questionSequence = 1;
            currQuestion = questions.pop();
            nextQuestionPrompt += "Question: " + currQuestion + "\n";
            appendMessage("bot", currQuestion);
          }
        });
      } else {
        generateFinalResponse(nextQuestionPrompt, appendMessage).then(() => {
          afterDiagnosisPhase = 1;
        });
      }
    }
    counter += 1;
    chatInput.value = "";
  }
});

function appendMessage(side, text) {
  const bubble = `
    <div class="msg -${side}">
        <div class="bubble">${text}</div>
    </div>`;
  chatBox.insertAdjacentHTML("beforeend", bubble);
  chatBox.scrollTop += 500;
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}
