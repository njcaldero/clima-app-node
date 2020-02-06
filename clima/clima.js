const axios = require("axios");

const getClima = async(lat, lon) => {

    const res = await axios.get(` http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5e0efc7096798ce4c3248211052eedd8`);



    return res.data.main.temp;

}

module.exports = {
    getClima
}