const nama = [
    'Devyn Ramirez',
    'Harmony Duncan',
    'Clarissa Burgess',
    'Reilly Blanchard',
    'Zion Brooks',
    'Jovanny Mays',
    'Cindy Chase',
    'Kristin Mcdaniel',
    'Macey Sanford',
    'Alfredo Faulkner'
]

const masaKerja = [10, 5, 8, 7, 4, 10, 9, 8, 7, 10]

const gajiSenior = 7000000
const gajiJunior = 4000000
let karyawanJunior = [];
let u = 1;
for (let i = 0; i < nama.length; i++){
    if (masaKerja[i] < 6) {
        karyawanJunior.push(nama[i])
        console.log(`${u}. Karyawan ${nama[i]} mendapat gaji Rp ${gajiJunior}`);
        u++;
    } 
}

let karyawanSenior = [];
for (let i = 0; i < nama.length; i++){
    if (masaKerja[i] >= 6) {
        karyawanSenior.push(nama[i])
        console.log(`${u}. Karyawan ${nama[i]} mendapat gaji Rp ${gajiSenior}`);
        u++;
    }
}

console.log("Daftar karyawan senior:");
for (let i in karyawanSenior){
    console.log(`${parseInt(i) + 1}. ${karyawanSenior[i]}`)
}

let index = 1;
console.log("Daftar karyawan junior:");
for (const karyawan of karyawanJunior) {
    console.log(`${index}. ${karyawan}`);
    index++;
}

function tampilkanKaryawan(){
console.log("Daftar karyawan senior:");
for (let i in karyawanSenior){
    console.log(`${parseInt(i) + 1}. ${karyawanSenior[i]}`)
}
let index = 1;
console.log("Daftar karyawan junior:");
for (const karyawan of karyawanJunior) {
    console.log(`${index}. ${karyawan}`);
    index++;
}
    
}
tampilkanKaryawan()
function tampilkanGaji(){
    let k = 1;
    for (let i = 0; i < nama.length; i++){
        if (masaKerja[i] < 6) {
            karyawanJunior.push(nama[i])
            console.log(`${k}. Karyawan ${nama[i]} mendapat gaji Rp ${gajiJunior}`);
            k++;
        } else{
            console.log(`${k}. Karyawan ${nama[i]} mendapat gaji Rp ${gajiSenior}`);
            k++;
        }
    }
}
console.log(`Daftar gaji:`)
tampilkanGaji()