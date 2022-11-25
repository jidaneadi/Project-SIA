const { Role } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const id = req.params.id;

    const schema = {
        role : 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.lenght){
        return res.status(402).json({
            status : 'ERROR',
            message : validate
        });
    }

    const roleUser = await Role.findByPk(id);

    if (!roleUser){
        return res.status(403).json({
            status : 'error',
            message : 'Role not found'
        });
    }

    const { role } = req.body;

    await roleUser.update({role});

    return res.status(204).json({
        status : 'OK!',
        message : {
            id : roleUser.id, 
            role
        },
    });
}