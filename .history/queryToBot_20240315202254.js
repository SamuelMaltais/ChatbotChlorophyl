async function queryAPI(userText) {
  data = {
    inputs: userText,
    parameters: {
      min_length: 100,
      top_k: 1,
      temperature: 0.4,
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

    if (result[0]["generated_text"] == "") {
      sleep(500);
    }

    console.log(result);
    counter++;
  }

  return result[0]["generated_text"];
}
