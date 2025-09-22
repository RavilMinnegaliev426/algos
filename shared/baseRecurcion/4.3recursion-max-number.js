function maxRecursion(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const first = arr[0];
  const maxOfRest = maxRecursion(arr.slice(1));
  return first > maxOfRest ? first : maxOfRest;
}

console.log(maxRecursion([2, 3, 4, 5, 3, 8, 3, 12, 32, 2, 1])); // 32
