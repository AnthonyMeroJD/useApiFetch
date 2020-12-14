import { UIElements, CreateTempleteHtml } from './ui.js';
import { urlApi } from './api.js';

const contenedorResultados = UIElements.getContenedorResultado();
const contenedorMasInformacion = UIElements.getContenedorMasInformacion();
const ciudadInput = UIElements.getInputCiudad();
const formulario = UIElements.getForm();
const paisInput = UIElements.getInputPais();
const buttonMasInformacion = UIElements.getButtonMasInformacion();

console.log('s');
buttonMasInformacion.addEventListener('click', e => {
    e.preventDefault();
    UIElements.theseElementsAreEmpies(ciudadInput, pais) ? CreateTempleteHtml.showNotification('verifique que todos los campos esten llenos') : consultarMasInformacion();
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    UIElements.theseElementsAreEmpies(ciudadInput, pais) ? CreateTempleteHtml.showNotification('verifique que todos los campos esten llenos') : consultarMainInfomacion();
});


function consultarMainInfomacion() {

    const ciudad = ciudadInput.value.replace(' ', '%20');
    const pais = paisInput.value;
    const url = urlApi(ciudad, pais);
    UIElements.cleanContenedorResultado();
    CreateTempleteHtml.createHtmlCardForMainInformation(url, contenedorResultados);

}

function consultarMasInformacion() {
    consultarMainInfomacion()
    const ciudad = ciudadInput.value.replace(' ', '%20');
    const pais = paisInput.value;
    const url = urlApi(ciudad, pais);
    UIElements.cleanContenedorResultado();
    CreateTempleteHtml.createHtmlCardForWeater(url, contenedorMasInformacion);

}