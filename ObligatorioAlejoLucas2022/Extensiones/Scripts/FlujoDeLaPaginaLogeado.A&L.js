function onDashboardLoad() {
  OBJ1Selector['NavBarCrearUnViaje'] = getQuerySelector('.', 'go-to-a-new-view', false);
  OBJ1Selector['ShowThisView'] = getQuerySelector('.', 'show-this-view', false);

  OBJ1Selector.NavBarCrearUnViaje.forEach(function (button) {
    button.addEventListener('click', onCrearUnViajeClick);
  });;
}

function onCrearUnViajeClick() {
  var viewToShowButtonClick = this.attributes[0].value;//data-view

  OBJ1Selector.ShowThisView.forEach(function (view) {
    if (viewToShowButtonClick === view.attributes[0].value) {
      currentView = viewToShowButtonClick;
      onCreateCargaDeViajes();
      setDisplay(view, true);
    } else {
      setDisplay(view, false);
    }
  });
}

function onLoggedEmpresa() {
  const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
  const CreateTrip = getQuerySelector("#", "main-dashboard-container-empresario", true);
  OBJ1Selector['LoggOutPage'] = getQuerySelector("#", "button-header-loggout", true);

  OBJ1Selector.SetNameUserLogged.innerHTML += userLogged.supplierName;

  setDisplay(OBJ1Selector.SetNameUserLogged, true);
  setDisplay(LoginMainView, false);
  setDisplay(CreateTrip, true);
  setDisplay(OBJ1Selector.LoggOutPage, true);
  onDashboardLoad();
  onHabilitarUsuarios();
}

function onLoggedImportador() {
  const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
  const CreateRequest = getQuerySelector(".", "dashboard-container-al-sky-blue", true);
  const CrearUnaSolicitudAttr = getQuerySelector("#", "send-shippment-request", true);
  CrearUnaSolicitudAttr.addEventListener("click", onCrearSolicitudDeCarga);

  OBJ1Selector.SetNameUserLogged.innerHTML += userLogged.userAccess;

  setDisplay(OBJ1Selector.SetNameUserLogged, true);
  setDisplay(LoginMainView, false);
  setDisplay(CreateRequest, true);
  setDisplay(OBJ1Selector.LoggOutPage, true);
  onDashboardLoad();
  onConsultarSolicitudes();
  onDashboardCancelaciones();
  onCreateCalendarioLlegadas();
}
