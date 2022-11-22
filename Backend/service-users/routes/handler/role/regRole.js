const { Role } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        role : 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message : validate
        });
    }

    const data = {
        role : req.body.role
    }

    const createdRole = await Role.create(data);

    return res.status(201).json({
        status : 'Status OK!',
        message : 'Sukses tambah data role'
    })
}