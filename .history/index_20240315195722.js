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

nextQuestionPrompt = "The following questions have been asked to a patient:\n";
nextQuestionPrompt += "Question: " + currQuestion + "\n";

refinedPromt = "";

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value;
  if (!text) return;

  appendMessage("user", text);
  appendMessage("bot", "Thinking ...");

  if (counter < 3) {
    nextQuestionPrompt += "Response:" + text + "\n";
    var query =
      nextQuestionPrompt +
      "What is a good follow up question to better understand the situation ?";

    //Questions

    console.log(query);

    queryAPI(query).then((response) => {
      appendMessage("bot", response);
      currQuestion = response;
      nextQuestionPrompt += "Question: " + response;
    });
  } else {
    nextQuestionPrompt += "What would you recommend ?";
    console.log(nextQuestionPrompt);
    //Message envoyer par le user.
    queryAPI(nextQuestionPrompt).then((response) => {
      appendMessage("bot", response);
    });
  }

  counter += 1;
  chatInput.value = "0";
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
