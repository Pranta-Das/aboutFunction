const prompt = require('prompt-sync')({sigint:true});
function evenSizedString(str){
    const size = str.length;
    return size;
    // console.log(str , size);
}
const size = evenSizedString('pranto');
// evenSizedString('joy');
console.log(size);

function stringSized(str){
    const size  = str.length;
    if(size%2 == 0){
        console.log(size ," is a even number");
    }else{
        console.log(size ," is a odd number");
    }
}
const str = prompt("Enter a word or set of character: ");
stringSized(str);