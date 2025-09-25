const arr = [10, 12, 22, 64, 665, 666, 771, 801];
const target = 22;

function binarySearch(arr, target) {
  const arrLength = arr.length;

  if (arrLength < 2) {
    return arr[0] ?? -1;
  }

  const arrMid = Math.floor(arrLength / 2);
  if (arr[arrMid] === target) {
    return arrMid;
  } else if (arr[arrMid - 1] > target) {
    return binarySearch(arr.slice(0, arrMid - 1), target);
  } else {
    return binarySearch(arr.slice(arrMid + 1), target);
  }
}

console.log("binarySearch", binarySearch(arr, target));
