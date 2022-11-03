
// Cambiar foto de perfil
function onChangeProfilePicture() {

    const FirstProfilePicture = getQuerySelector('#', "first-profile-icon", true)
    const SecondProfilePicture = getQuerySelector('#', "second-profile-icon", true)
    const ThirdProfilePicture = getQuerySelector('#', "third-profile-icon", true)
    const FourthProfilePicture = getQuerySelector('#', "fourth-profile-icon", true)



    let ProfilePictureSelectorValue = OBJ1Selector.ProfilePictureSelector.value

    switch (ProfilePictureSelectorValue) {
        case "first-profile-icon":
            setDisplay(FirstProfilePicture, true)
            setDisplay(SecondProfilePicture, false)
            setDisplay(ThirdProfilePicture, false)
            setDisplay(FourthProfilePicture, false)
            break;
        case "second-profile-icon":
            setDisplay(FirstProfilePicture, false)
            setDisplay(SecondProfilePicture, true)
            setDisplay(ThirdProfilePicture, false)
            setDisplay(FourthProfilePicture, false)
            break;
        case "third-profile-icon":
            setDisplay(FirstProfilePicture, false)
            setDisplay(SecondProfilePicture, false)
            setDisplay(ThirdProfilePicture, true)
            setDisplay(FourthProfilePicture, false)
            break;
        case "fourth-profile-icon":
            setDisplay(FirstProfilePicture, false)
            setDisplay(SecondProfilePicture, false)
            setDisplay(ThirdProfilePicture, false)
            setDisplay(FourthProfilePicture, true)
            break;
    }
}

function onRegisterUser() {
    OBJ1Selector["userName"] = getQuerySelector('#', 'input-register-name', true)
    OBJ1Selector["userAccess"] = getQuerySelector('#', 'input-register-username', true)
    OBJ1Selector["userPassword"] = getQuerySelector('#', 'input-register-password', true)
    OBJ1Selector["profilePicture"] = getQuerySelector('#', 'profile-icon-selector', true)

    const userName = OBJ1Selector.userName.value
    const userAcces = OBJ1Selector.userAccess.value
    const userPassword = OBJ1Selector.userPassword.value
    const profilePicture = OBJ1Selector.profilePicture.value


    let id = 0;
    let registredImportador = [];

    /* if (isEmpty(OBJ1Selector.userName)) {
         alert("Por favor complete el nombre");
     } else if (isEmpty(OBJ1Selector.userAccess)) {
         alert("Por favor complete el nombre de usuario");
     } else if (isValidPass(OBJ1Selector.inputPassword)) {
         alert("Por favor ingrese una contraseña");
     } else if {*/

    /* } else {*/
    id = idAutonumericoViaje(Importadores);
    registredImportador = new Importador(id, userName, userAcces, userPassword, profilePicture, true, 0, 0, [])

    Importadores.push(registredImportador)

    console.log(Importadores)


    //}
}

