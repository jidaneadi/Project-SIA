const allData = require('./getSiswa');
const dataByID = require('./getSiswaId');
const registerSiswa = require('./regSiswa');
const updateData = require('./update');
const delSiswa = require('./delete');

module.exports = {registerSiswa, allData, dataByID, updateData, delSiswa};