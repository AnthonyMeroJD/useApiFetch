import { UIElements, CreateTempleteHtml } from './ui.js';
import { urlApi, wheterForThisUrl, mainForThisUrl } from './api.js';
const contenedorResultados = UIElements.getContenedorResultado();
const ciudadInput = UIElements.getInputCiudad();
const formulario = UIElements.getForm();
const paisInput = UIElements.getInputPais();
formulario.addEventListener('submit', e => {
    e.preventDefault();
    UIElements.theseElementsAreEmpies(ciudadInput, pais) ? CreateTempleteHtml.showNotification('verifique que todos los campos esten llenos') : consultarApi();
});


function consultarApi() {
    const ciudad = ciudadInput.value.replace(' ', '%20');
    const pais = paisInput.value;
    const url = urlApi(ciudad, pais);
    const weterInformation = wheterForThisUrl(url);
    console.log(weterInformation);
    //const cardMain = CreateTempleteHtml.createHtmlCardForWeater(weterInformation);
    //UIElements.appendToParent(cardMain, contenedorResultados)


}