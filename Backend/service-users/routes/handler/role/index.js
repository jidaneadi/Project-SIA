const register = require('./regRole');
const roleAll = require('./getRole');
const roleById = require('./getRoleId');
const update = require('./updated');

module.exports = { 
    register, 
    roleAll, 
    roleById, 
    update };