const axios = require("axios");



const getLugarLatLng = async(direccion) => {

    const encodeUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '049c1358f6msh9d8f1b01a1f9347p12e884jsn214a7440d73c' }
    });

    const resp = instance.get()
        .then((response) => {
            let data = response.data.Results;

            if (data.length === 0) {
                throw new Error(`No hay resultados para la dirección ${direccion}`);
            }
            data = data[0];

            const res = {
                dir: data.name,
                lat: data.lat,
                lng: data.lon
            };

            return res;

        })
        .catch((error) => {
            console.log(error)
        })

    return resp;






}

module.exports = {
    getLugarLatLng
}