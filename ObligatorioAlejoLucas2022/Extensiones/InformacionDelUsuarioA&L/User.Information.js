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
];