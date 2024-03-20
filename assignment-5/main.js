function getInteger(promptMessage) {
  let integer;
  while (true) {
    integer = parseInt(prompt(promptMessage));
    if (!isNaN(integer) && integer > 0) {
      return integer;
    }
    alert('Please enter a number above 0.');
  }
}

function calculateAndPrint(integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  document.querySelector('#output').innerHTML =
    `The sum of the integers from 1 to ${integer} is ${sum}.`;
}

const finalSum = getInteger('Enter a number greater than 0: ');
calculateAndPrint(finalSum);
