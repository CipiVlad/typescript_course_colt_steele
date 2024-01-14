// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var coffe = [];
coffe.push({ name: 'Mocca', price: 1 }, { name: 'cappuchino', price: 5 });
// console.log(coffe);
var tshirt = [];
tshirt.push({ name: 'nike', price: 20 }, { name: 'adidas', price: 240 });
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    //where to save the total amount?
    var total = 0;
    //since there are more products we need to iterate, so:
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
var sumCoffe = getTotal(coffe);
var sumTShirts = getTotal(tshirt);
console.log(sumCoffe, sumTShirts);
