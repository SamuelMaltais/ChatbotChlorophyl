function treatQuestions(questions) {
  var arr = [];
  var way1 = questions.split("\nQuestion: ");
  if (way1.length != 0) {
    return way1;
  }

  for (var i = 0; i < way1.length; i++) {
    if (way1[i] != "") {
      arr.push(way1[i]);
    }
  }

  var way1 = questions.split("?");
  var res = [];
  way1.forEach((element) => {
    res.push(element + "?");
  });

  return res;
}
