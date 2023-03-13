const dataKelas = ["Ekonomi", "Bisnis", "Eksekutif"];
const dataHarga = ["10000", "20000", "30000"]

const cmbKelas = document.querySelector("#kelas");
const txtHarga = document.querySelector("#harga");
const btnTotal = document.querySelector("#tombol-harga");
const jmlPenumpang = document.querySelector("#jml-penumpang");
const txtTotal = document.querySelector("#total-harga");

dataKelas.forEach(element => {
    let opt = document.createElement("option");
    opt.text = element;
    opt.value = element;
    cmbKelas.add(opt);
});

txtHarga.value = dataHarga[cmbKelas.selectedIndex];

cmbKelas.addEventListener('change', function(){
    const idx = cmbKelas.selectedIndex;
    const harga = dataHarga[idx];
    txtHarga.value = harga;
});

btnTotal.addEventListener("click", function(){
    let hasil = txtHarga.value * jmlPenumpang.value;
    txtTotal.value = hasil;
});