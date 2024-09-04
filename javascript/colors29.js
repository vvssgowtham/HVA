colors = ["red", "green", "blue"];
console.log(colors);

colors[1] = "yellow";
console.log(colors);

colors[3] = "purple";

//while loop
let j = 0;
while(j<colors.length){
    console.log(colors[j]);
    j++;
}

console.log(".......................")

//"of" is used for iterating over values
for (let color of colors) {
    console.log(color);
}

console.log(typeof(colors));
console.log(colors.length);

colors.push("orange");
colors.push("violet");

console.log(colors.pop());

console.log(colors.indexOf("yellow"))

colors.owner = "gowtham";
console.log(colors);

//Remember in always gives index of the array or whatever u were using 
for(prop in colors){
    console.log(prop+" : "+colors[prop]);
}