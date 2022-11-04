class Importador {
    constructor(userId, userName, userAccess, userPassword) {
        this.id = userId;
        this.userName = userName;
        this.userAccess = userAccess;
        this.userPassword = userPassword;
        this.userEnabled = true;
        this.userCancelInfo = 0;
        this.userLinesInfo = 0;
        this.userRequest = [];
    }
}

class Empresa {
    constructor(supplierId, supplierName, supplierAccess, supplierPassword) {
        this.id = supplierId;
        this.supplierName = supplierName;
        this.userAccess = supplierAccess;
        this.userPassword = supplierPassword;
        this.supplierTrips = [];
    }
}

class Solicitud {
    constructor(requestId, requestType, requestDescription, requestOrigin, requestQuantity, requestStatus) {
        this.id = requestId;
        this.requestType = requestType;
        this.requestDescription = requestDescription;
        this.requestOrigin = requestOrigin;
        this.requestQuantity = requestQuantity;
        this.requestSupplierId = 0;
        this.requestStatus = requestStatus;
        this.requestTravelNumber = 0;
    }
}

class Viaje {
    constructor(shipId, shipName, shipQuantity, shipDate) {
        this.id = shipId;
        this.shipName = shipName;
        this.shipQuantity = shipQuantity;
        this.shipQuantityAvailable = shipQuantity;
        this.shipDate = shipDate;
        this.shipSupplierId = 0;
        this.shipRollover = false;
        this.shipRequest = [];
    }
}


/*EJEMPLO DE USUASRIOS Y DATOS

let importadores = [
    {
        userId: 0001,//Unique
        userName: 'Fernando',
        userAccess: 'Fernandinio.2022',//Unique
        userPassword: 'pass-1234',
        userEnabled: true,
        userCancelInfo: 20, //Procentaje de cancelaciones
        userLinesInfo: 30, //Porcentaje de participacion
        userRequest: [
            {
                requestType: 0, // CargaGeneral -> 0 || Refrigerado -> 1 || CargaPeligrosa -> 2
                requestDescription: 'Esta carga es una carga que tiene cargas y es muy cargosa.',
                requestOrigin: 'Punta del Este', // Montevideo
                requestQuantity: 6,
                requestSupplierId: 0000, //Unique id -> 0000 
                requestIgnored: false,
                requestStatus: 0, //Pendiente -> 0 || Aprobada -> 1 || Cancelada -> 2 || Ignorada -> 3
                requestId: 0005, //Unique
                requestTravelNumber: 0006 //Unique
            }
        ]
    }
];

let empresas = [
    {
        supplierId: 0007, //Unique
        supplierName: 'Lucas',
        supplierAccess: 'Lucas.2022',
        supplierPassword: 'lucas1234',
        supplierTrips: [
            {
                shipName: 'Buque-AK-47', //Buque-Nombre-de-cogollos
                shipQuantity: 30,
                shipQuantityAvailable: 12,
                shipSupplierId: 0010, //Unique
                shipDate: '20/10/2022',//DD/MM/AAAA || MM/DD/AAAA || AAAA/MM/DD
                shipId: 0047, //Unique
                shipRollover: false,
                shipRequest: {
                    shipRquestId: 0013,
                    shipRquestId: 0014,
                    shipRquestId: 0015
                }
            }
        ]

    }
];*/