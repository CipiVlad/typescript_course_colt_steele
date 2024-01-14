//types like this can be written as Interfaces

const person: {
    id: number,
    name: string,
    passion: string,
    isFunny: boolean
}
    = {
    id: 1,
    name: 'John',
    passion: 'coding',
    isFunny: true
}

// console.log(person);


function printName(person: { first: string, last: string }): void {
    console.log(
        `${person.first} ${person.last} `)
}
printName({ first: 'Tom', last: 'Jenk' })

let coordinate: { x: number, y: number } = { x: 34, y: 3 }
console.log(coordinate);


//possibility to declare an object as a type
//here: {x:number,y:number} instead of "string,void etc.."
function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}
console.log(randomCoordinate())

//Excess properties
//add another param even though printName hasn't been declared that way
// printName({first:"Mick",last:"Jagger",age:80}) ==> won't work
// but:
const singer = { first: "Mick", last: "Jagger", age: 80 }
printName(singer)
// no complains: it's a TS convention to keep functions clean
