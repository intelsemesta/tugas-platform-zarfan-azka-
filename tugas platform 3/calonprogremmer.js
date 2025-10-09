const prompt = require('prompt-sync')({ sigint: true });

let lanjut = true;

while (lanjut) {
  const nilaiCoding = Number(prompt("Masukkan nilai coding [0-100]: "));
  const nilaiInterview = prompt("Masukkan nilai interview [A/B/C/dll]: ");

  
  let hasilCoding;
  if (nilaiCoding > 80) {
    hasilCoding = 'LULUS';
  } else if (nilaiCoding >= 60 && nilaiCoding <= 80) {
    hasilCoding = 'DIPERTIMBANGKAN';
  } else {
    hasilCoding = 'GAGAL';
  }

  let hasilInterview;
  if (nilaiInterview.toUpperCase() == 'A' || nilaiInterview.toUpperCase() == 'B') {
    hasilInterview = 'LULUS';
  } else {
    hasilInterview = 'GAGAL';
  }

  console.log("\nHasil tes");
  if ((hasilCoding == 'LULUS' || hasilCoding == 'DIPERTIMBANGKAN') && hasilInterview == 'LULUS') {
    console.log("Selamat Kamu Berhasil Menjadi Calon Programmer.");
  } else {
    console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer.");
  }

  const pilihan = prompt("Ingin input lagi? (y/n): ").toLowerCase();
  if (pilihan !== 'y') {
    lanjut = false;  
  }
}