let count = 10
while(count > 0){
    console.log(count);
    count--;
} 
console.log("BLAST OFF")

//2 lines shorter 
for(i=10;i>0;i--){
    console.log(i)
}
console.log("BLAST OFF")

list = ["apple", "banana", "cherry", "zebra"];

//loob backwards 
for(i=list.length-1; i >= 0; i--){
    console.log(list[i])
}

//traditional loop forwards 
for(i=0; i < list.length; i++){
    console.log(list[i])
}