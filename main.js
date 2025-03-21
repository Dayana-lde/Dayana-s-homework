function choosingArray(num){
    return num
    .toString()
    .split('')
    .map((num1,num2)=> num1 % 2 === 0 && num2  % 2 === 0 ? num1 + "-":num1)
    .join('');


}
console.log(choosingArray(24567));


let arr=[-3,3,-2,0,4,-1,1,2]
arr.sort((a,b) => a - b)
console.log(arr)


// let arr2=[1,3,6,6,6,7,2]
// function findSameArray(arr2){
//     return arr2
//     .toString()
//     .split()
//     .forEach((num1,num2) => num1===num2? console.log(num1): num1)
//     console.log(num1);
// }
// findSameArray(1,3,6,6,6,7,2)
