const arr = [1, 5, 4, 3, 2, 7, 6, 8];

// умнее
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }
//   return arr;
// }

function insertionSort(arr) {
  const result = [arr[0]];
  while (result.length < arr.length) {
    let i = result.length;
    for (let j = result.length - 1; j >= 0; j--) {
      if (j === undefined) {
        result.unshift(arr[i]);
        break;
      } else if (result[j] < arr[i]) {
        result.splice(j + 1, 0, arr[i]);
        break;
      }
    }
  }
  return result;
}

console.log("return", insertionSort(arr));
