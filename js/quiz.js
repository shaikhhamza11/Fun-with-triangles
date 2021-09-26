const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputBox = document.querySelector("#outputBox");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  
];

const  calculateScore=()=> {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputBox.value = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
