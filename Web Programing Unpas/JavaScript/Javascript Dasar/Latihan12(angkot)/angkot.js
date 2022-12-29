var penumpang = ['jholin',undefined,'movic'];
// Tambah penumpang
function tambahPenumpang(nama,penumpang) {

if( penumpang.length == 0) {
    penumpang.push(nama);
    return penumpang;
} else {
    for(var i = 0; 1 < penumpang.length; i++) {
        if (penumpang[i] == undefined) {
            penumpang[i] = nama;
            return penumpang;
        } else if( i == penumpang.length -1 ) {
            penumpang.push(nama);
            return penumpang;
        }
    
    }
}

    
    // if (angkot <= 15) {
    //     // penumpang berikutnya duduk dikursi secara berurutan
    // } else if ( jumblahKursiPenumpang > jumblahPenumpang ) {
    //     // tambah penumpang dikursi yang kosong terlebih dahulu
    // }
    // // kita asumsikan kurisnya tidak akan penuh mau diisikan seberapapun banyak penumpang
    // // nama penumpang yang naik tidak boleh sama
}
// Hapus penumpang