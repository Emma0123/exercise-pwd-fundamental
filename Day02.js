//Write a code to find the sum of the numbers 1 to N. Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let angka = 7;
for (let start = 1; start < angka; start++) {
  result = angka + start;
}
console.log(result);

//Write a code to check whether the number is odd or even
let temperatur = 10;
let cuaca;

if(temperatur<0){
    cuaca = "Dingin";
} else if ( temperatur >=0 && temperatur <20){
    cuaca = "Sejuk";
} else if (temperatur <=20 && temperatur <30){
    cuaca = "Hangat";
} else {
    cuaca = "Panas";
}
console.log(cuaca);