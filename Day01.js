// 1 Write a code to find area of rectangle.
// INPUT : legth, width
let length = 5;
let width = 10;

//PROCESS
result = length * width;

//OUPUT
console.log(result);



// 2 Write a code to find perimeter of rectangle. 
//INPUT : legth, width
let angkaA = 5;
let angkaB = 10;

//PROCESS
result = angkaA + angkaB;
//OUTPUT
console.log(result);

// 3 Write a code to find diameter, circumference and area of circle.
//INPUT
let diameter = 14 ;
let jari = 7;

//Diameter
//PROCESS
result = 2*jari;
//OUTPUT
console.log(result);

//Circumface
//PROCESS
result = 22/7 * diameter;
//OUTPUT
console.log(result);

//Area
//PROCESS
result = 22/7*jari*jari;
//OUTPUT
console.log(result);

// 4 Write a code to find angles of triangle if two angles are given
//INPUT
let a = 40
let b = 90

//PROCESS 
result = (180 -(a+b));

//OUTPUT
console.log(result);

// 5 Write a code to get difference between dates in days.
//INPUT
//10 Agustus 2023 - 5 September 2023
const date1 = new Date ('2023-08-10');
const date2 = new Date('2023-09-05');

//PROCESS
const timeDifferenceMs = date2-date1;
const daysDifference = Math.floor(timeDifferenceMs / (1000*60*60*24));
//OUTPUT
console.log(`Perbedaan kedua tanggal dalam hari: ${daysDifference}`);

// 6 Write a code to convert days to years, months and days.
//INPUT
const totalDays = 335;
const { years, months, days } = daysToYearsMonthsDays(totalDays);

//PROCESS
function daysToYearsMonthsDays(days) 
{
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);
    const finalDays = remainingDays % 30;

    return { years, months, days: finalDays };
}

//OUTPUT

console.log(`500 days is equivalent to:`);
console.log(`Years: ${years}`);
console.log(`Months: ${months}`);
console.log(`Days: ${days}`);