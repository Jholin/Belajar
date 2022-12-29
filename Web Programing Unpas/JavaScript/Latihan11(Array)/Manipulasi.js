// Manipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr);
    // var arr = [];
    // arr[0] = 'Jholin';
    // arr[1] = 'ibrahim';
    // arr[2] = 'movic';
    // arr[6] = '2B'; //jika ada yang terlewat akan dihitung undefined.

// 2. Menghapus isi array
// var arr = ["Jholin", "Ibrahim", "Movic"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["Jholin", "Ibrahim", "Movic", "2b"];
// for(var i = 0; i < arr.length; i++) {
//     console.log('Siswa ke-' + (1+i) + ' : ' +arr[i]);
// }


// Method pada array
var arr = ["Jholin", "Ibrahim", "Movic", 'Doddy', 'Fitri'];
// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy','Joko');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihaoysBerapa, elemenBaru, elemenBaru2, ...)
// arr.splice(2, 0, 'Doddy', 'fitri');
// arr.splice(1,2, 'Ibrahimovic', '12mm1');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
// var arr2 = arr.slice(1,4);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Jholin', 'Ibrahim', 'movic'];
// for( var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '))

// 8. sort
// console.log(angka.join(' - '));
// angka.sort(function(a,b){
//     return(a-b);
// });
// console.log(angka.join(' - '));

// 9. filter
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join(' - '));





















