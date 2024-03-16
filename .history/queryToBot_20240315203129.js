async function queryAPI(userText) {
  data = {
    inputs: userText,
    parameters: {
      min_length: 900,
      top_k: 1,
      temperature: 0.4,
      wait_for_model: true,
    },
  };
  var counter = 0;
  var result = [
    {
      generated_text: "",
    },
  ];
  while (result[0]["generated_text"] == "") {
    console.log("fetching");
    if (counter == 5) {
      return "I'm sorry, please try again.";
    }
    response = await fetch(
      "https://xevhza5rhd1jhkq8.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    result = await response.json();

    console.log(result);
    counter += 1;
  }

  return result[0]["generated_text"];
}
