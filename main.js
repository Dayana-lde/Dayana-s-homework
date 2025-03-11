console.time();
function add(numl, num2, num3) {
    return numl + num2 + num3;
}
add(1,2,3)
console.timeEnd();
// Time Complexity = O(1) потому что у нас всего выполняется одна операция
// Space Complixety = O(1) потому что всего 3 параметра но доп память не нужна
// run time default: 0.00390625 ms

function sayHello(numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
    console. log("Hello");
    }
}
// Time Complexity = O(n) потому что у нас количество выполнений зависит от numberOfTimes
// Space Complixety = O(1) потому что выполняется n раз но память не возрастает и не создаются новые массивы и тд.
// run time через Perfomance Range: 0 ms – 4.72 s

function logMultiples(n) {
 for (var numl = 1; numl <= n; num1++) {
   for (var num2 = 1; num2 <= n; num2++) {
    console.log(num1 * num2);
    }
  }
}
// Time Complexity = O(n^2) потому что у нас один цикл вложенный в другой
// Space Complixety = O(1) потому что  2 переменные не зависят от n и меняются в самом цикле

function logMultiples2(a, b) {
    for (var num1 = 1; num1 <= a; num1++) {
        for (let num2 = 1; num2 <= b; num2++) {
            console.log("test");
        }
    }
}
// Time Complexity = O(a * b) потому что 1 внешняя операция, а вторая внутренняя 
// и думаю была подсказка, но без нее я бы поставила О(n^2)
// Space Complixety = O(1) потому что фиксированная память и 2 переменные не зависят от a,b и нет массивов и тд.

function sum(x) {
    for (let i = 0; i < x; i++) {
        console.log("test");
    }
}
// Time Complexity = O(x) потому что функция выполняется x раз (O(n))
// Space Complixety = O(1) потому что всего 1 параметр но память не выделяется за счет x
