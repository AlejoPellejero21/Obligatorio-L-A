const AccountEmpresario = 'Account - Empresario';
const AccountImportador = 'Account - Importador';

window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
    const SelectLogin = document.querySelector("#select-type-login");

    SelectLogin.addEventListener('change', onSelectChange);
}

function onSelectChange() {
    const SelectLogin = document.querySelector("#select-type-login").value;
    const DivSkyBlueLight = document.querySelectorAll(".change-color-0");
    const DivColorSkyBlue = document.querySelectorAll(".color-sky-blue");    

    DivSkyBlueLight.forEach(function(value){
        if (SelectLogin == 2) {
            value.style = 'background-color: #9ddeff;'            
        } else {        
            value.style = 'background-color: #ff9df3;'
        }
    });    

    DivColorSkyBlue.forEach(function(value){
        if (SelectLogin == 2) {
            value.style = 'color: #9ddeff;'            
        } else {        
            value.style = 'color: #ff9df3;'
        }
    });

}