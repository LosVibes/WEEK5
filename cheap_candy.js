function cheapCandy(products, price){
    const price = []
    for(let i = 0; i < price.length; i++){
        if(Number (price[i].Fee) <= costLimit){
            price.push( price[i].Title );
        }
    }
    return price;
}
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Snickers Bar", price: 2.79 },
    { product: "Reeses Cup", price: 5.99 },
    { product: "Butter Fingers", price: 3.79 },
    { product: "Twix Bars", price: 2.79 },
    { product: "Baby Ruth", price: 1.99 },
    { product: "Chocolate Turtles", price: 5.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// Which candies costs less than $4.00?
const cheaper_candy = cheapCandy(products, 4)
console.log(cheaper_candy.price)
// Which candies has "M&M" its name?
const mm_candy = candyWithMm(products, "M&M")
// Do we carry "Swedish Fish"?
const swedish_fish = swedishFish(products, "Swedish Fish")