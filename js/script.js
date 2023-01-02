const sustituciones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function encriptar(text) {
    for (const letter in sustituciones) {
        text = text.replace(new RegExp(letter, "g"), sustituciones[letter]);
    }
    return text;
}

function desencriptar(text) {
    for (const replacement in sustituciones) {
        text = text.replace(new RegExp(sustituciones[replacement], "g"), replacement);
    }
    return text;
}

function copiarResultado() {
    const resultado = document.getElementById("resultadoTexto");
    const seleccion = window.getSelection();
    seleccion.removeAllRanges();
    const rango = document.createRange();
    rango.selectNodeContents(resultado);
    seleccion.addRange(rango);
    document.execCommand("copy");
}
function resolve(action) {
    const text = document.getElementById("text");
    let result = ''
    switch (action) {
        case 'encriptar':
            result = encriptar(text.value);
            break;
        case 'desencriptar':
            result = desencriptar(text.value);
            break;
    }
    document.querySelector('.resultado').classList.add('hide')
    document.querySelector('.resultado2').classList.remove('hide')
    document.getElementById("resultadoTexto").innerHTML = result;
    text.value='';

}

