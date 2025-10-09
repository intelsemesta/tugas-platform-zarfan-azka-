const prompt = require('prompt-sync')({ sigint: true });
let lanjut = true;
while (lanjut) {
  const nomorPunggung = Number(prompt("Masukkan nomor punggung pemain: "));
  if (nomorPunggung % 2 == 0) {
    console.log("target attacker");
    if (nomorPunggung >= 50 && nomorPunggung <= 100) {
      console.log("berhak dipilih menjadi capten team");
    }
  } else {
    console.log('defender');
    if (nomorPunggung > 90) {
      console.log('Playmaker');
    }
    if (nomorPunggung % 3 == 0 && nomorPunggung % 5 == 0) {
      console.log('keeper');
    }
  }
  const pilihan = prompt("Ingin input nomor lagi? (y/n): ").toLowerCase();
  if (pilihan !== 'y') {
    lanjut = false;  // Hentikan loop
  }
}

