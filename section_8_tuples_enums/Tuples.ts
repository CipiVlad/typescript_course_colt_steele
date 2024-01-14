//creating a Tuple with its type definition
let myTuple: [number, string];

//can assign it but keep the order
myTuple = [1, 'hi']

//not possible
// myTuple=['hi',1]

// fixed length of array
const color: [number, number, number] = [255, 22, 11]


type HTTP_Response = [number, string];

const Res_ok: HTTP_Response = [200, "ok"];
Res_ok[0] = 300;

//array of tuples
const responses: HTTP_Response[] = [[200, "ok"], [404, "Not Found"], [500, "internal server error"]];
console.log(responses);


