// function init() {
//     // let nama = 'Jholin'; // local variable
//     return function (nama) { //  inner function (closure*)
//         console.log(nama); // akses ke parent variable
//     }
// }

// let panggilNama = init();
// panggilNama('Jholin');
// panggilNama('Daddy');

// let name = function (name) {
//     return console.log(name);
// }
// name('Gigo');
// name('Ntoro')



// factory function (function sesuai dengan function yg lain)
//  agar seolah2 kita punya private Method/variable

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatMalam);


let add = (function () {
    let penghitung = 0;
    return function () {
        return ++penghitung;
    }
})();

penghitung = 100;

console.log(add());
console.log(add());
console.log(add());

