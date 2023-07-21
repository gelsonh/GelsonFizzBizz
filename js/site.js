// // Get the numbers from our form inputs
// // ENTRY POINT
// // Controller Function

function getValues() {
  let fizzNumber = document.getElementById("fizzValue").value;
  let buzzNumber = document.getElementById("buzzValue").value;
  let stopNumber = document.getElementById("stopValue").value;

  fizzNumber = Number(fizzNumber);
  buzzNumber = Number(buzzNumber);
  stopNumber = Number(stopNumber);

  if (
    isNaN(fizzNumber) == true ||
    isNaN(buzzNumber) == true ||
    isNaN(stopNumber) == true
  ) {
    Swal.fire({
      title: "Oops!",
      text: "Fizz Buzz only works with numbers.",
      icon: "error",
      backdrop: false,
    });
  } else if (fizzNumber > buzzNumber) {
    Swal.fire({
      title: "Oops!",
      text: "The Fizz number must be less than the Buzz number",
      icon: "error",
      backdrop: false,
    });
  } else if (stopNumber > 100) {
    Swal.fire({
      title: "Oops!",
      text: "The max number must be 100",
      icon: "error",
      backdrop: false,
    });
  } else {
    let numberArray = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);

    displayFizzBuzz(numberArray, fizzNumber, buzzNumber, stopNumber);
  }
}

function generateFizzBuzz(fizz, buzz, stop) {
  let array = [];

  for (let number = 1; number <= stop; number++) {
    if (number % fizz === 0 && number % buzz === 0) {
      array.push("FizzBuzz");
    } else if (number % fizz === 0) {
      array.push("Fizz");
    } else if (number % buzz === 0) {
      array.push("Buzz");
    } else {
      array.push(number);
    }
  }

  return array;
}

function displayFizzBuzz(numbersToDisplay) {
  let tableHtml = "";

  for (let i = 0; i < numbersToDisplay.length; i++) {
    let currentNumber = numbersToDisplay[i];

    let className = "";

    if (currentNumber % fizzValue === 0 && currentNumber % buzzValue === 0) {
      className = "FizzBuzz";
    } else if (currentNumber % fizzValue === 0) {
      className = "Fizz";
    } else if (currentNumber % buzzValue === 0) {
      className = "Buzz";
    }

    let tableRowHtml = `<tr><td class="${className}">${currentNumber} </td></tr>`;

    tableHtml += tableRowHtml;
  }

  document.getElementById("results").innerHTML = tableHtml;
}
