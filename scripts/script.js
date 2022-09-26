function getAleron() {
    ans = prompt('¿Mi coche tiene alerón? (S/N)', null)

    if(af.includes(ans)) {
        aleron = true
    } else if(neg.includes(ans)) {
        aleron = false
    }

    return aleron
}

const neg = ['n', 'N', 'no', 'No', 'NO']
const af = ['s', 'S', 'si', 'Si', 'SI']

console.log('Hola Mundo!');

const coches = ['Audi', 'Mercedes', 'Seat']

for (i = 0; i < coches.length; i++) {
    console.log(coches[i]);
}

let miCocheFavorito = {
    nombre : 'Lamborghini Aventador SVG',
    caballos : 560,
    precio : 456000,
    aleron : getAleron()
}

miCocheFavorito.aleron

if (miCocheFavorito.aleron === true) {
    console.log(`Mi coche favorito es el ${miCocheFavorito.nombre}, y tiene alerón. Cuesta ${miCocheFavorito.precio}€`);
} else if (miCocheFavorito.aleron === false) {
    console.log(`Mi coche favorito es el ${miCocheFavorito.nombre}, y no tiene alerón, pero tiene ${miCocheFavorito.caballos} caballos`);
} else {
    console.log(`¿No tengo coche?`);
}