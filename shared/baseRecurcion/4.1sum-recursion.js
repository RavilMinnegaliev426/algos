function index(value) {
  if (value.length === 1) {
    return value[0];
  } else {
    console.log(value.pop());
    return value.pop() + index(value);
  }
}

console.log(index([2, 3, 4]));
