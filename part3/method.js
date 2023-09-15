const biodata = {
    name: 'risano',
    email: 'risano@mgail.com',
    sayHelo: function(friend){
        console.log(`helo ${friend} apa kanbar, nama saya ${this.name}`)
    },
    penjumlahan (val1, val2){
        return val1 + val2
    }
}

biodata.sayHelo('budi')

const result = biodata.penjumlahan(10, 15)
console.log(result);