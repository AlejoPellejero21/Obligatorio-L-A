const AccountEmpresario = 'Account - Empresario';
const AccountImportador = 'Account - Importador';

window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
    const SelectLogin = getQuerySelector('#', 'select-type-login', true);

    SelectLogin.addEventListener('change', onSelectChange);
}

function onSelectChange() {
    const SelectLogin = getQuerySelector('#', 'select-type-login', true);
    const DivSkyBlueLight = getQuerySelector('.', 'change-color-0', false);
    const DivColorSkyBlue = getQuerySelector('.', 'color-sky-blue', false);
    const H1LoginTitle = getQuerySelector('#', 'user-type-account', true);
    const LoginRegisterButtons = getQuerySelector('#', 'show-login-register-link', true);

    let selectLoginValue = SelectLogin.value;

    DivSkyBlueLight.forEach(function (value) {
        if (selectLoginValue == 2) {
            value.style = 'background-color: #9ddeff;';
        } else {
            value.style = 'background-color: #ff9df3;';
        }
    });

    DivColorSkyBlue.forEach(function (value) {
        if (selectLoginValue == 2) {
            value.style = 'color: #9ddeff;';
        } else {
            value.style = 'color: #ff9df3;';
        }
    });

    if (selectLoginValue == 2) {
        setDisplay(LoginRegisterButtons, true);
        H1LoginTitle.innerHTML = AccountImportador;
    } else {
        setDisplay(LoginRegisterButtons, false);
        H1LoginTitle.innerHTML = AccountEmpresario;
    }

}