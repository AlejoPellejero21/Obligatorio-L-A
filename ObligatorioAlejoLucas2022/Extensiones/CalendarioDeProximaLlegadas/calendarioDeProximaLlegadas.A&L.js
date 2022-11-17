<<<<<<< HEAD
let showThisMonth = 0;
let showThisYear = 0;
let dateViajes = [];

=======
>>>>>>> issues/resolviendoFuncionalidadesGenerales
function onCreateCalendarioLlegadas(monthToShow, yearToShow) {
    const YearAttr = getQuerySelector('#', 'show-month-and-year', true);
    const DaysAttr = getQuerySelector('#', 'add-every-day', true);
    const PrevMonth = getQuerySelector('#', 'prev-month-click', true);
    const NextMonth = getQuerySelector('#', 'next-month-click', true);
    showThisMonth = monthToShow || parseInt(todayMonth);
    showThisYear = yearToShow || todayYear;
    DaysAttr.innerHTML = '';
    dateViajes = [];

    AllMonths.forEach(function (month, index) {
        let realNumberMonths = index + 1;
        if (realNumberMonths === showThisMonth) {
            YearAttr.innerHTML = `${month.name}
            <br>
            <span style="font-size:18px">${showThisYear}</span>
            `;
            //Dias en los que empieza el mes
            if (month.start) {
                for (let daysNo = 0; daysNo < month.start; daysNo++) {
                    DaysAttr.innerHTML += `<li>-x-</li>`;
                }
            }

            //Recorro los dias del mes
            let currentUser = userLogged;
            let fechas = getFechasProximas(currentUser);

            for (let days = 1; days <= month.quantity; days++) {
                let añoLlegada, mesLlegada, diaLlegada;
                //Recorro las solicitudes del ususario logged
                fechas.forEach(function (fecha) {
                    añoLlegada = fecha.split('-')[0];
                    mesLlegada = parseInt(fecha.split('-')[1]);
                    diaLlegada = parseInt(fecha.split('-')[2]);
                    //Valido de que la fecha sea en este mes de este año
                    //Este mes, este año me refiero al año y al mes que esta mostrando actualemnte en el calendario
                    if (parseInt(añoLlegada) === parseInt(showThisYear) && mesLlegada === showThisMonth && diaLlegada === days) {                        
                        DaysAttr.innerHTML += `<li><span class="active">${days}</span></li>`
                    }
                });

                if (diaLlegada !== days) {
                    DaysAttr.innerHTML += `<li>${days}</li>`;
                }
            }
        }
    });

    PrevMonth.addEventListener('click', prevMonthCalendario);
    NextMonth.addEventListener('click', nextMonthCalendario);
}

function getFechasProximas(currentUser) {
    //Recorro los viajes
    Viajes.forEach(function (viaje) {
        let viajeShipRequests = viaje.shipRequest; //Solicitudes del viaje
        //Recorro las solicitudes que tiene asignadas el viaje
        viajeShipRequests.forEach(function (solicitud) {
            if (solicitud.requestUserId === currentUser.id && solicitud.requestOrigin.toLowerCase() === 'montevideo') {
                setPush(dateViajes, viaje.shipDate);
            }
        });
    });

    return dateViajes;
}

function nextMonthCalendario() {
    if (showThisMonth === 12) {
        showThisMonth = 1;
        showThisYear++;
    } else {
        showThisMonth++;
    }

    onCreateCalendarioLlegadas(showThisMonth, showThisYear);
}

function prevMonthCalendario() {
    if (showThisMonth === 1) {
        showThisMonth = 12;
        showThisYear--;
    } else {
        showThisMonth--;
    }

    onCreateCalendarioLlegadas(showThisMonth, showThisYear);
}
