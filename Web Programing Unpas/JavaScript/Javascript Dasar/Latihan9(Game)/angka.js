var e = 0;
while( e < 1) {
    e++;
    var i = 0,
    lagi = '';
    selesai = '';

    // membangkitkan bilangan random
    // menangkap angka comp
    var comp = Math.floor(Math.random() *10 + 1);
    alert('ayoo main tebak angka !!')
    alert('masukkan angka dari 1-10 \nkamu hanya memiliki ' + (3-i) + ' kesempatan');
    while( i < 3 ) {

        // menangkap angka tebakan player
        var p = prompt('masukkan angka tebakan');

        // menentukan rules
        if( p == comp && p > 0 && p < 11 != null ) {
            hasil = 'anda BENAR!';
            i += 3;
        } else if( p < comp  && p > 0 && p < 11 != null ) {
            hasil = 'terlalu RENDAH!';
        } else if( p > comp  && p > 0 && p < 11 != null ) {
            hasil = 'terlalu TINGGI!';
        }
        i++;

        // tampilkam hasilnya
        if(p > 0 && p < 11 && p != null && p != comp && i < 3) {
            alert(hasil + '\nayo masih ada ' + (3-i) + ' kesempatan');
        } else if (p == comp) {
            alert( hasil + '\nangka yang dicari adalah angka ' + comp );
            lagi = confirm('ingin bermain lagi?');
            if( lagi == true ) {
            e = 0;
            }else {
                alert('terima kasih telah bermain!!!\n^-^');
                i = 3;
            }
        } else if( i >= 3 ) {
            alert( hasil + '\nkesempatan anda telah habis angka yang dicari adalah angka ' + comp);
            lagi = confirm('ingin bermain lagi?');
            if( lagi == true ) {
            e = 0;
            } else {
                alert('terima kasih telah bermain!!!\n^-^');
            }
        } else {
            selesai = confirm('angka yang anda masukkan salah !\n' + 'coba tekan "OK" dan masukkan angka dari 1-10 !' + '\n\njangan tekan "cancel" >.<');
            if (selesai == true) {
                i--;
            } else {
                alert('terima kasih telah bermain!!!\n^-^');
                i = 3;
            }

        }
        
    }
}
