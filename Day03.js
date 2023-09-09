// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

let angka = 7;

for(let i=1; i<=10; i++) {
   console.log(`${angka} x ${i}`);}

//---------------------------------------------------------

//Write a code to check whether a string is a palindrome or not.
//PEMBAHASAN DI KELAS

//1. Deklarasi variable inpu, variable penampung reverse data dan variable result
let data = "Malam";
let dataReverse ="";
let result = "";

//2. Membalikkan data dengan cara mengakses dari karakter terakhir (ga kelihatan) variable penampung reverse
console.log( 
   data.charAt(4),
   data.charAt(3),
   data.charAt(2),
   data.charAt(1),
   data.charAt(0));

for (let i = data.length-1; i>=0; i--){
   dataReverse += data.charAt(i);
}
console.log(dataReverse);

//3. Jika data dan reverse data sama, maka result polindrome
if(data.toLowerCase() === dataReverse.toLowerCase()){
   result = "Palindrome";
} else{
   //4. Jika tidak, maka non polindrome
   result = "Non-Palindrome";
}

console.log(result);

