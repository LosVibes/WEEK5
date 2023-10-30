// ARRY AKA a List/Vector Ordered series of Values
let pets = ["Bianca","finneley","Dandy"];
console.log( pets[2]);//DANDY 2 from the beginning

//TWO INITIAL
let people = [
    {
        name: "Carlos",
        age:29
    },
    {
        name: "Meg",
        age:30
    }
];
//Add one more 
people.push({name:"Miguel", age:19});

people[1].name = "Megatron";///Update the last person
people[0].name = "Los";//update the first person

//for(START, STOP, HOW)
for(let index = 0; index < people.length; index++){
    console.log(people[index].name, people[index].age);
}
