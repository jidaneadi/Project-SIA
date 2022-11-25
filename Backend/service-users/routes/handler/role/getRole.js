const { Role } = require('../../../models');

module.exports = async (req, res, next) => {

    const roleIds = req.query.user_ids || [];
    const sqlOptions = {
        attributes : ['id', 'role']
    }

    if (roleIds.lenght) {
        sqlOptions.where = {
            id : roleIds
        }
    }

    const roleUser = await Role.findAll(sqlOptions);

    return res.status(202).json({
        status : 'Status Ok!',
        message : 'Mengambil data role',
        data : roleUser
    });
}