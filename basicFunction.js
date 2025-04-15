const prompt = require('prompt-sync')({sigint:true});



function number(num1, num2){
    const sum = (num1 + num2);
    console.log(sum);
}
console.log('enter first value: ');

const num1 = parseInt(prompt());
console.log('enter second value: ');
const num2 = parseInt(prompt());

number(num1, num2);