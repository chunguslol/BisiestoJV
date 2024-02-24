// esBisiesto.js
function esBisiesto(anio) {
    return (anio % 400 === 0) || ((anio % 100 !== 0) && (anio % 400 === 0));
}

export default esBisiesto;
