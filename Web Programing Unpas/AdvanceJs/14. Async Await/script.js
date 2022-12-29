// Async
// Asynchronous Function
// "Sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya mengunakan penulisan yang syncrhonous (standard)."

// fungsi yang berjalan secara asynchronous
// megngasilkan (implisit) promise
// cara penulisan sama seperti synchronous function (function biasa)

// Asynchronous function
// "Sebuah async function dapat memiliki keyword await di dalamnya untuk menghentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai."

// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));
// console.log(coba);

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err)
    }
}

cobaAsync();