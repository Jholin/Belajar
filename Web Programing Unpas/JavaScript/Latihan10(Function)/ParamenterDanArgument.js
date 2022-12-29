// Parameter
function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}


// Argument cara 1
var hasil = tambah(2,3);
console.log(hasil);

// Argument cara 2
var 
// a = parseInt(prompt('masukkan nilai 1 :')),
// b = parseInt(prompt('masukkan nilai 2 :')),
// hasil = tambah(a*2,b*2);
hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);



// Jika Parameter < Argument
// Argument lebih nya akan di abaikan
var coba = tambah(5, 10, 20);
console.log(coba);

// Jika Parameter > Argument
// Parameter yang lebih akan diisi nilai undefienr(nilai default).
function tambah3(a,b,c) {
    return a + b + c;
}
console.log(coba = tambah(5,10));

// Var arguments
function tambahI() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambahI(1,2,3,4,5);
console.log(coba)