const register = require('./regAngkatan')
const getAngkatan = require('./getAngkatan');
const getID = require('./getById');
const updateData = require('./updated');
const delData = require('./delete')

module.exports = {register, getAngkatan, getID, updateData, delData};