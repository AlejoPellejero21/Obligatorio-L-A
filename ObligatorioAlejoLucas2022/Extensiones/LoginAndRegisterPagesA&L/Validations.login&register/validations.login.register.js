let registerValidators = [
  {
    id: "inputName",
    errMsg: "Por favor ingrese nombre",
    fnValidate: emptyInput,
  },

  {
    id: "inputUsername",
    errMsg: "Por favor ingrese nombre de usuario",
    fnValidate: emptyInput,
  },
  {
    id: "usernameInUse",
    errMsg: "Por favor ingrese nombre de usuario",
    fnValidate: findUser,
  },
  {
    id: "inputPassword",
    errMsg: "Por favor ingrese contraseña",
    fnValidate: emptyInput,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: emptySelect,
  },
];

let loginValidators = [
  {
    id: "inputUsername",
    errMsg: "ingrese un nombre de usuario valido",
    fnValidate: findUser,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: emptyInput,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: emptyInput,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: emptyInput,
  },
];
