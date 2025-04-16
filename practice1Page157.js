const prompt = require('prompt-sync')({sigint:true});

// let a = prompt();
// let array = a.split(",");
// console.log(array);
// console.log(array[2]);

// let input = prompt("Enter a list of items separated by commas:");
// let array = input.split("  "," ");

// console.log(array);

// const arraysize = prompt('Enter the size of array: ');
// const arrays = [];

// for(let i = 0; i<=arraysize; i++){
//     arrays[i] = prompt('Enter array value: ');
// };
// for(let i = 0; i<=arraysize; i++){
//     console.log(arrays[i])
// }
// console.log(arrays[2]);


function arrays(num){
    const lengthOfArray = num.length;
    console.log(lengthOfArray);
    if(lengthOfArray%2 == 0){
        console.log("Array length is a Even number.");
    
    }else{
        console.log('array length is a odd number.');
    }
}
// arrays([4,5,6,7,8,9]);

const arr = prompt("Enter your array: ");
const sp = arr.split(" ",);
// const leng = sp.length;

console.log( arr, sp, sp[3]);
arrays(sp);
