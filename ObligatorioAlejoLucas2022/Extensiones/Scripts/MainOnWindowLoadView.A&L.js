//Start Code

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
  createPreUserInformation();
  OBJ1Selector["SelectLogin"] = getQuerySelector("#", "select-type-login", true);
  OBJ1Selector["HeaderUserName"] = getQuerySelector("#", "head-user-name", true);
  OBJ1Selector["HeaderWelcomeUser"] = getQuerySelector("#", "head-welcome-user", true);
  OBJ1Selector["CrearUnViaje"] = getQuerySelector("#", "crear-un-viaje-button", true);  
  OBJ1Selector["ButtonCreateForBoth"] = getQuerySelector(".", "header-button-create-al", true);
  OBJ1Selector["InputRequestSearch"] = getQuerySelector("#", "input-request-search-button", true);
  OBJ1Selector['SetNameUserLogged'] = getQuerySelector('#', 'head-user-name', true);
  OBJ1Selector['LogOUT'] = getQuerySelector("#", 'button-loggout-now', true);
  
  getQuerySelector("#", "button-on-register", "true").addEventListener("click", onRegisterUser);
  getQuerySelector("#", "button-on-login", true).addEventListener("click", onLoginClick);
  OBJ1Selector.CrearUnViaje.addEventListener("click", crearUnViajeDeUnBuque);
  OBJ1Selector.SelectLogin.addEventListener("change", onSelectChange);
  OBJ1Selector.InputRequestSearch.addEventListener("keyup", onSearchRequest);
  OBJ1Selector.LogOUT.addEventListener('click', onLogOutClick);
    
  setDisplay(OBJ1Selector.HeaderUserName, false);
  OBJ1Selector.HeaderWelcomeUser.innerHTML = WelcomeEmpresario;
  OBJ1Selector.ButtonCreateForBoth.innerHTML = CrearUnViaje;
}

function onSelectChange() {
  const DivSkyBlueLight = getQuerySelector(".", "change-color-0", false);
  const DivColorSkyBlue = getQuerySelector(".", "color-sky-blue", false);
  const H1LoginTitle = getQuerySelector("#", "user-type-account", true);
  const LoginRegisterButtons = getQuerySelector("#", "show-login-register-link", true);
  const RegisterLink = getQuerySelector("#", "go-to-register", true);
  const LoginLink = getQuerySelector("#", "go-to-login", true);
  const BodyPage = getQuerySelector('#', 'big-body-page', true);
  const ButtonCreateUnViaje = getQuerySelector("#", 'crear-un-viaje-button', true);
  const ButtonCreateUnaSolicitud = getQuerySelector("#", 'send-shippment-request', true);
  const WelcomUser = getQuerySelector("#", 'head-welcome-user', true);

  /*Agregar Evento Para Register Page*/
  RegisterLink.addEventListener("click", onLinkRegisterClick);
  LoginLink.addEventListener("click", onLinkLoginClick);

  /*Colores de la pagina*/
  let selectLoginValue = parseInt(OBJ1Selector.SelectLogin.value);
  DivSkyBlueLight.forEach(function (value) {
    if (selectLoginValue === 2) {
      value.style = "background-color: #9ddeff;";
      BodyPage.style = "background-color: #9ddeff;";
      ButtonCreateUnViaje.id = 'send-shippment-request';
      WelcomUser.innerHTML = WelcomeImportador;
      OBJ1Selector.ButtonCreateForBoth.innerHTML = CrarUnaSolicitud;
    } else {
      value.style = "background-color: #ff9df3;";
      BodyPage.style = "background-color: #ff9df3;";
      ButtonCreateUnaSolicitud.id = 'crear-un-viaje-button';
      WelcomUser.innerHTML = WelcomeEmpresario;
      OBJ1Selector.ButtonCreateForBoth.innerHTML = CrearUnViaje;
    }
  });

  DivColorSkyBlue.forEach(function (value) {
    if (selectLoginValue === 2) {
      value.style = "color: #9ddeff;";
    } else {
      value.style = "color: #ff9df3;";
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
  const LoginPage = getQuerySelector("#", "main-login-form-al", true);
  const RegisterPage = getQuerySelector("#", "main-register-form-al", true);

  setDisplay(LoginPage, false);
  setDisplay(RegisterPage, true);
}

function onLinkLoginClick() {
  const LoginPage = getQuerySelector("#", "main-login-form-al", true);
  const RegisterPage = getQuerySelector("#", "main-register-form-al", true);

  setDisplay(LoginPage, true);
  setDisplay(RegisterPage, false);
}
