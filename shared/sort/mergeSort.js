// для больших массивов
// стабильное время работы O(log(n)*n)
// сохраняет порядок одинаковых элементов

// когда не нужно использовать:
// - кушает много памяти
// - сортировка маленького массива (до 30 элементов быстрее работает алгоритм со вставками)

const arr = [1, 5, 4, 3, 2, 7, 6, 8];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid, arr.length));

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const sortArr = [];
  let i = 0;
  let j = 0;

  // хитрый момент что можем влиять из одного цикла на другой посредством i,j
  // окончание нужно добавить в конец, оно уже отсортированно на первом этапе (concat())

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortArr.push(leftArr[i]);
      i++;
    }
    if (leftArr[i] > rightArr[j]) {
      sortArr.push(rightArr[j]);
      j++;
    }
  }

  return [...sortArr, ...leftArr.slice(i), ...rightArr.slice(j)];

  // return result.concat(leftArr.slice(i)).concat(right.slice(j))
}

console.log("return", mergeSort(arr));
