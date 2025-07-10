// for(let i = 10; i >= 0; i--) {
//     console.log(`*`.repeat(i--));
   
// }
// let i=1;
// while(i <= 5) {
//     console.log(`*`.repeat(i++));
// }
// let j = 5;
// do {
//     console.log(`*`.repeat(j--));
// } while(j >= 1);
// function sayHello() {
//     console.log("Hello, World!");
// }
// sayHello();
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 10));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 10));

// function loopExample() {
//     for(let i = 0; i < 5; i++) {
//         console.log(`Loop iteration: ${i}`);
//     }
// }
// loopExample();

// function average(a, b) {
//     let avg = (a + b) / 2;
//     console.log("average", avg);
// }
// average(10, 20);

// function getMyName(firstName, lastName) {
//      let fullName= firstName + " " + lastName;
//      return fullName;
// }
// let fullName= (getMyName("Ronak", "Subedi"));
// console.log("Full Name:", fullName);

let person = function(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}
let person1 = new person("Ronak", 25);
let person2 = new person("Subedi", 30);
console.log(person1.name); // Ronak
console.log(person2.age); // 30
person1.introduce(); // My name is Ronak and I am 25 years old.
person2.introduce(); // My name is Subedi and I am 30 years old

let square = function(num) {
    let ans = num ** 2;
    return ans;
}
let ans = square(5);
console.log("Square of 5 is:", ans); // Square of 5 is: 25