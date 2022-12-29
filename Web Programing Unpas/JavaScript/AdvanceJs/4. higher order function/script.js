const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if( angka[i] >= 3 ) {
//         newAngka.push(angka[i]);
//     };
// };

// filter
// const newAngka = angka.filter(function(a) {
//     return a >= 3;
// });

// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// map
// kalikan semia angka dengan 2
// const newAngka = angka.map( a => a* 2);
// console.log(newAngka);

// reduce
// jumblah seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => 
// accumulator + currentValue, 9);
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kalikan 3
// jublahkan
const hasil = angka.filter( a => a > 5)
    .map(a => a * 3) // 24, 27, 27
    .map(a => a / 2)
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);


// function yang kita simpan sebagai argument disebut callback