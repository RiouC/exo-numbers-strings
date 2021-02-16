
let sentence = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`;

console.log(`Un court extrait de Salammbô (Gustave Flaubert)\nNombre de charactère : ${sentence.length}`);

for (let i = 0; i < sentence.length; i++)
    console.log(`Le caractère ${sentence[i]} est à l'index ${i}`);
