2// Create a function that can create a triangle pattern according to the height we provide like the following
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// parameters : height ---> triangle height

function membuatSegitiga(a) {
    let c = 1;
    let b = "";

    for(let i=0; i< a; i++){
        for (let j=0; j<=i; j++){
            b += ` ${c.toString().padStart(2, '0')}`
             c++;
        }
        b +="\n";
    } 
    return b;
}
console.log(membuatSegitiga(4));


