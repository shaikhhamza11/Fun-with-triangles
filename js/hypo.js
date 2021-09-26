const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputBox = document.querySelector("#outputBox");

const calculateSumOfSquare=(a, b)=> {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

const calculateHypotenuse=()=> {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputBox.value = "The length of hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);
