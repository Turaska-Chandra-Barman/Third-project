// 1. Create a variable called carName, assign the value Volvo to it.
// Answer:
let carName = 'Volvo';
console.log(carName);  // output = Volvo;






// 2. On one single line, declare three variables with the following names and values:
// Answer:

// let firstName = 'John';
// let lastName = 'Deo';
// let age  = '35';

// console.log(firstName,lastName,age); // output = John, Deo , 35;






// 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y);
// Answer:


// let  x = 10;
// let y = 5;
// x = x * y;

// console.log(x); // output = x = 50;






// 4.Use comments to describe the correct data type of the following variables;
// Answer


let length = 16 ; // this is a numbar data type;
let last_Name = 'Jhonson'; // this is a string data type;

// const x = {
//     firstName:'Jhon',
//     lastName : 'Deo'
// }// this is a object  and complex data type or non-primitive data type;






//  5.Execute the function named myFunction;
//  Answer:


// function myFunction(){
//     alert('Hello World!');
// }

// myFunction(); // call a function







//   6.Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
//   Answer:

// let person = {
//     name: 'John',
//     age: 50
// }
// console.log(person.age) // output 50;
// console.log(person['age']); // output same;





// 7.The <button> element should do something when someone clicks on it. Try to fix it!;
// Answer:

function myFunction(){
    alert('Try to fix it!');
}





// 8.Array Related Question ;

//  1. Alert the number of items in an array, using the correct Array property;
// Answer:

const cars = ['Volvo','Jeep','Mercetes'];
console.log(cars.length); // number  = 3;


// 2. Change the first item of Brand to "Ford";
// Answer:

const Brand = ['Volvo', 'Jeep', 'Mercetes'];
Brand.splice(0,1,'Ford');

console.log(Brand) // output = ['Ford', 'Jeep', 'Mercetes']









// 9.Math Related Problems

// 1. Use the correct Math method to create a random number.
// Answer:

function getRandomInt(event) {
  return Math.floor(Math.random() * event);
}

console.log(getRandomInt(3)); // output = random numbar;

// 2. Use the correct Math method to return the largest number of 10 and 20.
// Answer:

let result = Math.max(10,20);
console.log(result); //output = largest value is 20;


// 3. Use the correct Math method to get the square root of 9;
// Answer:

let result2 = Math.sqrt(9);
console.log(result2); // output = 3;








// 10.comparison operator related problems! 


// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// Answer:

let x = 10;
let y = 5;

if( x > y){
    alert('true');
}



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
// Answer:

let age = 0;

let ageResult = age < 18 ? 'Too Young' : 'old enough';
console.log(ageResult) // output = Toop Young;