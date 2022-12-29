// var angka = prompt('masukkan angka :');

// switch( angka ) {
//     case '1' :
//         alert('yang anda masukkan angka 1');
//         break;
//     case '2' :
//         alert('yang anda masukkan angka 2');
//         break;
//     case '3' :
//         alert('yang anda masukkan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukkan salah')
// }
//  HATI-HATI PROMPT MENGEMBALIKAN NILAI STRING BUKAN NUMBER!!!

var item = prompt('masukkan nama makanan / minuman : \n(cnth: nasi, daging, susu, hamburger, softdrink)');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukkan nama makanan / minuman yang salah!');
        break;
}
