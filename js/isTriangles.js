const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#outputBox");

const sumOfAngles=(angle1, angle2, angle3)=> {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

const isTriangle=()=> {
    // if(inputs[0].value )
    console.log(inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '')
    if(inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== ''){
        const sum = sumOfAngles(
            Number(inputs[0].value),
            Number(inputs[1].value),
            Number(inputs[2].value)
          );
          if (sum === 180) {
            console.log("Yay, the angles form a triangle!");
            outputBox.innerText = "Yay, the angles form a triangle!";
            outputBox.style.backgroundColor = 'green'

          } else {
            console.log("Oh Oh! The angle doesn't form a triangle");
            outputBox.innerText = "Oh Oh! The angle doesn't form a triangle";
            outputBox.style.backgroundColor = 'red'

          }
    }
    else{
        outputBox.innerText = "Please select all values";
        outputBox.style.backgroundColor = 'red'

    }
   
}

isTriangleBtn.addEventListener("click", isTriangle);
