// const sayHelo = (name)=>{
//     console.log(`helo ${name}, apakabar`);
// }

// // const sayBro = sayHelo

// // sayBro()
// // sayHelo()

// const appRun = (name, callback)=>{
//     callback(name)
// }

// appRun('risano', sayHelo)

// const printNilai = (nilai)=>{
//     const text = `Hasil Nilai = ${nilai}`
//     console.log(text);
// }

// const hobies = ['goding', 'joging', 'gaming']

// const penjumalahn = (val1, val2, callback) => {
//   const result = val1 + val2;
//   return callback(result);
// };

// const hasilPenjumlahan = penjumalahn(30, 20, (nilai) => {
//   const text = `Hasil Nilai = ${nilai}`;
//     return text
// });
// console.log(hasilPenjumlahan);
// const arrayBaru = hobies.map((item, i)=>{
//     return item
// })  


const pembagian = (nilai1, nilai2) =>{
    const result = nilai1 / nilai2
    console.log(result);
}



const average = (val1, val2, val3, callback) =>{
    const hasilPenjumlahan = val1 + val2 + val3
    callback(hasilPenjumlahan, 3)
}
average(40, 50,60 , pembagian)