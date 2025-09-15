import checkVoter from "../src/vote.js";

let voted = {};

checkVoter("Mike", voted);
console.log(voted);
checkVoter("John", voted);
console.log(voted);
checkVoter("Mike", voted);
console.log(voted);
