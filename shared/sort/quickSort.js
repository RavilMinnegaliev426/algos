// Когда использовать :
// - используется для больших массивов
// - эффективность по память

// когда не использовать :
// - если массив почти отсортирован, то алгоритм может деградировать до o(n^2), при не верном выборе опорного элемента
// - не сохраняет порядок одинаковых элементов

const arr = [1, 5, 4, 3, 2, 7, 6, 8];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // pivot - опорный элемент
  const pivot = arr[0];

  const minPivot = [];
  const maxPivot = [];
  const equalPivot = [];

  arr.forEach((element) => {
    if (element < pivot) {
      minPivot.push(element);
    }
    if (element > pivot) {
      maxPivot.push(element);
    }
    if (element === pivot) {
      equalPivot.push(element);
    }
  });

  return [...quickSort(minPivot), ...equalPivot, ...quickSort(maxPivot)];

  // return quickSort(minPivot).concat(equalPivot).concat(quickSort(maxPivot));
}

console.log("return", quickSort(arr));
