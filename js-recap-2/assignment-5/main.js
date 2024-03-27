function sortArray(numbers, order) {
  const sortedArr = [...numbers];
  if (order === 'desc') {
    sortedArr.sort(function (a, b) {
      return b - a;
    });
    return sortedArr;
  } else if (order === 'asc') {
    sortedArr.sort(function (a, b) {
      return a - b;
    });
    return sortedArr;
  } else {
    console.log('Enter a valid order (asc or desc).');
  }
}

const numbers = [3, 8, 17, 1, 10, 2];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
