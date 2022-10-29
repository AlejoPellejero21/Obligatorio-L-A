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
            setDisplay(view, true);
        } else {
            setDisplay(view, false);
        }
    });
}