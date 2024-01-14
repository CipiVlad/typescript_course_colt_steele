// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 1;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = ["1"];
var Beginner = "Beginner";
var Id1 = {
    name: 'Paul',
    age: 1,
    sport: "ski",
    level: "Advanced"
};
console.log(Id1);
// Create an array called colors that can hold a mixture of RGB and HSL color types
var a = [{ r: 250, g: 200, b: 129 }];
console.log(a);
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    if (typeof name === "string") {
        console.log("Hello ".concat(name));
    }
    else {
        var txt = "";
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var x = name_1[_i];
            txt += "Hello ".concat(x, ", ");
        }
        console.log(txt);
    }
}
var greetMiri = greet('Miri');
var greetGroup = greet(['Miri', 'Simon']);
