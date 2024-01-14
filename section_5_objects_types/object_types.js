//types like this can be written as Interfaces
var person = {
    id: 1,
    name: 'John',
    passion: 'coding',
    isFunny: true
};
// console.log(person);
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last, " "));
}
printName({ first: 'Tom', last: 'Jenk' });
var coordinate = { x: 34, y: 3 };
console.log(coordinate);
//possibility to declare an object as a type
//here: {x:number,y:number} instead of "string,void etc.."
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
//Excess properties
//add another param even though printName hasn't been declared that way
// printName({first:"Mick",last:"Jagger",age:80}) ==> won't work
// but:
var singer = { first: "Mick", last: "Jagger", age: 80 };
printName(singer);
// no complains: it's a TS convention to keep functions clean
