export class UIElements {
    static getContenedorResultado() {
        return document.querySelector('#resultado');
    }
    static getInputCiudad() {
        return document.querySelector('#ciudad');
    }
    static getInputPais() {
        return document.querySelector('#pais');
    }
    static getForm() {
        return document.querySelector('#formulario');
    }

    static theseElementsAreEmpies(...elements) {
        let anyElemetIsEmpy = false;
        elements.forEach(element => element.value === "" ? anyElemetIsEmpy = true : null);
        return anyElemetIsEmpy;
    }
    static appendToParent(child, parent) {
        parent.appendChild(child);
    }
}

export class CreateTempleteHtml {
    static createCardForWheather() {}
    static showNotification(msm) {
        Notification.requestPermission();
        Notification.permission.includes('granted') ? new Notification(msm) : null;
    }
    static createHtmlCardForWeater(weater) {
        console.log(weater);
        const { main, description, name } = weater;
        const div = document.createElement('div');
        div.classList.add('text-center', 'text-white', 'weater')
        div.innerHTML = `<p class = "font-bold text-2xl" > Clima en: ${name} </p> 
        <p class = "font-bold text-6xl" > El clima estara: $ { main } </p>  
        <p class = "text-xl" > descripcion: $ { description } </p>`
        return div;

    }
    static createHtmlCardForMainInformation({ name, temp, temp_min, temp_max }) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'text-white', 'mainInformation')
        div.innerHTML = ` < p class = "font-bold text-2xl" > Clima en: $ { name } < /p> <
                p class = "font-bold text-6xl" > $ { parseKelvinToCelcius(temp) }
            ºC < /p >  <
                p class = "text-xl" > descripcion: MAX: $ { parseKelvinToCelcius(temp_max) } < /p> <
                p class = "text-xl" > descripcion: MIN: $ { parseKelvinToCelcius(temp_min) } < /p>
            `
        return div;

    }
}
const parseKelvinToCelcius = kelvin => {
    return (5 * (kelvin - 32)) / 9
}