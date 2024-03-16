async function generateFinalResponse(nextQuestionPrompt, appendMessage) {
  var prompt =
    nextQuestionPrompt +
    "Should this patient go to the emergency room? Respond with either yes or no";
  console.log(prompt);

  queryAPI(prompt).then((response) => {
    if (response == "yes" || "Yes") {
      appendMessage(
        "bot",
        "Selon le triage, vous devriez vous pointer a la salle d'urgence"
      );
    } else if (response == "no" || "Yes") {
      appendMessage(
        "bot",
        "Notre tirage indique que vous ne devriez pas aller a la salle d'urgence"
      );
    } else {
      appendMessage("bot", response);
    }
  });

  prompt =
    nextQuestionPrompt +
    "As a doctor, what would you recommand that patient do ?";

  console.log(prompt);

  queryAPI(prompt).then((response) => {
    appendMessage("bot", response);
  });
}
