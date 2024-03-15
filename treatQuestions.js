function treatQuestions(questions) {
  var arr = [];

  var way1 = questions.split("Question: ");
  if (way1.length != 0) {
    return way1;
  }

  var way1 = questions.split("?");
  var res = [];
  way1.forEach((element) => {
    res.push(element + "?");
  });

  return res;
}
