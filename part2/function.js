// function declaration

// const nama = "risano"
function sayHelo(name){
    console.log(`helo ${name}, apa kabar !`);
    console.log('aplikasi saya');
    return
}

sayHelo()
// // sayHelo(nama)

// aplikasi penjumlahan  3 nilai

function penjumlahan(val1, val2, val3){
    const result = val1 + val2 + val3
    return result
}

const ipa = 80
const ips = 70
const mtk = 95

const hasil = penjumlahan(ipa, ips, mtk)
const penjumlahData = penjumlahan(10, 100, 40)

console.log(hasil);
console.log(penjumlahData);

// expression

// const sayHi = function(nama, umur){
//     const text = `helo ${nama} apakabar! , umur saya ${umur}`
//     return text
// }

// const textHi = sayHi('budi', 18)
// console.log(textHi);

// const myData = {
//     name: 'risano',
//     email: 'risano@mgailc.om',
//     age : 18
// }

// const sayHi = function(biodata){
//     const text = `helo ${biodata.name} apakabar! , umur saya ${biodata.age}`
//     return text
// }
// const hasilHi = sayHi(myData)

// console.log(hasilHi);


// arrow function
// const pengurangan = (val1, val2)=> val1 - val2

// const hasilPengurangan = pengurangan(100, 20)
// console.log(hasilPengurangan);

const sayBro = (nama) =>`helo bro ${nama} apa kabar !`
const textSayBro = sayBro('budi')

console.log(textSayBro);