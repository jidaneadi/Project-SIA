const register = require('./register');
const allData = require('./getUser');
const dataById= require('./getUserById');
const updateData = require('./update');
const delData = require('./delete')

module.exports = { register, allData, dataById, updateData, delData};