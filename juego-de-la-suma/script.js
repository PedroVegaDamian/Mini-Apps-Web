const data = [
  {
    question: "2 + 3 = <span id='answer'>?</span>",
    answers: [4, 5, 6],
    correct: 5,
  },
  {
    question: "5 + 9 = <span id='answer'>?</span>",
    answers: [12, 13, 14],
    correct: 14,
  },
  {
    question: "1 + 7 = <span id='answer'>?</span>",
    answers: [8, 9, 10],
    correct: 8,
  },
];

const renderQuestion = (dataQuestion) => {
  return `
  <div class="card">
    <div class="card__question">
      <p>${dataQuestion.question}</p>
      <p class="card__result"></p>
    </div>
    <div class="card__answers">
      <button class="card__answer">${dataQuestion.answers[0]}</button>
      <button class="card__answer">${dataQuestion.answers[1]}</button>
      <button class="card__answer">${dataQuestion.answers[2]}</button>
    </div>
  </div>
`;
};

let indexQuestionData = 0;
const container = document.getElementById("container");

function start() {
  container.innerHTML = renderQuestion(data[indexQuestionData]);

  const answer = document.getElementById("answer");
  const result = document.querySelector(".card__result");
  const buttonsAnswer = document.querySelectorAll(".card__answer");

  buttonsAnswer.forEach((button) => {
    button.addEventListener("click", () => {
      const { correct } = data[indexQuestionData];
      answer.textContent = correct;
      button.classList.add("check");

      if (Number(button.textContent) === correct) {
        result.classList.add("correct");
        result.innerText = `Excelente!!`;
      } else {
        result.classList.add("incorrect");
        result.innerText = `Intenta de nuevo!!`;
      }

      setTimeout(() => {
        indexQuestionData++;
        if (indexQuestionData === data.length) {
          indexQuestionData = 0;
        }
        start();
      }, 2000);
    });
  });
}

start();
