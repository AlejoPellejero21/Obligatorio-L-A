function onDashboardLoad() {
    OBJ1Selector['NavBarCrearUnViaje'] = getQuerySelector('#', 'go-to-crear-un-viaje', true);
    OBJ1Selector['CrearUnViajeView'] = getQuerySelector('#', 'show-this-view', true);
    

    OBJ1Selector.NavBarCrearUnViaje.addEventListener('click', onCrearUnViajeClick);
}

function onCrearUnViajeClick() {    
    setDisplay(OBJ1Selector.CrearUnViajeView, true);
}