//COLLECTIONS HOLD MULTIPLE VALUES

//Array holds ordered list of values, accessed by offset postion (starts at 0)

let list = [] //Create an empty array

list.push("Carlos")   // 0 index
list.push("Skittles") // 1 index
list.push("Olive")   // 2 index

let dog = list[2]//copy the value at indez 2
console.log(dog) // Olive 


list[2] = "meg"

console.log( list[2] );

console.log(list) // ["Carlos", "skittles", "Meg" ]

//Objects hold unordered sets(bag) of values, accessed by keys like words looked up in the dictionary

let dict = {} // EMPTY OBJECT
dict.aaa = "APPLE"
dict.bbb = "BANANA"
dict["ccc"] = "CHERRY"

console.log( dict["bbb"]) // BANANA
console.log( dict.ccc ) // CHERRY
console.log( dict.aaa ) //APPLE
 