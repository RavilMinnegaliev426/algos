import sequence from "../../00_other/sequence.js";
import binarySearch from "../src/binarySearch.js";

const list = sequence(1, 10);
const item = 3;

console.log("Item: " + item);
console.log("Sequence: " + list);
console.log("Index of item: " + binarySearch(list, item));
