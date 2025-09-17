function index(value) {
  if (value.length === 1) {
    return 1;
  } else {
    value.pop();
    return 1 + index(value);
  }
}

console.log(index([2, 3, 4, 5, 3]));
