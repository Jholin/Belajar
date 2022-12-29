var penumpang = [];

var tambahPenumpang = function(nama, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang diawak array.
        penumpang.push(nama);
        // kembalikan isi array & keluar dari function.
        return penumpang
    } 
    // jika sudah ada nama yang sama
    else{
        // trlusuri seluruh kursi dari awal.
        for(var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tsb.
                penumpang[i] = nama;
                // kembalikan isi array & keluar dari function.
                return penumpang;
            }
            // jika sudah ada nama yang sama.
            else if( penumpang[i] == nama ){
                // tampilkan pesan kesalahnnya
                console.log(nama + "Sudah ada didalam angkot.");
                // kembalikan isi array & keluar dari function.
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length -1){
                // tambah penumpang di akhir array
                penumpang.push(nama);
                // kembalikan isi array & keluar dari functiom.
                return penumpang;
            }
        }
    }
} 

var hapusPenumpang = function(nama,penumpang){
    if(penumpang.length == 0) {
        console.log('Angkot belum memiliki penumpang!');
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == nama){
                penumpang[i] = undefined;
                return penumpang;
            } else if(i == penumpang.length -1){
                console.log('penumpang tidak menaiki angkot yang anda pilih!!');
                return penumpang;
            }
        }
    }
}
