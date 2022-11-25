const { Role } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;

    const roleId = await Role.findByPk(id);

    if (!roleId){
        return res.status(405).json({
            status : 'error',
            message : 'Role not found'
        });
    }else {
        await roleId.destroy();
    }

    const sqlOptions = {
        attributes : ['id', 'role']
    }

    const roleUser = await Role.findAll(sqlOptions);

    return res.status(205).json({
        status : 'OK!',
        message : 'Berhasil Hapus Data',
        data : roleUser
    })


}