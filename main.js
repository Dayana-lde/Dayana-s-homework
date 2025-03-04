// foreach()
// дословно = для каждого, перебирает каждый элемент массива и выполняет определенную функцию к каждому из них

let arr =[1,2,3,4,5]
arr.forEach(num => console.log(num * 3));

function countArr(){
  if(arr !== 0){
    arr.forEach(num => console.log(num * 2));
    } 
}
countArr();


// map()
// выполняет определенную функцию к каждому элементу массива при этом создает новый массив

let arr1 =[1,2,3,4,5]
arr1.map(num => console.log(num + 5));

arr1.map(num => console.log(num - 5));

// sort()
// сортирует массив как строки но для лучшего использования надо задавать сравнение для сортировки, но при этом исходное значение массива меняется

let arr2 =[2,4,7,6,8,0,9]
arr2.sort((a,b) => b - a)
console.log(arr2)

arr2.sort(() => Math.random() - 0.5);
console.log(arr2)

// filter()
// фильтрует элементы массива создавая новый массив, то есть создает элемент с подходящими условиями

let arr3 = [2,5,6,7,4,7,9]
arr3.filter(num => console.log(num % 2 === 0))

let evennum = arr3.filter(num => num % 2 === 1);
console.log(evennum)

// reduce()
// метод сворачивает или объединяет все элементы в 1 значение по условию

let arr4 = [5,5,5]
let sum = arr.reduce((number, array) => number + array);
console.log(sum)

let summin = arr4.reduce((number, array) => number - array);
console.log(summin);
