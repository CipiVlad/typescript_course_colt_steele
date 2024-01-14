//union types allow us to give a value a few different types
// use "|" (pipe-character)
var guessAge = function (age) {
    return "Your age is: ".concat(age);
};
// const johnnyAge = guessAge('22');
var johnnyAge = guessAge(22);
// const johnnyAge = guessAge({ age: 22 }) ==> not possible ==> either string or number
console.log(johnnyAge);
var coordinates = { x: 1, y: 22 };
//=> change it 
coordinates = { lat: 123.2, long: 345.344 };
// Type Narrowing w/ Union Types
function printAge(age) {
    console.log("you are ".concat(age, " years old."));
}
// printAge(2)
// printAge("88")
function calcTax(price, tax) {
    // return price * tax //can't multiply string with number
    // type check with Type Narrowing --> if price is a string do "x",, if it's a number do "y"
    if (typeof price === "string") {
        return parseFloat(price); //convert to Number
    }
    //price has to be a number
    return price * tax;
}
var ex1 = calcTax(1, 3);
var ex2 = calcTax("1", 3);
console.log(typeof ex1, ex1);
console.log(typeof ex2, ex2);
//create an array that holds more than one Type
var stuff = [1, "1"];
// const stuff: number[] | string[] = [1, "1"]; ==> it's different; saying: either array of numbers or strings
//narrowing with Array Types
var coords = [];
coords.push({ lat: 2, long: 2 });
coords.push({ x: 2, y: 2 });
//Literal Types
var zero = 0;
// zero = 5; ==> not possible!!!
var mood;
mood = 'Happy';
var today = 'Monday';
//A function with a literal + union type paraeter
var giveAnswer = function (answer) {
    return "The answer is ".concat(answer);
};
giveAnswer('yes');
// giveAnswer('well, i am not really sure...') ==> won't work
