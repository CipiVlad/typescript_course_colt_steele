# WORKFLOW PATTERNS

#1 run tsc --init

#2 mkdir src dist

#3 touch src/index.ts

#4 in tsconfig.json --> uncomment and change to "outDir":"./dist"

#5 in tsconfig.json --> "include":["src"]

#6 run "tsc -w" on the top level dir

#7 create index.html root:dir and put <scritp src="index.js"></script> in <body></body> and run cmd-line: open index.html // check browser console

#8 for constant listener in browser:
    * npm init -y
    * npm install lite-server 
    * change script:
        "dev":"lite-server"

    ########################################################
    !important:
    tsc -w in root dir must run to read all ts - files
    and
    lite server must read index.html with script index.js file

    make changes in index.ts to see live - changes
    ########################################################