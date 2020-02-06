const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion).then((response) => {

//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// clima.getClima(35, 139).then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


const getInfo = async(direccion) => {

    try {

        const cor = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cor.lat, cor.lng);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        return error;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);