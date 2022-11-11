// Login access
function onLoginClick(e) {
  e.preventDefault();
  OBJ1Selector["inputUserAccess"] = document.querySelector("#input-username").value;
  OBJ1Selector["inputPassword"] = document.querySelector("#input-password").value;
  OBJ1Selector["selectAccount"] = parseInt(getQuerySelector("#", "select-type-login", "true").value);

  // Selector Empresa-Importador
  if (OBJ1Selector.selectAccount === 1) {    
    userLogged = findUser(OBJ1Selector.inputUserAccess, OBJ1Selector.inputPassword, Empresas);
    typeOfUser = OBJ1Selector.selectAccount;
  } else {
    userLogged = findUser(OBJ1Selector.inputUserAccess, OBJ1Selector.inputPassword, Importadores);
    typeOfUser = OBJ1Selector.selectAccount;
  }




  //Validaciones funcionando con cambio de view
  if (isEmpty(OBJ1Selector.inputUserAccess)) {
    alert("Por favor complete el nombre de usuario");
  } else if (isValidPass(OBJ1Selector.inputPassword)) {
    alert("Por favor ingrese una contraseña");
  } else {
    //Pude logear
    if (userLogged) {
      if (typeOfUser === 1) {
        onLoggedEmpresa();
      } else {
        userLoggedId = userLogged.id
        getLineOfChargeOnRequest()
        onLoggedImportador();
      }
    } else {
      alert("proba denuevo macarron");
    }
  }
}
