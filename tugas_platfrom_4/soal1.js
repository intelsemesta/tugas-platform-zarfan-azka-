let studentsScore = [
    {
        name: "Andi",
        score: 90
    },
    {
        name: "Rudi",
        score: 80
    },
    {
        name: "Dira",
        score: 100
    },
]

let scoreTerbesar = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > scoreTerbesar.score) {
        scoreTerbesar = studentsScore[i];
    }
}

console.log("Siswa dengan nilai paling besar adalah:");
console.log("Nama  : " + scoreTerbesar.name);
console.log("Nilai : " + scoreTerbesar.score);