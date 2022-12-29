// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//  ambil durasi masing2 video
    .map(item => item.dataset.duration)

// ubah durasi menjadi fLoat, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumblahkan semua detiknya
    .reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
    

// simpan di dom

console.log(jsLanjut);