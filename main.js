/* 
programma che stampa i numeri da 1 a 100

SE il numero è divisibile per 3 stampa Fizz
SE il numero è divisibile per 5 stampa Buzz

SE il numero è divisibile per 3 e 5 stampa FizzBuzz
*/

for (let i = 1; i < 100; i++) {             // definisco la variabile i, se è inferiore a 100 aumenta i di 1
  if (i % 3 == 0 && i % 5 == 0) {           // se i è divisibile senza resto per 3 e 5
    console.log("FizzBuzz");                // stampo fizzbuzz
  } else if (i % 3 == 0) {                  // se i è divisibile senza resto per 3
    console.log("Fizz");                    // stampo fizz
  }

}