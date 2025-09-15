import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log(list.print());
console.log(list.delete(list.get(2).value));
console.log(list.print());
console.log(list.get(2).value);
