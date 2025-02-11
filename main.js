/* 
programma che stampa i numeri da 1 a 100

SE il numero è divisibile per 3 stampa Fizz
SE il numero è divisibile per 5 stampa Buzz

SE il numero è divisibile per 3 e 5 stampa FizzBuzz
*/

for (let i = 1; i < 101; i++) {             // definisco la variabile i, se è inferiore a 100 aumenta i di 1
  if (i % 3 == 0 && i % 5 == 0) {           // se i è divisibile senza resto per 3 e 5
    console.log("FizzBuzz");                // stampo fizzbuzz
  } else if (i % 3 == 0) {                  // se i è divisibile senza resto per 3
    console.log("Fizz");                    // stampo fizz
  } else if (i % 5 == 0) {                  // se i è divisibile senza resto per 5
    console.log("Buzz");                    // stampo buzz
  } else {                                  // se il numero non rientra nelle altre opzioni
    console.log(i);                         // stampa il numero
  }

}