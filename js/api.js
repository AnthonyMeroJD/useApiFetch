const idApi = 'be8cf4d3397e49ec7c34277073b742f4';
export const urlApi = (ciudad, pais) => `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${idApi}`;