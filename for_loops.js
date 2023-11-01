let result = [];
const n = 7;
const stringToRepeat = "I Love Loops"+"," + " " ;
for (let i = 0; i < n; i++) {
    result.push(stringToRepeat);
}
result = result.join("");
console.log(result);