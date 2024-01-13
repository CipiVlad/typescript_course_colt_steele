//creating a function with typed args
const encourageStudent = (name: string) => {
    return `Hey, ${name}, you're doing GREAT!`;
}

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

function greet(person: string) {
    return `Hi there, ${person}`
}

greet('Joey');

//multiple params
function doSomething(person: string, age: number, isFunny: boolean) {
    console.log(person, age, isFunny);

}
doSomething("Chickenface", 29, true)
// doSomething("Chickenface") //ts says it expected 3 not 1 arg



//adding default params
function hiThere(person: string = "stranger") {
    return `hi here, ${person}`
}

//function return types
// what type should the function return?

const addFigs = (x: number, y: number): number => {
    return x + y
}

//reason for return type => obvious what the func returns
//if for example "return" is missing here: func returns "void" => "nothing"


//but ts figures out if there's a union type returned
function rando(num: number) {
    if (1 < 2) {
        return num.toString();
    }
    return num;
}

//rando is a union
rando(2) // rando(num:number): string | number 



//Anonymous Functions
//ts looks at context 
const colors = ["red", "blue", "yellow"]
colors.map(color => {
    return color.toUpperCase()
    //return color.toFixed()  --> won't work
})




//Void
//here's nothing returned
function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
    // return msg //--> won't work
}



//Never
//function should never return anything
function makeError(msg: string): never {
    throw new Error(msg)
}

function gameLoop(): never {
    while (true) {
        console.log('Game loops forever');
    }
}



