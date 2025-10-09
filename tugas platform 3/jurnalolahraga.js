const prompt = require('prompt-sync')({ sigint: true });

let lanjut = true;

while (lanjut) {
  const durasiLari = Number(prompt("Berapa menit Anda lari? : "));
  const durasiPushup = Number(prompt("Berapa menit Anda push-up? : "));
  const durasiPlank = Number(prompt("Berapa menit Anda plank? : "));

  const kaloriLari = durasiLari * 12;
  const kaloriPushup = (durasiPushup / 30) * 200;
  const kaloriPlank = durasiPlank * 5;
  const totalKalori = kaloriLari + kaloriPushup + kaloriPlank;

  console.log("\nHasil Kalori");
  console.log(`Lari    : ${kaloriLari.toFixed(1)} kalori`);
  console.log(`Push-up : ${kaloriPushup.toFixed(1)} kalori`);
  console.log(`Plank   : ${kaloriPlank.toFixed(1)} kalori`);
  console.log(`\nTotal kalori yang terbakar: ${totalKalori.toFixed(1)} kalori`);


  const pilihan = prompt("Ingin input lagi? (y/n): ").toLowerCase();
  if (pilihan !== 'y') {
    lanjut = false; 
  }
}