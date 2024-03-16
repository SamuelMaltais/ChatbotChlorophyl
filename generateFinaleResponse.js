async function generateFinalResponse(nextQuestionPrompt, appendMessage) {
  var prompt = (nextQuestionPrompt +=
    "Should this patient go to the emergency room? Respond with either yes or no");
  console.log(prompt);

  //Message envoyer par le user.
  queryAPI(prompt).then((response) => {
    if (response == "yes") {
      appendMessage(
        "bot",
        "Selon le triage, vous devriez vous pointer a la salle d'urgence"
      );
    } else if (response == "no") {
      appendMessage(
        "bot",
        "Notre tirage indique que vous ne devriez pas aller a la salle d'urgence"
      );
    } else {
      appendMessage("bot", response);
    }
  });

  prompt = nextQuestionPrompt +=
    "As a doctor, what would you recommand that patient do ?";

  queryAPI(prompt).then((response) => {
    appendMessage("bot", response);
  });
}
