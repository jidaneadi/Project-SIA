const { Admin } = require('../../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) =>{

    const schema = {
        id_role :'string|empty:false',
        name :'string|empty:false',
        ttl :'string|empty:false',
        gender :'string|optional',
        email : 'email|empty:false',
        noHP :'string|empty:false',
        alamat :'string|empty:false',
        pass : 'string|min:6'
    }

    const validation = v.validate(req.body, schema);
    if (validation.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message: validation
        });
    }

    const id = req.params.id;
    const adminPk = await Admin.findByPk(id);
    
    if(!adminPk){
        return res.status(404).json({
            status : 'error',
            message: 'Id admin not found'
        });
    }

    const checkEmail = await Admin.findOne({
        where : {email : req.body.email}
    });

    if(checkEmail){
        return res.status(400).json({
            status : 'error',
            message: 'Email already exist'
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

    const updateData = await adminPk.update(data);

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses update data admin',
        data : updateData
    })
}