window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
    const btnLogin = document.querySelector('#btn-login');

    btnLogin.addEventListener('click', onButtonLoginClick);
}

function onButtonLoginClick(e) {
    e.preventDefault();
    const inputUser = document.querySelector('#input-username').value;
    const inputPassword = document.querySelector('#input-password').value;
    const titleUser = document.querySelector('#title-user');
    const divLogin = 'mini-login';
    const divTables = 'tables';

    let index = 0;
    let closeSearch = false;
    let adminLoged = {};

    if (inputUser !== '' && inputPassword !== '') {
        while (index < admins.length && !closeSearch) {
            if (admins[index].userName.toLowerCase() === inputUser.toLowerCase() && admins[index].passWord === inputPassword) {
                adminLoged = admins[index];
                closeSearch = true;
            }
            index++;
        }

        if (closeSearch && adminLoged) {        
            changeDisplay(divLogin, 'none');
            changeDisplay(divTables, 'block');   
            titleUser.innerHTML = `Welcome ${adminLoged.userName}`;
        }

    } else {
        alert('Error');
    }
}

function changeDisplay(id, display) {
    document.querySelector(`#${id}`).style.display = display;
}