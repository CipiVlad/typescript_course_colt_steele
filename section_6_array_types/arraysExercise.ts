// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = []

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string;
    price: number;
}

const coffe: Product[] = [];
coffe.push({ name: 'Mocca', price: 1 }, { name: 'cappuchino', price: 5 })
// console.log(coffe);

const tshirt: Product[] = [];
tshirt.push({ name: 'nike', price: 20 }, { name: 'adidas', price: 240 })


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products: Product[]): number {
    //where to save the total amount?
    let total = 0;

    //since there are more products we need to iterate, so:
    for (let product of products) {
        total += product.price
    }
    return total
}


const sumCoffe = getTotal(coffe)
const sumTShirts = getTotal(tshirt)
console.log(sumCoffe, sumTShirts);
