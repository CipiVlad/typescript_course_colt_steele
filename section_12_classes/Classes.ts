/*
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/

class Person {
    public readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

}

let personA = new Person("Person A");
console.log(personA.name);

// personA.name = 'john' --> impossible: readonly