async function queryAPI(userText) {
  var data = userText;

  body = {
    inputs: "This is the text sent to the model",
    parameters: {},
  };
  const response = await fetch(
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
  const result = await response.json();
  return result;
}
