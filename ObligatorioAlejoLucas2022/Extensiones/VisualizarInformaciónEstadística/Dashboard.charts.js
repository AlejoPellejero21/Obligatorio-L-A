function onLoadLineasDeCarga(solicitud) {
    Empresas.forEach(function (empresa) {
        if (empresa.id === solicitud.requestSupplierId) {
            if (SuplierNames[`${empresa.supplierName}`]) {
                SuplierNames[`${empresa.supplierName}`] += 1;
            } else {
                SuplierNames[`${empresa.supplierName}`] = 1;
                setPush(SuplierNamesText, empresa.supplierName);
            }
            generalSupliersLines++;
        }
    });
}

function onDashboardCancelaciones() {
    var xValues = ['%:Canceladas', '%:Aprobadas', '%:Ingoradas', '%:Pendientes'];
    const UserAlreadyLogged = userLogged && userLogged.userRequests;
    var porcentajeId = 'chart-porcentaje-cancelaciones';
    var linesId = 'chart-lineas-de-carga';
    var generalRequests = 0;
    var canceladas = 0;
    var aprobadas = 0;
    var ignoradas = 0;
    var pendientes = 0;
    var charAttributeId0 = OBJ1Selector[porcentajeId];
    var charAttributeId1 = OBJ1Selector[linesId];

    if (charAttributeId0 && charAttributeId1) {
        charAttributeId0.destroy();
        charAttributeId1.destroy();
    }

    UserAlreadyLogged.forEach(function (solicitud) {
        generalRequests++;
        switch (solicitud.requestStatus) {
            case 0: //Pendiente
                pendientes++;
                break;
            case 1: //Aprobada
                aprobadas++;
                break;
            case 2: //Cancelada
                canceladas++;
                break;
            default: //Ignorada
                ignoradas++;
                break;
        }

        onLoadLineasDeCarga(solicitud);
    });

    canceladas = getPorcentajes(generalRequests, canceladas);
    aprobadas = getPorcentajes(generalRequests, aprobadas);
    ignoradas = getPorcentajes(generalRequests, ignoradas);
    pendientes = getPorcentajes(generalRequests, pendientes);
    var yValues = [canceladas, aprobadas, ignoradas, pendientes];
    var barColors = ['#b91d47', '#00aba9', '#aaaaaa', '#e8c3b9'];

    createNewChart(porcentajeId, xValues, yValues, barColors);

    if (SuplierNamesText.length > 0) {
        var lineColores = ['#fece7c', '#cb0200', '#034e91'];
        var xLineValues = [];
        var yLinesValues = [];
        SuplierNamesText.forEach(function (suplierName) {
            const SuplierAttributes = {
                porcentaje: getPorcentajes(generalSupliersLines, SuplierNames[suplierName]),
                suplierName: suplierName,
            };
            setPush(xLineValues, SuplierAttributes.suplierName);
            setPush(yLinesValues, SuplierAttributes.porcentaje);
        });

        createNewChart(linesId, xLineValues, yLinesValues, lineColores);
    }
}

function getPorcentajes(general, value) {
    return Math.round((100 / general) * value);
}

function createNewChart(id, xValues, yValues, barColors) {
    OBJ1Selector[`${id}`] = new Chart(id, {
        type: 'doughnut',
        data: {
            labels: xValues,
            datasets: [
                {
                    backgroundColor: barColors,
                    data: yValues,
                },
            ],
        },
        options: {
            title: {
                display: true,
                text: 'Reservado por A&L COMPANY(Alejo Pellejero y Lucas Alvarez)',
            },
        },
    });

    return;
}

function createChartView(id) {
    const newAttributo = getQuerySelector('#', 'add-' + id, true);
    newAttributo.innerHTML = '';

    return (newAttributo.innerHTML += `<canvas id="${id}" style="width:200px;max-width:400px"></canvas>`);
}
