function getInteger(promptMessage) {
  let integer;
  let condition = true;
  do {
    integer = parseInt(prompt(promptMessage));
    if (!isNaN(integer) && integer > 0) {
      condition = false;
      return integer;
    }
    alert('Please enter a number above 0.');
  } while (condition);
}

const number = getInteger('Enter a number greater than 0: ');

let table = '<table>';
for (let i = 1; i <= number; i++) {
  table += '<tr>';
  for (let j = 1; j <= number; j++) {
    table += '<td>' + i * j + '</td>';
  }
  table += '</tr>';
}
table += '</table>';

document.querySelector('#table').innerHTML = table;
