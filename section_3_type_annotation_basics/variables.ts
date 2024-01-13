
/***************STRINGS**************** */
// let myVar: type = value
let helloWorld: string = 'hello world!';

let movieTitle: string = "Matrix";

//change to another string no problem
movieTitle = "Godfather"
//change to another type !!! no way!!!
// movieTitle = 23
//or try a string method if declared as integer



/***************NUMBER**************** */
let numCatLives: number = 9;
numCatLives += 1

/***************BOOLEANS**************** */
let gameOver: boolean = false;
//won't work if gameOver='true' etc.



//Type Inference
let tvShow = 'blabla';
tvShow = false //won't work

//Type: "any"

let thing: any = 'hello';
thing = 1;
thing = "string";
thing = true;
thing();
thing.toUpperCase();



