import { log } from "console";
// almost like "types"
// use interfaces to create reusable objects
// you describe an objects shape


interface Person {
    readonly id: number;
    first: string;
    last?: string;
    nickname?: string;
    age?: number;
}

function greetToBDay(person: Person) {
    return `Hi ${person.first}, you are ${person.age} years old.`
}

const person: Person = {
    id: Math.random() * 88,
    first: 'Joe',
    age: 12
}

log(greetToBDay(person))

const thomas: Person = {
    id: Math.random() * 88,
    first: 'Thomas',
    nickname: "Hardy",
}


interface Product {
    name: string,
    price: number,
    applDiscount(discount: number): number,
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applDiscount(discount: number) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice
        return newPrice
    },
}
log('new Price: ', shoes.applDiscount(0.4))



//Reopening Interfaces 
interface Dog {
    name: string;
    age: number;
}

//adding withouth error like in type

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: 'Elton',
    age: 1,
    breed: "he is austrailian shepherd",
    bark() {
        return 'woof woof'
    },
}
log(elton.bark())



//extending interface
interface ServiceDog extends Dog {
    job: 'drug sniffer' | "guide dog"
}

const chewy: ServiceDog = {
    name: 'chewy',
    age: 4.4,
    breed: 'Labrador',
    bark() {
        return 'bark'
    },
    job: 'drug sniffer'
}


//multiple inheritance from inheritance
interface User {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends User, Employee {
    skill: string
}

const pierre: Engineer = {
    id: 123,
    name: 'Pierre',
    email: 'p@g.com',
    skill: 'Typescript'
}

console.log(pierre);
