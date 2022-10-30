function getQuerySelector(type, id, unique) {
    //type === '.' || '#'
    //id === 'example-ex'
    //unique === true || false
    let getAttribute;

    if (unique) {
        getAttribute = document.querySelector(`${type}${id}`);
    } else {
        getAttribute = document.querySelectorAll(`${type}${id}`);
    }

    return getAttribute;
}

function setDisplay(attr, display) {
    //attr === 'El atributo'
    //display === true || false

    if (display) {
        attr.style.display = 'flex';
    } else {
        attr.style.display = 'none';
    }
}

function createPreUserInformation() {
    Importadores.push(new Importador(0101, 'Alfredo', 'Alfredito21', '12345'),
        new Importador(0124, 'Rafael', 'RafaEl1', '113355'),
        new Importador(0221, 'Lucas', 'Lucaaas', '232345'),
        new Importador(0320, 'Nicolas', 'NicolaN', '543611A*'))

    Empresas.push(new Empresa(0142, 'Alejo', 'AlejoP21', 'Alejo1234'),
        new Empresa(0241, 'Lucas', 'LucasA21', 'Lucas1234'));

    Viajes.push(
        new Viaje(0134, 'BuqueAk-74', 20, '12/15/2022'),
        new Viaje(0237, 'BuquePurple', 15, '11/13/2022')
    );


}