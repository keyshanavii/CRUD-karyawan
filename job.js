const daftarKaryawan = [
    {
        nama : 'Devyn Ramirez',
        nik : '1111',
        masaKerja : '10',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Harmony Duncan',
        nik : '2222',
        masaKerja : '5',
        gaji : 'Rp4.000.000',
    },
    {
        nama : 'Clarissa Burgess',
        nik : '3333',
        masaKerja : '8',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Reilly Blanchard',
        nik : '4444',
        masaKerja : '7',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Zion Brooks',
        nik : '5555',
        masaKerja : '4',
        gaji : 'Rp4.000.000',
    },
    {
        nama : 'Jovanny Mays',
        nik : '6666',
        masaKerja : '10',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Cindy Chase',
        nik : '7777',
        masaKerja : '9',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Kristin Mcdaniel',
        nik : '8888',
        masaKerja : '8',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Macey Sanford',
        nik : '9999',
        masaKerja : '7',
        gaji : 'Rp7.000.000',
    },
    {
        nama : 'Alfredo Faulkener',
        nik : '1010',
        masaKerja : '10',
        gaji : 'Rp7.000.000',
    },
]



let mode = 'tambah';
let indexEdit = -1;

const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = "<tr> <th>No</th> <th>Nama</th> <th>NIK</th> <th>Masa Kerja</th> <th>Gaji</th> <th>Edit</th> <th>Hapus<th> </tr>";

    daftarKaryawan.forEach((karyawan, index) => {
        const row = tblKaryawan.insertRow();
        row.innerHTML = `<td>${index + 1}</td><td>${karyawan.nama}</td><td>${karyawan.nik}</td><td>${karyawan.masaKerja} Tahun</td><td>${karyawan.gaji}</td><td><button type="button" class="btn btn-warning" onclick="editKaryawan('${karyawan.nik}')">Edit</button></td><td><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${karyawan.nik}')">Hapus</button></td>`
    });
}

const tambahKaryawan = () => {
    const nama = document.getElementById('txtNama').value;
    const nik = document.getElementById('nikKaryawan').value;
    const masaKerja = parseInt(document.getElementById('masaKerja').value);
    const gaji = jmlGaji('masaKerja');
   
    const karyawanBaru = {
     nama : nama,
     nik : nik,
     masaKerja : masaKerja,
     gaji : gaji,
    }

    if (mode === 'tambah'){
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[indexEdit] = karyawanBaru;
    }

    resetForm();
    tampilkanKaryawan();
}




const cariIndex = (nik) => {
    return daftarKaryawan.findIndex(karyawan => karyawan.nik === nik)
}

const hapusKaryawan = (nik) => {
    const index = cariIndex(nik);
    if (index !== -1){
        daftarKaryawan.splice(index, 1)
        tampilkanKaryawan()
        }
}

const editKaryawan = (nik) => {
    indexEdit = cariIndex(nik)
    const karyawanDiedit = daftarKaryawan[indexEdit];
    document.getElementById('txtNama').value = karyawanDiedit.nama;
    document.getElementById('nikKaryawan').value = karyawanDiedit.nik;
    document.getElementById('masaKerja').value = karyawanDiedit.masaKerja;
    mode = 'edit';
    }


const resetForm = () => {
    document.getElementById('txtNama').value = "";
    document.getElementById('nikKaryawan').value = "";
    document.getElementById('masaKerja').value = "Pilih Masa Kerja Karyawan";
    document.getElementById('gaji').value = "";
    mode = 'tambah';
    indexEdit = -1; 
};


const cancel = (target) => {
    resetForm();
}

function listGaji() {
    const masaKerja = document.getElementById('masaKerja').value;
    const gaji = jmlGaji(masaKerja);
    document.getElementById('gaji').value = gaji;
}

const jmlGaji = (masaKerja) => {
    if (masaKerja > 5) {
        return 'Rp7.000.000';
    } else {
        return 'Rp4.000.000'; 
    } 
};


const masaKerjaInput = document.getElementById('masaKerja').value; 
const gaji = jmlGaji(masaKerjaInput); 
document.getElementById('gaji').innerText = gaji; 

window.onload = tampilkanKaryawan;