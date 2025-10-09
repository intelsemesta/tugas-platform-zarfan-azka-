const prompt = require('prompt-sync')({ sigint: true });

let lanjut = true;

while (lanjut) {
let nama = prompt("Masukkan Nama: ");
let umur = Number(prompt("Masukkan Umur: "));
let tempat = prompt("Masukkan Tempat Tinggal: ");
let uangTabungan = Number(prompt("Masukkan Uang Tabungan (dollar): "));

let tempatTinggal = tempat.toLowerCase();

console.log("\nHasil");

if (umur > 40 && (tempatTinggal == 'nevada' || tempatTinggal == 'new york' || tempatTinggal == 'havana') && uangTabungan > 10000000) {
  console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Don.`);
} else if (umur >= 25 && umur <= 40 && (tempatTinggal == 'new jersey' || tempatTinggal == 'manhattan' || tempatTinggal == 'nevada') && uangTabungan >= 1000000 && uangTabungan <= 2000000) {
  console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Underboss.`);
} else if (umur >= 18 && umur <= 24 && (tempatTinggal == 'california' || tempatTinggal == 'detroit' || tempatTinggal == 'boston') && uangTabungan < 1000000) {
  console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Capo.`);
} else {
  console.log(`${nama} tidak mencurigakan.`);
}

  const pilihan = prompt("Ingin input lagi? (y/n): ").toLowerCase();
  if (pilihan !== 'y') {
    lanjut = false;
  }
}