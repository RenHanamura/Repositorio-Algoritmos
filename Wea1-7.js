function contarVocales(texto) {
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let x = 0; x < texto.length; ++x) {
        if (vocales.indexOf(texto[x]) >= 0) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

console.log(contarVocales('SALVAME SUPERMAN'));