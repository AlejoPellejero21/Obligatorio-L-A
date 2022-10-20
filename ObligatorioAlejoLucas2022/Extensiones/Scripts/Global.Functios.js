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