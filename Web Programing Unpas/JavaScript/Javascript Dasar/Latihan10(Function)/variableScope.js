    // ada yang bilang Global Scope / Window Scope (Objec paling luar didalam browser kita). 
var a = 1;

    //  Jika kita membuka function pada javascript = kita membuka function scope.
    // Dan apapun yang kita lakukan pada function, akan ber;aku pada function saja.

function tes() {
    var b = 2;
    console.log(b); // jika console.log didalam function, b dapat dikenali
    console.log(a); // dari dalam function kita bisa mengenali variable global scope / window scope.
}

tes();
/* console.log(b); */ // b is not defiend, jadi diluar tidak bisa mengenali b. 

// Kasus 2
var a = 1;

function tes1() {
    // name conflict
    var a = 2;
    console.log(a); // Juka console.log didalam function, var yang keluar variable lokal yaitu a = 2
} 
tes();
console.log(a); // jika console.log diluar function, yang keluar 2 karena var function berbeda dengan var window, dan var window tidak dapat ditimpa var function.

// Kasus 3
var a = 1;

function tes2() {
    //var a = 1; // var lokal.
    a = 2; // kalau gaada var lokal a, var global a yang akan dipakai, dan jadinya var global tertimpa.
}

tes2()
console.log(a); 

// kasus 4
function test3() {
    c = 2;
}
test3();
console.log(c); // hasilnya 2 karena javascript otomastis membuat var a pada global scope, gunakan "use strict"; jika ingin varnya dibuat didalam function secara otomatis.

// kasus 5
var a = 1; // a nya var global

function tes6(a) { // a nya var lokal
    console.log(a) //  a nya var lokal
}

tes6(2); // yang keluar a = 2, argumennya lokal variable.
console.log(a); // yang keluar a = 1, karena mengacu pada global variable.
tes(a); // var global