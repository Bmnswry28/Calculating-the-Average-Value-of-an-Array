let numbers = [10 , 20 , 30 , 40 , 50];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
}

let average = sum / count;
console.log("Average:", average);