function getValues() {
  let fizz = parseInt(document.getElementById("fizzValue").value);
  let buzz = parseInt(document.getElementById("buzzValue").value);
  let stop = parseInt(document.getElementById("stopValue").value);

  if (
    Number.isInteger(fizz) &&
    Number.isInteger(buzz) &&
    Number.isInteger(stop) &&
    stop <= 100 &&
    stop > 0
  ) {
    let fizzBuzzes = generateFizzBuzz(fizz, buzz, stop);
    displayFizzBuzz(fizzBuzzes);
  } else {
    Swal.fire({
      title: "Oh no!",
      text: "Please enter valid integers and make sure the end number is below 100",
      icon: "error",
      backdrop: false,
    });
  }
}

// Create an array of values according to the FizzBizz rules e.g. [1, 2, "Fizz", 4, "Buzz"]
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


// Take in an array of values and display them on the page
function displayFizzBuzz(array) {
  let fizzBuzzHTML = "";

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let className = "";

    if (value === "Fizz") {
      className = "fizz-color";
    } else if (value === "Buzz") {
      className = "buzz-color";
    } else if (value === "FizzBuzz") {
      className = "fizzbuzz-color";
    }

    fizzBuzzHTML += `<div class="col ${className}"> ${value} </div>`;
  }

  document.getElementById("results").innerHTML = fizzBuzzHTML;
}


