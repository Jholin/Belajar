// Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Jholin Ibrahimovic',
    nrp : '043040023',
    email : 'jholin04@gmail.com',
    jurusan : 'Multimedia'
}

var mhs2 = {
    nama : 'Doddy',
    nrp : '033040007',
    email : 'doddy@gmail.com',
    jurusan : 'OTKP'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Deddy Cahyadi', '023040123', 'Deddy@yahoo.com', 'Masterpiece')


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    // return this;
    this.jurusan = jurusan;
}

// harus pakai new
var mhs4 = new Mahasiswa('Erik', '013040321', 'erik#icloud.com', 'Multimedia');