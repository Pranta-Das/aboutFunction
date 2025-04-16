const prompt = require('prompt-sync')({sigint:true});

// let a = prompt();
// let array = a.split(",");
// console.log(array);
// console.log(array[2]);

// let input = prompt("Enter a list of items separated by commas:");
// let array = input.split("  "," ");

// console.log(array);

const arraysize = prompt('Enter the size of array: ');
const arrays = [];

for(let i = 0; i<=arraysize; i++){
    arrays[i] = prompt('Enter array value: ');
};
for(let i = 0; i<=arraysize; i++){
    console.log(arrays[i])
}
console.log(arrays[2]);