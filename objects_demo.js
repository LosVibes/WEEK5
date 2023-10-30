//
let x = 123//initial
x = 999 //replace
x = 777 // replace again

console.log(x)

const animal = {
    strength: 18,
    intelligence: 12, 
    wisdom: 8,
    name: "Bianca",
    speak:() => console.log("Meow")
}
//ERROR IF CONST 
animal = { //REPLACE WHOLE OBJECT
    strength: 18,
    intelligence: 12, 
    wisdom: 8,
    name: "Bianca",
    speak:() => console.log("Meow")
}

animal.name = "Dandy";
animal.kind = "Dog"
animal.speak = () => console.log("Woof")

animal.name = "Finneley";
animal.kind = "Cat"
animal.speak = () => console.log("Purr")

console.log( animal.name )
console.log( animal.intelligence )
console.log( animal.kind )

animal.speak() 

//more like python down here
//console.log( animal["name"] )
//console.log( animal["intelligence"] )
