function treatQuestions(questions) {
  var arr = [];

  console.log("Original questions : " + questions);

  var way1 = questions.split("Question: ");
  if (way1.length != 0) {
  }

  for (var i = 0; i < way1.length; i++) {
    if (way1[i] != "") {
      arr.push(way1[i]);
    }
    if (i == way1.length - 1) {
      return arr;
    }
  }

  var way1 = questions.split("?");

  //Retire les questions impaires.
  way1.forEach((element) => {
    arr.push(element + "?");
  });

  console.log(questions);

  return res;
}
