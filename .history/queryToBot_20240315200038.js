async function queryAPI(userText) {
  data = {
    inputs: userText,
    parameters: {
      wait_for_model: true,
      temperature: 0.4,
      top_k: 1,
      max_new_tokens: 10000,
    },
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

  console.log(result);

  return result[0]["generated_text"];
}
