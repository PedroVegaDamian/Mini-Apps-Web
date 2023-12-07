const correctAnswers = ["roma", "oslo", "lima", "estocolmo", "ottawa"];

const buttonCorrect = document.getElementById("button-correct");

buttonCorrect.addEventListener("click", () => {
  const inputsChecked = document.querySelectorAll("input[type=radio]:checked");

  const answers = [...inputsChecked].map((input) => input.value);

  const answersCorrect = answers.reduce((acc, answer) => {
    if (correctAnswers.includes(answer)) return acc + 1;
    return acc;
  }, 0);

  const result = document.getElementById("result");
  result.innerHTML = `<p>Cantidad acertadas: ${answersCorrect}</p>`;
});
