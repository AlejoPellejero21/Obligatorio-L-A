//Esta funcion es para la vista ManifiestoDeCargaView
function onViajeSelected() {
    OBJ1Selector['ListaDeViajesManifestAttr'] = getQuerySelector('#', 'lista-de-viajes-actuales-manifest', true);
    OBJ1Selector['ListaManifiestoDeCarga'] = getQuerySelector('#', 'container-table-manifiesto-de-carga', true);
    const AttrId = parseInt(this.getAttribute('data-id'));
    const ManifiestoDeCarga = getQuerySelector('#', 'tabla-manifiesto-de-carga', true);
    const ButtonGoBack = getQuerySelector('#', 'on-click-back-to-manifiesto', true);
    ManifiestoDeCarga.innerHTML = '';

    //Esto se hace ya que hay dos view que muestran tabla de viajes
    //AttrId es igual al viaje que se clickeo
    buildDifferntTables(AttrId, ManifiestoDeCarga);

    ButtonGoBack.addEventListener('click', onGoBackClick);
}
