import { CreateTempleteHtml } from './ui.js'
const idApi = 'be8cf4d3397e49ec7c34277073b742f4';
export const urlApi = (ciudad, pais) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${idApi}`;
}

export const wheterForThisUrl = (url) => {

    const weather = {
        name: '',
        main: '',
        description: ''

    }
    fetch(url).then((result) => {
        if (result.status !== 200) {
            CreateTempleteHtml.createNotification('no se pudo concretar la busqueda');
            return;
        }
        result.json()
            .then(result => {
                weather.name = result.name;
                return result.weather[0];
            })
            .then(({ main, description }) => {
                weather.main = main;
                weather.description = description;
            });

    }).then(e => weather);


}


export const mainForThisUrl = (url) => {

    const main = {}
    fetch(url).then((result) => {
        if (result.status !== 200) {
            CreateTempleteHtml.createNotification('no se pudo concretar la busqueda');
            return;
        }
        result.json()
            .then(result => {
                main['name'] = result.name;
                return result.main;
            })
            .then(({ temp, temp_max, temp_min }) => {
                main['temp'] = temp;
                main['temp_max '] = temp_max;
                main['temp_min '] = temp_min;
            });
    });
    return main;
}