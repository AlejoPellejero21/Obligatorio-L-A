function onLogOutClick() {
    if (userLogged || userLoggedId) {
        const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
        const CreateTrip = getQuerySelector("#", "main-dashboard-container-empresario", true);
        const CreateRequest = getQuerySelector(".", "dashboard-container-al-sky-blue", true);
        const BtnLogOut = getQuerySelector("#", "button-header-loggout", true);
        const inputUsername = getQuerySelector("#", "input-username", true);
        const inputPassword = getQuerySelector("#", "input-password", true);
        const headUserName = getQuerySelector("#", "head-user-name", true);
        const mainsViews = getQuerySelector(".", "show-this-view", false);
        let lastViewOpened = null;


        //Esto es para el caso de que se haga log in y enseguida log out
        if (currentView === '' && typeOfUser === 1) {
            currentView = CrearUnViajeView;
        } else {
            currentView = CrearUnaSolicitud;
        }

        mainsViews.forEach(function (view) {
            let lastView = view.getAttribute("data-view");
            if (currentView === lastView) {
                lastViewOpened = view;
            }
        });        

        if (userLogged.userName) {
            setDisplay(CreateRequest, false);
        } else {
            setDisplay(CreateTrip, false);
        }
        setDisplay(BtnLogOut, false);
        setDisplay(LoginMainView, true);
        setDisplay(lastViewOpened, false)

        inputUsername.value = '';
        inputPassword.value = '';
        headUserName.innerHTML = '';
        userLogged = null;
        userLoggedId = 0;
    }
}