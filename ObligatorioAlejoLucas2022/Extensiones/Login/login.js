window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
  const loginBtn = getQuerySelector(
    "#",
    "button-on-login",
    "true"
  ).addEventListener("click", onLoginClick);
}

// Login access
function onLoginClick(e) {
  e.preventDefault();

  OBJ1Selector["inputUserAccess"] =
    document.querySelector("#input-username").value;
  OBJ1Selector["inputPassword"] =
    document.querySelector("#input-password").value;

  console.log(OBJ1Selector.inputUserAccess);

  if (isEmpty(OBJ1Selector.inputUserAccess)) {
    alert("Por favor complete el nombre de usuario");
  } else if (isValidPass(OBJ1Selector.inputPassword)) {
    alert("Por favor ingrese una contraseña");
  } else {
    if (findUser(OBJ1Selector.inputUserAccess, OBJ1Selector.inputPassword)) {
      alert("vamos todavia");
    } else {
      alert("proba denuevo macarron");
    }
  }
}
