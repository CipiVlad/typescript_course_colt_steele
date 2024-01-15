"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
function greetToBDay(person) {
    return "Hi ".concat(person.first, ", you are ").concat(person.age, " years old.");
}
var person = {
    id: Math.random() * 88,
    first: 'Joe',
    age: 12
};
(0, console_1.log)(greetToBDay(person));
var thomas = {
    id: Math.random() * 88,
    first: 'Thomas',
    nickname: "Hardy",
};
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    },
};
(0, console_1.log)('new Price: ', shoes.applDiscount(0.4));
var elton = {
    name: 'Elton',
    age: 1,
    breed: "he is austrailian shepherd",
    bark: function () {
        return 'woof woof';
    },
};
(0, console_1.log)(elton.bark());
var chewy = {
    name: 'chewy',
    age: 4.4,
    breed: 'Labrador',
    bark: function () {
        return 'bark';
    },
    job: 'drug sniffer'
};
var pierre = {
    id: 123,
    name: 'Pierre',
    email: 'p@g.com',
    skill: 'Typescript'
};
console.log(pierre);
