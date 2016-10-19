/*Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. 
В результате должна получиться шахматная доска.*/

var result = "\n";
for (var line = 1; line <= 8; line++) {
  for (var column = 1; column <= 8; column++) {
    if (line%2==column%2) {
      result=result+"#"
    }
    else {
      result=result+" ";
    }
  }
  result=result +"\n"
  
}
console.log(result);