let fruits = ["apple","banana","orange","grape"];
console.log(fruits[0]);
console.log(fruits[1]);
// Adding element at begning
fruits.push("kiwi");
console.log(fruits);
// aDDING element to the begninng
fruits.unshift("mango");
console.log(fruits);
// removing the last elemnt 
let removedLast = fruits.pop();
let removedLast = fruits.shift();
// Finding index of an element
let indexofOrange = fruits.indexOf("orange");
// Iterating using a for loop
for (let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
// Slicing an array 
let citrus = fruits.slice(1,3);
console.log(citrus);
// Splicing an array (modifying original array)
let removed = fruits.splice(1,2,"pear","melon");
// Concatenating arrays
let moreFruits = ["grapefruits","pineapple"];
let allFruits = fruits.concat(moreFruits);