"use strict";
const norma = {
    breed: "Silkie",
    eggPerWeek: 1,
    name: "Norma",
    age: 1
};
//run tsc index.ts to compile to index.js
// run tsc --watch index.ts | tsc --w index.ts for listening to changes
//working with multiple files --> farmstand.ts
//to compile farmstand.ts just run "tsc" to compile any ts files and all
//proved by: changes made in any file and it compiles to any ".js" file
//----------------------------
//tsconfig.json
/*compiler options:

// type
// what you type in this array will be compiled to .js - File
"files":[] --- other files will be ignored by ts

//better way:
create a folder which should include compiled files
i.e.: "src"
then place this in tsconfig.json like so:

{
"include":["src"]
}

or

{
"exclude":["dontTouch.ts"]
}

*/
///--------------------------
// OutDir
//where ts  should compile js  files
//common: 
//create folder "dist"
// uncomment in tsconfig.json "outDir"
// run commandline : tsc
