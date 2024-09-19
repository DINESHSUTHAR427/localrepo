// JavaScript Array Methods
//  1 .JavaScript Array length
let courses = ["hindi", "english", "math", "scinces"];
console.log(courses.length);


// 2. JavaScript Array toString() Method



// 3. JavaScript Array join() Method
// uses a specified separator between each element in the resulting string.
// let courses = ["html","css","js","react"];
// console.log(courses.join('|'));

// 4. JavaScript Array delete Operator
//  is used to delete the given value which can be an object, array, or anything.
// let emp ={
//     firstname:"dinesh",
//     lastname:"kumar",
//     age:28,
// }
// console.log(delete emp.salary);
// console.log(emp);


// 5. JavaScript Array concat() Method
// is used to concatenate two or more arrays and it gives the merged array.
// let dinesh =["a", "b", "c", "d " ];
// let kumar =["e", "f", "g"];
// let newArr = dinesh.concat(kumar);
// console.log(newArr);


//  6.JavaScript Array flat() Method
// Creating multilevel array

// Flat the multilevel array
// const flatArr= arr.flat(Infinity);
// console.log(flatArr);

// Javascript Array.push() Method
//  is used to add an element at the end of an Array
// let numarr = [10,20,30,40,50,60];
// numarr.push(70,80);
// console.log(numarr);

// Javascript Array.unshift() Method
// The unshift() method is used to add elements to the front of an Array.
// let numarr = [10,20,30,40,50,60];
// numarr.unshift(70,80);
// console.log(numarr);


// JavaScript Array.pop() Method
// The pop() method is used to remove elements from the end of an array.
// let numarr = [10,20,30,40,50,60];
// numarr.pop();
// console.log(numarr);

// JavaScript Array.shift() Method
// The shift() method is used to remove elements from the beginning of an array 
// let numarr = [10,20,30,40,50];
//  numarr.shift();
//  console.log(numarr);


// JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments
// (ye cack ki slice ki tarh element ke pises kut karta hai)

// examples.slice
// let arr = ["html","css","javascript","reactjs","node.js"]
// let newarr = arr.slice(1,3)
// console.log(newarr);


// JavaScript Array.splice() Method
// The splice() method is used to Insert and Remove elements in between the Array.
// 1.postion ,2 how many Element remove, 3 new element replace 

// examples.splice 
// let arr = ["html","css","javascript","reactjs","node.js"]
// let newarr = arr.splice(1,3, "python")
// console.log(newarr);

// Array.prototype.map()
// The map() method of Array instances creates a new array
// let arr = [45,23,21];
// let a = arr.map((value,index,array ) => {
//     console.log(value, index, array);
//     return value + index;
// })
// console.log(a);

// Array filter method
// let arr1 = [45, 46,22,9,3,65,8,9,43]
// let a2 = arr1.map((a) => {
//     return a<10
// })
// console.log(a2);

// array reduce method
// let arr3 = [45, 46,22,9,3,65,8,9,43]
// let a3 = arr3.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// })
// console.log(a3);


// foreach loop
let array = [1, 2, 3, 4, 5]
array.forEach(element => {
    console.log(element * element);
    
});