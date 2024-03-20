function getPoint(promptMessage) {
  let point;
  while (true) {
    point = prompt(promptMessage);
    const numbers = point.split(' ').map(Number);
    if (numbers.length === 2 && numbers.every(Number.isFinite)) {
      return numbers;
    }
    alert('Invalid input. Enter two numbers separated by a space.');
  }
}

const [x1, y1] = getPoint(
  'Enter the X and Y coordinates of the first point separated by a space: '
);
const [x2, y2] = getPoint(
  'Enter the X and Y coordinates of the second point separated by a space: '
);

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector('#distance').innerHTML =
  'Distance between points: ' + distance;
