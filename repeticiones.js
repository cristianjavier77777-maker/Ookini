console.log("V60")
console.log("Kyoto drip")
console.log("Siphon")
console.log("Prensa francesa")

// Lista de metodos se llaman arrays
const metodos = ["V60","Kyoto drip", "Siphon", "Prensa francesa"];

// instrucción que recorre la lista y que hace algo con cada elemento

for (const metodo of metodos) {

    console.log(metodo);
}

console.log("Fin del programa")

//ejemplo de reservas en un día

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDeldia) {
    totalTazas = totalTazas + cantidad;
}

/* for (const cantidad of reservasDeldia) {
    totalTazas = cantidad; 
} */

console.log(totalTazas)