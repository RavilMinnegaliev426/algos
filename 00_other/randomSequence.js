import compareRandom from "./compareRandom.js";
import sequence from "./sequence.js";

export default (start, end) => {
  return sequence(start, end).sort(compareRandom);
};
