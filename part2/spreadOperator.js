// untuk array

// untuk memasukan arrya ke array lain

// const myHobies = ['ngoding', 'joging', 'gaming']

// const newHobies = [ ...myHobies, 'swimming', 'reading' ]
// console.log(newHobies);

// // untuk mengabungkan 2 array

// const makan1 = ['bakso', 'donat', 'nasi goreng']
// const makan2 = ['mie', 'martabak']

// const totalMakan = [...makan1, ...makan2]
// console.log(totalMakan);

// untuk object

const biodata = {
    name: 'risano',
    email: 'risano@mgail.com',
    age: 18
}
const biodata2 = {
    name: 'budi',
    email: 'budi@gmail.com',
    alamat: 'jl. jati padang',
    jender: 'laki-laki',
    isMerried: false,
    isLogin: true
}


// biodaata -> memory

// biodata2 -> biodaata

// const biodata2 = {...biodata}

// biodata2.name = 'budi'
// biodata2.age = 20

// console.log(biodata);
// console.log(biodata2);

const newBiodata = {
    ...biodata2,
    ...biodata,
}

console.log(newBiodata);