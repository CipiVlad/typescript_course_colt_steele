//type narrowing when working with primitives
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    if (typeof value === "number") {
        return value * 3;
    }
}
// console.log(triple(2))
// Truthiness Guards
var letterArray = ['a', 'b', 'c'];
function printLetters(word) {
    if (!word) {
        //if word is null, don't loop over it
        console.log('No word was provided!');
    }
    else {
        //only loop if word exists/ is truthy
        letterArray.forEach(function (letter) { return console.log(letter); });
    }
}
// printLetters()
// Equality Guards
// test is only valid if value and data type are equal
function checkIfvalid(x, y) {
    if (x === y) {
        console.log(x, y);
    }
    else {
        throw new Error('unequal');
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodesDuration + " it's a tv show";
    }
    return media.duration + " it's a movie";
}
//what is it: movie or tv show?
// console.log(getRuntime({title:'Matrix', duration: 148}))
// console.log(getRuntime({title:'Vikings', numEpisodes:8, episodesDuration:45}))
