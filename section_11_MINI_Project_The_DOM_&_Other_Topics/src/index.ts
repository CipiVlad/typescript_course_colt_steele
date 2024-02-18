// function logMessageLive(msg: string): void {
//     if (msg !== null || msg !== undefined || msg !== '') {
//         console.info(msg);
//     }
//     else {
//         console.error('you need some message, maaan!!!')
//     }
// }

// logMessageLive('hello friends i am live in console.log()')


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//TS knows about DOM - Modell
// but it doesn't know: "Is there something with this id element that exists on the page?"

const btn = document.getElementById("btn")// ! --> by adding "!" you guarentee it's an HTML and not null

// console.log(btn);
//TS Non-Null Assertion Operator 
//hovering over btn: const btn = HTMLElement | null
//browser console returns "button#btn" proving it's an Element
// btn?.addEventListener("click", function () {
//     alert("clicked")
// })

//Non-Null Assertion Operator "!" --> guarenteed it's not be null
// btn?.addEventListener("click", function () {
//     alert("clicked")
// })





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
