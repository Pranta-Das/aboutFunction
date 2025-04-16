const prompt= require('prompt-sync')({sigint:true});

// function arrayCheck(arrays){

// }

// const arraySize = prompt("Enter array size: ");
// const arrays = prompt("Enter an array with only numbers: ");
// const arraySplit = arrays.split(" ",);

// for(let i = 0; i<=arraySize; i++){
//     const a=arraySplit[i];
//     // console.log(typeof(a));
//     if(a%2 == 0){
//         console.log("This is even number : ", a);
//     }else{
//         console.log("This is an odd number: ", a);
//     }
// }

//doing this with function:

function arr(arrayss, splitArr, sizeArr){
    for(let i = 0; i<=sizeArr; i++){
        const ab=splitArr[i];
        // console.log(typeof(a));
        if(ab%2 == 0){
            console.log("This is even number : ", ab);
        }else{
            console.log("This is an odd number: ", ab);
        }
    }
}

const sizeArr = prompt("Enter array size: ");
const arrayss = prompt("Enter an array with only numbers: ");
const splitArr = arrayss.split(" ",);
arr(arrayss, splitArr, sizeArr);