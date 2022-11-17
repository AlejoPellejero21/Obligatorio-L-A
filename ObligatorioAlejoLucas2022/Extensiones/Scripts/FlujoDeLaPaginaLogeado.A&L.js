function onDashboardLoad() {
    OBJ1Selector['NavBarCrearUnViaje'] = getQuerySelector('.', 'go-to-a-new-view', false);
    OBJ1Selector['ShowThisView'] = getQuerySelector('.', 'show-this-view', false);

<<<<<<< HEAD
    OBJ1Selector.NavBarCrearUnViaje.forEach(function (button) {
        button.addEventListener('click', onCrearUnViajeClick);
    });
=======
  addSupplierOptions();

  //Aca se le asigna al
  OBJ1Selector.NavBarCrearUnViaje.forEach(function (button) {
    button.addEventListener('click', onCrearUnViajeClick);
  });
>>>>>>> issues/resolviendoFuncionalidadesGenerales
}

//Esta funcion se encarga de obtener la view y setearla en una variable global
function onCrearUnViajeClick() {
    var viewToShowButtonClick = this.attributes[0].value; //data-view

    OBJ1Selector.ShowThisView.forEach(function (view) {
        if (viewToShowButtonClick === view.attributes[0].value) {
            //asigno la view actual a una variable global
            currentView = viewToShowButtonClick;
            onCreateCargaDeViajes();
            setDisplay(view, true);
        } else {
            setDisplay(view, false);
        }
    });
}

function onLoggedEmpresa() {
    const LoginMainView = getQuerySelector('.', 'main-login-container-al', true);
    const CreateTrip = getQuerySelector('#', 'main-dashboard-container-empresario', true);
    const mainViewEmpresa = getQuerySelector('#', 'main-view-empresa', true);
    OBJ1Selector['LoggOutPage'] = getQuerySelector('#', 'button-header-loggout', true);

  OBJ1Selector.SetNameUserLogged.innerHTML += userLogged.supplierName;
  //Esto es para el caso de que se haga log in y enseguida log out
  currentView = CrearUnViajeView; 

    setDisplay(OBJ1Selector.SetNameUserLogged, true);
    setDisplay(LoginMainView, false);
    setDisplay(CreateTrip, true);
    setDisplay(OBJ1Selector.LoggOutPage, true);
    setDisplay(mainViewEmpresa, true);
    onDashboardLoad();
    createRequestTable();
    onHabilitarUsuarios();
}

function onLoggedImportador() {
  const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
  const CreateRequest = getQuerySelector(".", "dashboard-container-al-sky-blue", true);
  const CrearUnaSolicitudAttr = getQuerySelector("#", "send-shippment-request", true);
  const mainViewImportador = getQuerySelector("#", "main-view-importador", true);
  OBJ1Selector['LoggOutPage'] = getQuerySelector("#", "button-header-loggout", true);
  CrearUnaSolicitudAttr.addEventListener("click", onCrearSolicitudDeCarga);

  OBJ1Selector.SetNameUserLogged.innerHTML += userLogged.userAccess;
  //Esto es para el caso de que se haga log in y enseguida log out
  currentView = CrearUnaSolicitud;  

  setDisplay(OBJ1Selector.SetNameUserLogged, true);
  setDisplay(OBJ1Selector.LoggOutPage, true);
  setDisplay(LoginMainView, false);
  setDisplay(CreateRequest, true);
  setDisplay(mainViewImportador, true);
  onDashboardLoad();
  onConsultarSolicitudes();
  onDashboardCancelaciones();
  onCreateCalendarioLlegadas();
}
