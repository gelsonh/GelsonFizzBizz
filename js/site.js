
// Get the user input values ​​and validate them
function getValues() {
  // Use const for variables that do not change value
  const fizzInput = parseInt(document.getElementById("fizzValue").value);
  const buzzInput = parseInt(document.getElementById("buzzValue").value);
  const stopInput = parseInt(document.getElementById("stopValue").value);

  // Use Number.isInteger to check if values ​​are integers
  // Use && to combine conditions
  if (
    Number.isInteger(fizzInput) &&
    Number.isInteger(buzzInput) &&
    Number.isInteger(stopInput) &&
    stopInput <= 100 &&
    stopInput > 0
  ) {
    // Call functions to generate and display the result
    const fizzBuzzArray = generateFizzBuzz(fizzInput, buzzInput, stopInput);
    displayFizzBuzz(fizzBuzzArray);
  } else {
    // Display an error message using Swal.fire
    Swal.fire({
      title: "Oh no!",
      text: "Please enter valid integer numbers and ensure the final number is less than 100",
      icon: "error",
      backdrop: false,
    });
  }
}

// Create an array of values ​​according to FizzBuzz rules
function generateFizzBuzz(fizz, buzz, stop) {
  // Use let for variables that can change value
  let array = [];

  // Use a for loop to iterate over numbers from 1 to the final value
  for (let number = 1; number <= stop; number++) {
    // Use a ternary operator to assign the appropriate value to the array
    // Use the modulo operator (%) to check if the number is divisible by fizz or buzz
    array.push(
      number % fizz === 0 && number % buzz === 0
        ? "FizzBuzz"
        : number % fizz === 0
        ? "Fizz"
        : number % buzz === 0
        ? "Buzz"
        : number
    );
  }

  return array;
}

// Display the array of values ​​on the page
function displayFizzBuzz(array) {
  // Use a string variable to store the HTML
  let fizzBuzzHTML = "";

  // Use a for...of loop to iterate over the array elements
  for (let value of array) {
    // Use a string variable to store the CSS class
    let className = "";

    // Use a switch structure to assign the appropriate class based on the value
    switch (value) {
      case "Fizz":
        className = "fizz-color";
        break;
      case "Buzz":
        className = "buzz-color";
        break;
      case "FizzBuzz":
        className = "fizzbuzz-color";
        break;
    }

    // Use template literals to create the HTML with the value and the class
    fizzBuzzHTML += `<div class="col ${className}"> ${value} </div>`;
  }

  // Use the innerHTML method to insert the HTML into the element with id "results"
  document.getElementById("results").innerHTML = fizzBuzzHTML;
}
