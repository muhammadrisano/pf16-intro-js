// tanpa desctructuring

// const biodata = {
//     name: 'risano',
//     email: 'risano@gmail.com',
//     age: 18,
//     isMerried: true
// }

// const name = biodata.name
// const email = biodata.email
// const age = biodata.age
// const isMerried = biodata.isMerried

// console.log(email);

// dengan destructuring
const name = "budi";

const biodata = {
  name: "risano",
  email: "risano@gmail.com",
  age: 18,
  isMerried: true,
  coba: null,
  address: {
    namaJalan: "jl. jati gaung no 140",
    kelurahan: "jati",
    kecamatan: "padang timur",
    kota: "padang",
  },
};

// const {namaJalan, kota} = biodata.address
// const {name : myName, email, age, isMerried, coba, address : {namaJalan, kota}} = biodata

// console.log(namaJalan);
// console.log(kota)

// const printEmail = ({ name, email, age }) => {
//   console.log(`Name saya : ${name}`);
//   console.log(`Email Saya: ${email}`);
// };
// printEmail(biodata);



// Destructuring untuk array

// tanpa destructuring arrya

// const hobies = ['goding', 'joging', 'gaming']

// const hobi1 = hobies[0]
// const hobi2 = hobies[1]
// const hobi3 = hobies[2]


// console.log(hobi1);
// console.log(hobi2);
// console.log(hobi3)

// dengan destructuring

const hobies = ['goding', 'joging', 'gaming']

const [hobi1, _, hobi3] = hobies

console.log(hobi1);
// console.log(hobi2);
console.log(hobi3)