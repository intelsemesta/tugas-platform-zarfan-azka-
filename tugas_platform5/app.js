// Import modul-modul yang telah dibuat
const daftarBuah = require('./folder1/buah.js');
const hitungTotal = require('./folder1/folder2/total.js');
const diskon = require('./folder1/folder2/folder3/diskon.js');
const cetakStruk = require('./folder1/folder2/folder3/folder4/cetak.js');

console.log("Selamat Datang di Toko Buah Segar\n");

// Tampilkan daftar buah yang tersedia
console.log("Daftar Buah Hari Ini:");
daftarBuah();

console.log("\nTransaksi Pembelian");

// Data pembelian pelanggan
let apel = 8;
let pisang = 12;
let jeruk = 6;
let Mangga = 3;

let hargaApel = 5000;
let hargaPisang = 3000;
let hargaJeruk = 4000;
let hargaMangga = 6000;

console.log(`Apel   : ${apel} buah x Rp ${hargaApel} = Rp ${apel * hargaApel}`);
console.log(`Pisang : ${pisang} buah x Rp ${hargaPisang} = Rp ${pisang * hargaPisang}`);
console.log(`Jeruk  : ${jeruk} buah x Rp ${hargaJeruk} = Rp ${jeruk * hargaJeruk}`);
console.log(`Manga   : ${Mangga} buah x Rp ${hargaMangga} = Rp ${Mangga * hargaMangga}`);

// Hitung total belanja
let totalBelanja = hitungTotal(apel * hargaApel, pisang * hargaPisang, jeruk * hargaJeruk, Mangga * hargaMangga);
console.log(`\nTotal Belanja: Rp ${totalBelanja}`);

// Cek diskon jika belanja di atas 50000
let potongan = diskon(totalBelanja);
console.log(`Diskon 10%: Rp ${potongan}`);

let totalAkhir = totalBelanja - potongan;
console.log(`Total Bayar: Rp ${totalAkhir}`);

// Cetak struk belanja
cetakStruk(totalAkhir);