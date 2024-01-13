//creating a function with typed args
var encourageStudent = function (name) {
    return "Hey, ".concat(name, ", you're doing GREAT!");
};
// encourageStudent('you');
//encourageStudent(18) won't work
/*
function square(num) { //arg is of type any
    return num * num
}

square(3)
square("asd")
square(true)
*/
function greet(person) {
    return "Hi there, ".concat(person);
}
greet('Joey');
//multiple params
function doSomething(person, age, isFunny) {
    console.log(person, age, isFunny);
}
doSomething("Chickenface", 29, true);
// doSomething("Chickenface") //ts says it expected 3 not 1 arg
//adding default params
function hiThere(person) {
    if (person === void 0) { person = "stranger"; }
    return "hi here, ".concat(person);
}
//function return types
// what type should the function return?
var addFigs = function (x, y) {
    return x + y;
};
//reason for return type => obvious what the func returns
//if for example "return" is missing here: func returns "void" => "nothing"
//but ts figures out if there's a union type returned
function rando(num) {
    if (1 < 2) {
        return num.toString();
    }
    return num;
}
//rando is a union
rando(2); // rando(num:number): string | number 
//Anonymous Functions
//ts looks at context 
var colors = ["red", "blue", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
    //return color.toFixed()  --> won't work
});
//Void
//here's nothing returned
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return msg //--> won't work
}
//Never
//function should never return anything
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log('Game loops forever');
    }
}
