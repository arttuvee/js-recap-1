const numbers = [];

for (let i = 0; i < 5; i++) {
  const userPrompt = prompt('Enter a number:');
  numbers.push(userPrompt);
}

document.querySelector('#target').innerHTML = 'Numbers: ' + numbers;

const checkNumber = prompt('Enter a number to check if it is in the array:');
if (numbers.includes(checkNumber)) {
  alert('The number ' + checkNumber + ' is already in the array.');
} else {
  alert('The number ' + checkNumber + ' is not in the array.');
}

numbers.pop();
document.querySelector('#target2').innerHTML = 'Uptaded numbers: ' + numbers;

numbers.sort(function (a, b) {
  return a - b;
});

document.querySelector('#target3').innerHTML = 'Sorted numbers: ' + numbers;
