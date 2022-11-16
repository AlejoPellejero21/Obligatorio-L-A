function onHabilitarUsuarios() {
  const UserContainer = getQuerySelector("#", "user-big-container", true);
  const ButtonUser = getQuerySelector("#", "button-habilitar-user", true);
  UserContainer.innerHTML = "";
  ButtonUser.innerHTML = "";
  userNotFound = false;

  if (Importadores.length > 0) {
    Importadores.forEach(function (importador) {
      if (!importador.userEnabled) {
        userNotFound = true;
        //Falta Agregar la imagen correspondiente
        UserContainer.innerHTML += `
                <div class="user-container">
                    <div class="user-container-top-al">
                        <div class="image-user-al"></div>
                        <h3>${importador.userAccess}</h3>
                    </div>
                    <div class="user-information-al">
                        <span class="mini-title">Deshabilitado:</span>
                        <P>Este usuario se encuentra DESHABILITADO debido a que cancelo 3 o más solicitudes para las lineas de carga existentes.</P>
                    </div>
                </div> 
                `;

        ButtonUser.innerHTML += `
                <div class="user-container button-enable-al">
                    <input class="user-enable-button" data-userId="${importador.id}" type="button" value="Habilitar">
                </div>        
                `;
      }
    });

    const ButtonHabilitarUser = getQuerySelector(".", "user-enable-button", false);

    ButtonHabilitarUser.forEach(function (button) {
      button.addEventListener("click", onHabilitarUserClick);
    });

    if (!userNotFound) {
      setDisplay(ButtonUser, false);
      UserContainer.innerHTML += `
            <p class="description-manifest ususario-desha-test-p">No existe ningun usuario DESHABILITADO en este momento.</p>
            `;
    }
  }
}

function onHabilitarUserClick() {
  const userId = parseInt(this.getAttribute("data-userId"));

  Importadores.forEach(function (importador) {
    if (importador.id === userId) {
      importador.userEnabled = true;
      alert(`El usuario ${importador.userAccess} fue habilitado correctamente`);
    }
  });
  onHabilitarUsuarios();
}
