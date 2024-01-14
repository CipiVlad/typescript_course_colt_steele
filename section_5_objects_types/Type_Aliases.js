//Type Alias
//reusable objects
//instead of writing object types
//write seperat type alias
var sayHappyBirhtday = function (person) {
    return "Hi ".concat(person.name, ", congrats on turning ").concat(person.age);
};
console.log(sayHappyBirhtday({ name: 'Missy', age: 33 }));
function doublePoint(point) {
    return { x: point.x * 2, y: point.y };
}
console.log(doublePoint({ x: 2, y: 3 }));
var optionalPointZ = { x: 1, y: 2, z: 3 };
console.log('I am optional: ', optionalPointZ);
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "unchained melody",
    artist: "someone",
    numStreams: 1239084,
    credits: {
        producer: 'joe',
        writer: 'mim'
    }
};
//result
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
var user = {
    id: 123,
    username: 'jimsi'
};
console.log(user.id);
var happyFace = {
    radius: 80,
    color: 'yellow'
};
console.log(happyFace);
var catDog = {
    numLives: 9,
    breed: 'wolf',
    age: 4
};
console.log(catDog);
