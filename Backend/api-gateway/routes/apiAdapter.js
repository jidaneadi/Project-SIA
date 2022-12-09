const axios = require('axios');
const { TIMEOUT } = process.env;

module.exports = (baseUrlsrv) => {
    return axios.create({
        baseUrl : baseUrlsrv,
        TimeOut: parseInt(TIMEOUT)
    });
}