const chatForm = get("form");
const chatInput = get("input");
const chatBox = get("main");
appendMessage("bot", "Hi ! Please tell me about your symptoms");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value;
  if (!text) return;

  appendMessage("user", text);

  //Message envoyer par le user.
  queryAPI(text).then((response) => {
    appendMessage("bot", "Query was successfull");
    appendMessage("bot", "Response from bot: " + JSON.stringify(response));
  });

  chatInput.value = "";
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
