import randomSequence from "../../00_other/randomSequence.js";
import findSmallest from "../src/findSmallest.js";

const array = randomSequence(1, 10);
console.log("Sequence: " + array);
console.log("Index of smallest: " + findSmallest(array));
