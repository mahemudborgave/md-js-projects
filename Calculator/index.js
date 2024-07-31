console.log("Hello ");

let result = document.querySelector(".result");
let numButtons = document.querySelectorAll(".num");
let symButtons = document.querySelectorAll(".sym");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let firstOpr;
let secondOpr;
let operation;
let inputArray = new Array();

// console.log(result);

// console.log(numButtons);

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", () => {
    if (typeof inputArray[inputArray.length - 1] === "number") {
      let lastNumInArray = inputArray.pop();
      lastNumInArray = lastNumInArray + numButtons[i].textContent;
      console.log(lastNumInArray);
      inputArray.push(Number(lastNumInArray));
    } else {
      inputArray.push(Number(numButtons[i].textContent));
    }

    result.textContent = result.textContent + numButtons[i].textContent;
    console.log(inputArray);
  });
}

for (let i = 0; i < symButtons.length; i++) {
  symButtons[i].addEventListener("click", () => {
    inputArray.push(symButtons[i].textContent);
    result.textContent = result.textContent + symButtons[i].textContent;
    console.log(inputArray);
  });
}

clear.addEventListener("click", () => {
  result.textContent = "";
  inputArray = [];
});

equal.addEventListener("click", () => {
  console.log(inputArray);
  firstOpr = inputArray.pop();
  operation = inputArray.pop();
  secondOpr = inputArray.pop();

  console.log(firstOpr);
  console.log(secondOpr);
  console.log(operation);

  if (operation == undefined) {
    result.textContent = "Empty";
  } else if (operation == "+") {
    result.textContent = firstOpr + secondOpr;
  } else if (operation == "-") {
    result.textContent = secondOpr - firstOpr;
  } else if (operation == "*") {
    result.textContent = firstOpr * secondOpr;
  } else if (operation == "/") {
    result.textContent = secondOpr / firstOpr;
  } else {
    result.textContent = "Invalid";
  }
});
