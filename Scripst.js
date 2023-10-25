let Operator = prompt ("Masukan Operator (+, -, /, *)");
let Angka1 = parseFloat (prompt("Masukan Angka Pertama"));
let Angka2 = parseFloat (prompt("Masukan Angka kedua"));

let hasil;
if (Operator =='+') {
    hasil = Angka1 + Angka2
}
if (Operator == '-') {
    hasil = Angka1 - Angka2
}
if (Operator == '/') {
    hasil = Angka1 / Angka2
}
if (Operator == '*') {
    hasil = Angka1 * Angka2
}

document.writeln(`${Angka1} ${Operator} ${Angka2} = ${hasil}`);
