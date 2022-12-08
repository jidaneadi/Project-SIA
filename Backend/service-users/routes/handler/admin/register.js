const { Admin } = require('../../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const schema = {
        id_role : 'string|empty:false',
        name : 'string|empty:false',
        ttl : 'string|empty:false',
        gender : 'string|empty:false',
        email : 'email|empty:false',
        noHP : 'string|empty:false',
        alamat : 'string|empty:false',
        pass : 'string|min:8'
    }

    const validation = v.validate(req.body, schema);

    if(validation.lenght){
        return res.status(400).json({
            status : 'ERROR',
            msg : validation
        });
    }

    const Email = await Admin.findOne({
        where : {email : req.body.email},
        attributes : ['id', 'name']
    })

    if(Email){
        return res.status(400).json({
            status : 'error',
            msg : 'Email is empty'
        });
    }

    const enkripPass = await bcrypt.hash(req.body.pass, 10);

    const data = {
        id_role :req.body.id_role,
        name :req.body.name,
        ttl :req.body.ttl,
        gender :req.body.gender,
        email : req.body.email,
        noHP :req.body.noHP,
        alamat :req.body.alamat,
        pass : enkripPass
    }

    const createData = await Admin.create(data);
    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses register admin',
        data : createData
    })
}