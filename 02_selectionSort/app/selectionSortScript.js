import selectionSort from "../src/selectionSort.js";
import randomSequence from "../../00_other/randomSequence.js";

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Sorted: " + selectionSort(array));
