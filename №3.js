/*Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и 
 возвращает массив с результатами вызовов. Она нам пригодится для отладки:

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ] */

function take (gen,x) {
    var arr=[];
    return function gen(){
        arr.push[x];
    }
}
var gen2=sequence(0, 2);
console.log(take(gen2, 5))