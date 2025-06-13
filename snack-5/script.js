const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Soluzione standard
const evenNumbers = nums.filter(number => number % 2 === 0);
console.log("Array ottenuto con soluzione standard:");
console.log(evenNumbers)

console.log('------------------------------');

// Soluzione da TSO
const evenNumbersTSO = nums.filter(number => !(number % 2));
console.log("Array ottenuto con soluzione da TSO:");
console.log(evenNumbersTSO)