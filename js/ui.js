export class UIElements {
    static getContenedorResultado() {
        return document.querySelector('#resultado');
    }
    static getContenedorMasInformacion() {
        return document.querySelector('#mas-informacion');
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
    static getButtonMasInformacion() {
        return document.querySelector('#mas-informacion-button');
    }
    static theseElementsAreEmpies(...elements) {
        let anyElemetIsEmpy = false;
        elements.forEach(element => element.value === "" ? anyElemetIsEmpy = true : null);
        return anyElemetIsEmpy;
    }
    static appendToParent(child, parent) {
        parent.appendChild(child);
    }
    static cleanContenedorResultado() {
        while (this.getContenedorResultado().firstElementChild) {
            this.getContenedorResultado().firstElementChild.remove();
        }

        while (this.getContenedorMasInformacion().firstElementChild) {
            this.getContenedorMasInformacion().firstElementChild.remove();

        }
    }
}

export class CreateTempleteHtml {
    static createCardForWheather() {}
    static showNotification(msm, parent) {
        const existSomeErrorAlert = document.querySelector('.bg-red-100')
        if (!existSomeErrorAlert) {
            const alerta = document.createElement('div');

            alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center");

            alerta.innerHTML = `
              <strong class="font-bold">Error!</strong>
              <span class="block sm:inline">${msm}</span>
          `;
            const p = parent || document.querySelector('.container');
            p.appendChild(alerta);
            setTimeout(() => {
                const alert = document.querySelector('.bg-red-100')
                alert.remove();
            }, 3000);

        }
    }

    static createHtmlCardForWeater(url, parent) {
        showSpiner();

        fetch(url).then((result) => {
                if (result.status !== 200) {
                    this.showNotification('no se pudo concretar la busqueda');
                    return;
                }
                hideSpiner();
                return result.json().then(result => result);
            }).then(result => {
                const inf = {
                    main: result.weather[0].main,
                    description: result.weather[0].description,
                    name: result.name
                }
                return inf;

            })
            .then(inf => {
                const card = createCardForWeatherHtml(inf)
                parent.appendChild(card);
            });

    }
    static createHtmlCardForMainInformation(url, parent) {
        showSpiner();
        fetch(url).then((result) => {
                if (result.status !== 200) {
                    this.showNotification('no se pudo concretar la busqueda');
                    return;
                }
                hideSpiner();
                return result.json().then(result => result);
            }).then(result => {
                const inf = {
                    main: result.main,
                    name: result.name
                }
                return inf;

            })
            .then(inf => {

                const card = createCardForMainHtml(inf)
                parent.appendChild(card);
            });
    }


}
const parseKelvinToCelcius = kelvin => {
    return Math.round(kelvin - 273.15);
}

const createCardForMainHtml = ({ main, name }) => {
    const { temp, temp_max, temp_min } = main;
    console.log(temp);
    const div = document.createElement('div');
    div.classList.add('text-center', 'text-white', 'weater');
    div.innerHTML = `<p class = "font-bold text-2xl" > El Clima en: ${name} </p> 
                <p class = "font-bold text-6xl" >  ${parseKelvinToCelcius(temp)}º </p>  
                 <p class = "text-xl" > temperatura maxima: ${parseKelvinToCelcius(temp_max)}º  </p>
                 <p class = "text-xl" > temperatura minima: ${parseKelvinToCelcius(temp_min)}º </p>
                 `

    return div;


}

const hideSpiner = () => {
    const spinner = document.querySelector('.sk-fading-circle');
    spinner ? spinner.remove() : null;

}
const showSpiner = () => {


    UIElements.cleanContenedorResultado();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');
    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      `;
    resultado.appendChild(divSpinner);

}

const createCardForWeatherHtml = ({ main, description, name }) => {
    const div = document.createElement('div');
    div.classList.add('text-center', 'text-white', 'weater');
    div.innerHTML = `<p class = "font-bold text-2xl" > El Clima en: ${name} </p> 
                <p class = "font-bold text-6xl" > El clima estara: ${main} </p>  
                 <p class = "text-xl" > descripcion del clima: ${description} </p>`
    return div;


}