function logMessageLive(msg) {
    if (msg !== null || msg !== undefined || msg !== '') {
        console.info(msg);
    }
    else {
        console.error('you need some message, maaan!!!');
    }
}
logMessageLive('hello friends i am live in console.log()');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//TS knows about DOM - Modell
// but it doesn't know: "Is there something with this id element that exists on the page?"
var btn = document.getElementById("btn");
console.log(btn);
//TS Non-Null Assertion Operator 
//hovering over btn: const btn = HTMLElement | null
//browser console returns "button#btn" proving it's an Element
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
