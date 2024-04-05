
let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    try {
        const parsedUrl = new URL(laURL);
        const parametros = Object.fromEntries(parsedUrl.searchParams.entries());

        return {
            host: parsedUrl.origin,
            pathname: parsedUrl.pathname,
            parametros: parametros
        };
    } catch (error) {
        console.error('Error al parsear la URL:', error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}
