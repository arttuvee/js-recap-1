const numbers = [];
let number;

while (number != 'stop') {
  number = prompt('Enter numbers one by one, type stop to stop.');
  if (number == 'stop') {
    break;
  }
  numbers.push(Number(number));
}

const evenNums = [];
for (const i of numbers) {
  if (i % 2 == 0) {
    evenNums.push(i);
  }
}

if (evenNums.length < 1) {
  document.querySelector('#target').innerHTML = 'No even numbers found.';
} else {
  document.querySelector('#target').innerHTML = 'Even Numbers: ' + evenNums;
}
