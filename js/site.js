// getting the numbers from the page,
// validate the inputs we collected,
// then pass the values to the functions
function getValues() {
  let fizz = document.getElementById("fizzValue").value;
  let buzz = document.getElementById("buzzValue").value;
  let stop = document.getElementById("stopValue").value;

  fizz = Number(fizz);
  buzz = Number(buzz);
  stop = Number(stop);

  // TODO: Make sure they're valid
  fizz = parseInt(fizz);
  buzz = parseInt(buzz);
  stop = parseInt(stop);

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

// create an array of values according
// to the FizzBizz rules e,g [1, 2, "Fizz", 4, "Buzz"]
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

function displayFizzBuzz(array) {
  let fizzBuzzHTML = "";

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let backgroundColor = "";

    fizzBuzzHTML += `<div class="col ${value}"> ${value} </div>`;
  }

  let resultsRow = document.getElementById("results");

  resultsRow.innerHTML = fizzBuzzHTML;
}
