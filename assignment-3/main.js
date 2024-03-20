function getLength(promptMessage) {
  let length;
  while (true) {
    length = Number(prompt(promptMessage));
    if (Number.isFinite(length) && length > 0) {
      return length;
    }
    alert('Invalid input. Enter a number greater than 0');
  }
}

const a = getLength('Enter the lentgh of the first side of the triangle');
const b = getLength('Enter the lentgh of the second side of the triangle');
const c = getLength('Enter the lentgh of the third side of the triangle');

if (a == b && b == c) {
  document.querySelector('#type').innerHTML = 'Equilateral Triangle';
} else if (a == b || b == c || c == a) {
  document.querySelector('#type').innerHTML = 'Isosceles Triangle';
} else {
  document.querySelector('#type').innerHTML = 'Scalene Triangle';
}
