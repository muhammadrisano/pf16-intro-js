// number
const age = 17;
const nilai = 7.5;
const suhu = -10;

const typeAge = typeof age
// console.log(typeAge);

// string
const name = "risano";
const hobi = "ngoding";
const grade = "B";
const phoneNumber = "9123123123";
const namaDepan = "budi";
const nik = "1293123123123";

const typeNIK = typeof(nik)
// console.log(typeNIK);

// boolean (true / false)
const isLogin = true;
const isMerried = false;

// function

function heloWorld() {
  console.log("helo world");
}

// array -> untuk menampung data yg lebih dari 1

const hobies = ["ngoding", "joging", "gaming"];
const myNilai = [80, 10, 20];

const products = [
  {
    name: "indomie goreng",
    desciption: "bla bla",
    price: 3500,
    stock: 10,
  },
  {
    name: "mie gelas kari ayam",
    description: "bla bla",
    price: 2000,
    stock: 100,
  },
  {
    name: "sari ayam bawang",
    description: "bla bla",
    price: 4000,
    stock: 40,
  },
];
// console.log(products[1].name);


// console.log(hobies[2]);

// object
const biodata = {
  name: "risano",
  age: 17,
  email: "risano@gmail.com",
  tempatLahir: "bandung",
  hobies: ["ngoding", "joging", "gaming"],
};
// biodata.email
// console.log(biodata.email);
// console.log(biodata.tempatLahir);
// console.log(biodata['name']);

// console.log(biodata.hobies[1]);

// null

let foods = null

// undifined
// let namaBelakang = undefined 


// const alamat ={
//     jalan: 'jaln jati apdang',
//     kel: 'jati',
//     kecamatan: 'padaing timur'
// }
// // console.log(alamat.name);
// console.log(makanan);

let minuman

// console.log(minuman);
const nilai1 = 'budi'
const nilai2 = 15
if(typeof(nilai1) !== 'number' || typeof(nilai2) !== 'number'){
    console.log('anda salah mengimputkan nlai');
}else{

    const hasil = nilai1 + nilai2
    console.log(hasil);
}

