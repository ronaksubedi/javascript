let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = 6;
console.log(a + b + c + d + e);
a = a + 1;
console.log(a);
a+= 1;
console.log(a);
console.log(10>=5);
console.log(`5`==5);
console.log(`5`===5);
let age = 18;
let status1 = age >= 18 ? "Adult" : "Minor";
console.log(status1);
let ans1=(true && true && true);
let ans2=(true && false && true);
let ans3=(true || false || true);
let ans4=(false || false || false);
let ans5= !(true);
let ans6= !(false);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
console.log(ans6);
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
let day= 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
if (day === 1) {
    console.log("Monday");
}
else if (day === 2) {
    console.log("Tuesday");
}
else if (day === 3) {
    console.log("Wednesday");
}
else if (day === 4) {
    console.log("Thursday");
}
else if (day === 5) {
    console.log("Friday");
}
else if (day === 6) {
    console.log("Saturday");
}
else if (day === 7) {
    console.log("Sunday");
}
else {
    console.log("Invalid day");
}
let myAge = 18;
(myAge >= 18) ? console.log("Adult") : console.log("Minor");
