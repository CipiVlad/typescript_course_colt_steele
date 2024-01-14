//Type Alias
//reusable objects
//instead of writing object types
//write seperat type alias

type Person = {
    name: string,
    age: number
}

const sayHappyBirhtday = (person: Person) => {
    return `Hi ${person.name}, congrats on turning ${person.age}`
}

console.log(sayHappyBirhtday({ name: 'Missy', age: 33 }));


type Point = {
    x: number,
    y: number,
    z?: number    //optional properties

}

function doublePoint(point: Point) {
    return { x: point.x * 2, y: point.y }
}

console.log(doublePoint({ x: 2, y: 3 }));

const optionalPointZ: Point = { x: 1, y: 2, z: 3 };
console.log('I am optional: ', optionalPointZ);


// Nested Objects
// reusable types for functions


type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string, writer: string }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: "unchained melody",
    artist: "someone",
    numStreams: 1239084,
    credits: {
        producer: 'joe',
        writer: 'mim'
    }
}

//result
const earnings = calculatePayout(mySong)
console.log(earnings);

printSong(mySong)



// readonly property
type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 123,
    username: 'jimsi'
}


console.log(user.id);
// user.id = 222; //not possible because readonly




//intersection type ==> combining Types
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 80,
    color: 'yellow'
}

console.log(happyFace);


//combine and add another key/value to a type

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & { age: number; }
const catDog: CatDog = {
    numLives: 9,
    breed: 'wolf',
    age: 4
}
console.log(catDog);
