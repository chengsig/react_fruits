import fruits from "./foods";
import { choice, remove } from "./helpers";

//randomly draw a fruit from the array
let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please.`);