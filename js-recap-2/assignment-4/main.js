function sortArray(numbers) {
  const sortedArr = [...numbers];
  sortedArr.sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

const numbers = [3, 8, 17, 1, 10, 2];

console.log(numbers);
console.log(sortArray(numbers));
