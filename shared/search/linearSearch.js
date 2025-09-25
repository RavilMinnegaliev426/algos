const arr = [1, 5, 4, 3, 2, 7, 6, 8];
const target = 7;

function linearSearch(arr, target) {
  // возвращает число
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === target) {
  //       return i;
  //     }
  //   }

  // возвращает число
  // return arr.indexOf(target);

  //   возвращает строку
  for (const i in arr) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
console.log("linearSearch", linearSearch(arr, 22));
