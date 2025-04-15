const prompt = require('prompt-sync')({sigint:true});

function calculator(num1, num2){
    const sum = num1+num2;
    const sub = num1-num2;
    const div = num1/num2;
    const mul = num1*num2;
    // return(sum, sub, div, mul)
    console.log("sum  is: ",sum, '\nsub is: ',sub,'\ndiv is: ',div,'\nmultiply is: ',mul);
};

const num1 = parseInt(prompt("Enter the first value: "));
const num2 = parseInt(prompt("Enter the second value: "));

calculator(num1, num2);