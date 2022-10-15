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
                requestType: 0,
                requestDescription: 'Esta carga es una carga que tiene cargas y es muy cargosa.',
                requestOrigin: 'Punta del Este',
                requestQuantity: 20,
                requestSupplierId: 0004,
                requestIgnored: false,
                requestStatus: 0,
                requestId: 0005,
                requestTravelNumber: 0006
            }
        ]
    }
];

let empresas = [
    {
        supplierId: 0007,
        supplierName: 'Lucas',
        supplierAccess: 'Lucas.2022',
        supplierPassword: 'lucas1234',
        travels: [
            {
                shipName: 'Buque-AK-47',
                shipQuantity: 30,
                shipLineSupplier: 0010,
                shipDate: '20/10/2022',
                shipId: 0011,
                shipRollover: false,
                shipRequest: {
                    shipRquestId: 0013,
                    shipRquestId: 0014,
                    shipRquestId: 0015
                }
            }
        ]

    }
]