const daftarSiswa = [
    {
        nama : 'Rosa',
        jenKel : 'Perempuan',
        umur : '17',
        wfavorit : 'Kuning',
        seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama : 'Ambar',
        jenKel : 'Laki-laki',
        umur : '16',
        wfavorit : 'Merah',
        seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama : 'Rizki',
        jenKel : 'Perempuan',
        umur : '16',
        wfavorit : 'Ungu',
        seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama : 'Mila',
        jenKel : 'Perempuan',
        umur : '18',
        wfavorit : 'Biru',
        seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama : 'Bagas',
        jenKel : 'Laki-laki',
        umur : '15',
        wfavorit : 'Coklat',
        seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    }
]

let mode = 'tambah';

const tampilkanSiswa = () => {
    const tblSiswa = document.getElementById('tblSiswa')
    tblSiswa.innerHTML = "<tr> <th>No</th> <th>Nama</th> <th>Jenis Kelamin</th> <th>Umur</th> <th>Warna</th> <th>Edit</th> <th>Hapus<th> </tr>";
    for (let i in daftarSiswa){
        console.log(`${parseInt(i)+1}. Siswa dengan nama ${daftarSiswa[i].nama} ber jenis kelamin ${daftarSiswa[i].jenKel}. Menginjak usia ${daftarSiswa[i].umur} dan menyukai warna ${daftarSiswa[i].wfavorit}.`)
        tblSiswa.innerHTML += `<tr> <td>${parseInt(i)+1}</td> <td>${daftarSiswa[i].nama}</td> <td> ${daftarSiswa[i].jenKel}</td> <td>${daftarSiswa[i].umur}</td> <td>${daftarSiswa[i].wfavorit}</td> <td><button type="button" class="btn btn-warning" onclick = "editSiswa('${daftarSiswa[i].nama}')">Edit</button></td> <td><button type="button" class="btn btn-danger" onclick = "hapusSiswa('${daftarSiswa[i].nama}')">Delete</button>
</td> </tr>`
    }
}

const tambahSiswa = () => {
    const nama = document.getElementById('txtNama').value
    const jenKel = document.getElementById('jenKel').value
    const umur = document.getElementById('umurSiswa').value
    const wfavorit = document.getElementById('wFav').value
   
    const siswaBaru = {
     nama : nama,
     jenKel : jenKel,
     umur : umur,
     wfavorit : wfavorit,
     seragam : ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    }

    if (mode == 'tambah'){
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[mode] = siswaBaru;
    }

    document.getElementById('txtNama').value = ""
    document.getElementById('jenKel').value = ""
    document.getElementById('umurSiswa').value = ""
    document.getElementById('wFav').value = ""

    mode = 'tambah';

    tampilkanSiswa()
}

const cariIndex = (nama) => {
    for (let i = 0; i < daftarSiswa.length; i++){
        if (daftarSiswa[i].nama === nama){
            return i;
        }
    }
    return -1;
}

const hapusSiswa = (target) => {
    const index = cariIndex(target);
    if (index !== -1){
        daftarSiswa.splice(index, 1)
        tampilkanSiswa()
        console.log('Dihapus');}
}

const editSiswa = (target) => {
    const indexEdit = cariIndex(target);
    const siswaDiedit = daftarSiswa[indexEdit];
    document.getElementById('txtNama').value = siswaDiedit.nama;
    document.getElementById('jenKel').value = siswaDiedit.jenKel;
    document.getElementById('umurSiswa').value = siswaDiedit.umur;
    document.getElementById('wFav').value = siswaDiedit.wfavorit;

    mode = indexEdit;


    console.log(target)
    console.log(indexEdit)

    console.log(daftarSiswa[indexEdit])
    
}

const cancel = (target) => {
    document.getElementById('txtNama').value = ""
    document.getElementById('jenKel').value = ""
    document.getElementById('umurSiswa').value = ""
    document.getElementById('wFav').value = ""
    mode = 'tambah'
}

window.onload = tampilkanSiswa;