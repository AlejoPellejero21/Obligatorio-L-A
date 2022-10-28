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

  const inputUsername = getQuerySelector("#", "input-username", "true");
  const inputPassword = getQuerySelector("#", "input-password", "true");

  const failedValidation = formValidator(loginFormValidations);

  const LoginPage = getQuerySelector("#", "main-login-form-al", true);
  const CreateRequestPage = getQuerySelector(
    "#",
    "main-form-create-request",
    true
  );

  setDisplay(loginPage, false);
  setDisplay(createRequestPage, true);

  /** 
  if (!failedValidation) {
    userlogged = findUserAdmin(inputUsername, inputPassword);
    if (userlogged) {
      const LoginPage = getQuerySelector("#", "login-page-index-view", true);
      const createRequestPage = getQuerySelector(
        "#",
        "main-form-create-request",
        true
      );

      setDisplay(LoginPage, false);
      setDisplay(createRequestPage, true);
    }
  }
  */
}
