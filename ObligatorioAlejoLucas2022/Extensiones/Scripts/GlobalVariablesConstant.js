const AccountEmpresario = "Account - Empresario";
const AccountImportador = "Account - Importador";
const WelcomeEmpresario = "Bienvenido Empresario:";
const WelcomeImportador = "Bienvenido Importador:";
const CargaPeligrosaView = "CargaPeligrosaView";
const ManifiestoDeCargaView = "ManifiestoDeCargaView";
const CrearUnViaje = "CREAR UN VIAJE";
const CrarUnaSolicitud = "CREAR UNA SOLICITUD";
const ErrorCamposCrearViaje = "Por favor, complete todos los campos!";
const ErrorFechaPasada = "Sellecione una fecha a partir de los proximos 5 días";
const SuccesViajeCreado = "El Viaje fue creado de manera exitosa!";
const Empresas = [];
const Importadores = [];
const Viajes = [];
const Solicitudes = [];
const SuplierNamesText = [];
const SuplierNames = {};
const AllMonths = [
  {name: "Enero", quantity: 31, start: 5},
  {name: "Febrero", quantity: 28, start: 1},
  {name: "Marzo", quantity: 31, start: 1},
  {name: "Abril", quantity: 30, start: 4},
  {name: "Mayo", quantity: 31, start: 6},
  {name: "Junio", quantity: 30, start: 2},
  {name: "Julio", quantity: 31, start: 4},
  {name: "Agosto", quantity: 31},
  {name: "Septiembre", quantity: 30, start: 3},
  {name: "Octubre", quantity: 31, start: 5},
  {name: "Noviembre", quantity: 30, start: 1},
  {name: "Diciembre", quantity: 31, start: 3},
];
let currentView = "";
let requestToAsign;
let OBJ1Selector = {};
let generalSupliersLines = 0;
let userLogged = null;
let userLoggedId = 0;
let typeOfUser;
let typeOfChargeExpressed = "";
let date = new Date();
let todayMonth = String(date.getMonth() + 1);
let todayDay = String(date.getDay() + 5);
let todayYear = String(date.getFullYear());
let currentDate = todayYear + todayMonth + todayDay;
let showQuantity = 1;
let supplierName = "";
let generalSearchText = "";
