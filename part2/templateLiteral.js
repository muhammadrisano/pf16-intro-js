const nilaiIPA = 80
const nilaiIPS = 70

// nilai IPA saya adalah 80
// nilai IPA saya adalah 70
// dan rata-rata dari kedua nilai adalah = 75

// concate
const text = 'nilai IPA saya adalah '+ nilaiIPA + '\n' + 
                'nilai IPS saya adalah '+ nilaiIPS + '\n' + 
                'dan rata-rata dari kedua nilai adalah '+ ((nilaiIPA + nilaiIPS) /2) 
console.log(text)

const text2 = `nilai IPA saya adalah ${nilaiIPA}
nilai IPS saya adalah ${nilaiIPS}
dan rata-rata dari kedua nilai adalah ${(nilaiIPA +nilaiIPS)/2}`
console.log(text2);
