function onDashboardLoad() {
  OBJ1Selector["NavBarCrearUnViaje"] = getQuerySelector("#", "go-to-crear-un-viaje", true);
  OBJ1Selector["CrearUnViajeView"] = getQuerySelector("#", "show-this-view", true);

  OBJ1Selector.NavBarCrearUnViaje.addEventListener("click", onCrearUnViajeClick);
}

function onCrearUnViajeClick() {
  setDisplay(OBJ1Selector.CrearUnViajeView, true);
}

function onLoggedEmpresa() {
  const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
  const CreateTrip = getQuerySelector("#", "main-dashboard-container-empresario", true);

  setDisplay(LoginMainView, false);
  setDisplay(CreateTrip, true);
}

function onLoggedImportador() {
  const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
  const CreateRequest = getQuerySelector(".", "dashboard-container-al-sky-blue", true);

  setDisplay(LoginMainView, false);
  setDisplay(CreateRequest, true);
}
