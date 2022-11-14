function onLogOutClick() {
    if (userLogged || userLoggedId) {
        const LoginMainView = getQuerySelector(".", "main-login-container-al", true);
        const CreateTrip = getQuerySelector("#", "main-dashboard-container-empresario", true);
        const CreateRequest = getQuerySelector(".", "dashboard-container-al-sky-blue", true);
        const BtnLogOut = getQuerySelector("#", "button-header-loggout", true);     
        const inputUsername = getQuerySelector("#", "input-username", true);     
        const inputPassword = getQuerySelector("#", "input-password", true);             
        
        userLogged = null;
        userLoggedId = 0;
        
        setDisplay(BtnLogOut, false);
        setDisplay(LoginMainView, true);
        setDisplay(CreateTrip, false);
        setDisplay(CreateRequest, false);        

        inputUsername.value = '';
        inputPassword.value = '';
    }
}