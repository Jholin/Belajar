// function tampilAngka(n) {
//     console.log(n);
//     return tampilAangka(n-1);
// }

// tampilAngka(10)

function cetakAngka(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}

console.log(cetakAngka(10));

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));
/*  
    faktorial(5)
    5 * faktorial (4)
    5 * ( 4*( faktorial(3))
    5 * { 4 * ( 3 * ( 2 * faktorial(1)))}
    5 * ( 4 * ( 3 * ( 2 * 1))))
    5 * ( 4 * ( 3 * 2))
    5 * ( 4 * 6)
    5 & 24
    120
*/