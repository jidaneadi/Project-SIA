const allData = require('./getSiswa');
const dataByID = require('./getSiswaId');
const registerSiswa = require('./regSiswa');
const updateData = require('./update')

module.exports = {registerSiswa, allData, dataByID, updateData};