//Start Code

window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
    OBJ1Selector['SelectLogin'] = getQuerySelector('#', 'select-type-login', true);
    OBJ1Selector['HeaderUserName'] = getQuerySelector('#', 'head-user-name', true);
    OBJ1Selector['HeaderWelcomeUser'] = getQuerySelector('#', 'head-welcome-user', true);         

    OBJ1Selector.SelectLogin.addEventListener('change', onSelectChange);
    setDisplay(OBJ1Selector.HeaderUserName, false);
    OBJ1Selector.HeaderWelcomeUser.innerHTML = WelcomeEmpresario;
}

function onSelectChange() {

    const DivSkyBlueLight = getQuerySelector('.', 'change-color-0', false);
    const DivColorSkyBlue = getQuerySelector('.', 'color-sky-blue', false);
    const H1LoginTitle = getQuerySelector('#', 'user-type-account', true);
    const LoginRegisterButtons = getQuerySelector('#', 'show-login-register-link', true);
    const RegisterLink = getQuerySelector('#', 'go-to-register', true);
    const LoginLink = getQuerySelector('#', 'go-to-login', true);

    /*Agregar Evento Para Register Page*/
    RegisterLink.addEventListener('click', onLinkRegisterClick);
    LoginLink.addEventListener('click', onLinkLoginClick)


    /*Colores de la pagina*/
    let selectLoginValue = parseInt(OBJ1Selector.SelectLogin.value);
    DivSkyBlueLight.forEach(function (value) {
        if (selectLoginValue === 2) {
            value.style = 'background-color: #9ddeff;';
        } else {
            value.style = 'background-color: #ff9df3;';
        }
    });

    DivColorSkyBlue.forEach(function (value) {
        if (selectLoginValue === 2) {
            value.style = 'color: #9ddeff;';
        } else {
            value.style = 'color: #ff9df3;';
        }
    });

    if (selectLoginValue === 2) {
        setDisplay(LoginRegisterButtons, true);
        H1LoginTitle.innerHTML = AccountImportador;
    } else {
        setDisplay(LoginRegisterButtons, false);
        H1LoginTitle.innerHTML = AccountEmpresario;
    }

}


function onLinkRegisterClick() {
    const LoginPage = getQuerySelector('#', 'main-login-form-al', true);
    const RegisterPage = getQuerySelector('#', 'main-register-form-al', true);

    setDisplay(LoginPage, false);
    setDisplay(RegisterPage, true);
}

function onLinkLoginClick() {
    const LoginPage = getQuerySelector('#', 'main-login-form-al', true);
    const RegisterPage = getQuerySelector('#', 'main-register-form-al', true);

    setDisplay(LoginPage, true);
    setDisplay(RegisterPage, false);
}