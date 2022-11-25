const register = require('./regRole');
const roleAll = require('./getRole');
const roleById = require('./getRoleId');
const update = require('./updated');
const delRole = require('./delete')


module.exports = { 
    register, 
    roleAll, 
    roleById, 
    update,
    delRole };