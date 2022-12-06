const { Role } = require('../../../models');

module.exports = async (req, res, next) => {

    const roleUser = await Role.findAll({
        attributes : ['id', 'role']
    });

    return res.status(202).json({
        status : 'Ok!',
        message : 'Mengambil data role',
        data : roleUser
    });
}