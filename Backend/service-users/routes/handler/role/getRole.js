const { Role } = require('../../../models');

module.exports = async (req, res, next) => {

    const roleId = req.query.user_ids || [];
    const sqlOptions = {
        attributes : ['id', 'role']
    }

    if (roleId.lenght) {
        sqlOptions.where = {
            id : roleId
        }
    }

    //mengambil semua data yang cocok dengan data kolom di variabel sqlOptions
    const roleUser = await Role.findAll(sqlOptions);

    return res.status(202).json({
        status : 'Ok!',
        message : 'Mengambil data role',
        data : roleUser
    });
}