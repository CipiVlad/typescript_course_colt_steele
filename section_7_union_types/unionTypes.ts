//union types allow us to give a value a few different types
// use "|" (pipe-character)


const guessAge = (age: number | string) => {
    return `Your age is: ${age}`
}

// const johnnyAge = guessAge('22');
const johnnyAge = guessAge(22);
// const johnnyAge = guessAge({ age: 22 }) ==> not possible ==> either string or number
console.log(johnnyAge);



//type union

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = { x: 1, y: 22 }
//=> change it 
coordinates = { lat: 123.2, long: 345.344 }



// Type Narrowing w/ Union Types

function printAge(age: number | string): void {
    console.log(`you are ${age} years old.`);
}

// printAge(2)
// printAge("88")

function calcTax(price: number | string, tax: number) {
    // return price * tax //can't multiply string with number
    // type check with Type Narrowing --> if price is a string do "x",, if it's a number do "y"
    if (typeof price === "string") {
        return parseFloat(price) //convert to Number
    }

    //price has to be a number
    return price * tax
}

const ex1 = calcTax(1, 3)
const ex2 = calcTax("1", 3)
console.log(typeof ex1, ex1);
console.log(typeof ex2, ex2);


//create an array that holds more than one Type

const stuff: (number | string)[] = [1, "1"];
// const stuff: number[] | string[] = [1, "1"]; ==> it's different; saying: either array of numbers or strings

//narrowing with Array Types
const coords: (Point | Loc)[] = []
coords.push({ lat: 2, long: 2 })
coords.push({ x: 2, y: 2 })



//Literal Types

let zero: 0 = 0;
// zero = 5; ==> not possible!!!

let mood: 'Happy' | 'Sad';
mood = 'Happy'



//custom type
type DayOfWeek = 'Monday' | 'Tuesday'

let today: DayOfWeek = 'Monday'




//A function with a literal + union type paraeter
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}`
}

giveAnswer('yes')
// giveAnswer('well, i am not really sure...') ==> won't work


