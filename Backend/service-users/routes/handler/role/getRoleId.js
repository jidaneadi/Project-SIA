const { Role } = require('../../../models');

module.exports = async(req, res, next) => {
    const id = req.params.id;
    const role = await Role.findByPk(id, {
        attributes : ['id', 'role']
    });

    if (!role){
        return res.status(401).json({
            status : 'Error',
            message : 'Role not found'
        });
    }

    return res.status(203).json({
        status : 'Ok!',
        message : 'Get Role by id',
        data : role
    })
}