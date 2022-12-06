const { Guru } = require('../../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const id  = req.params.id;
    const schema = {
        id_role : 'string|empty:false',
        nip : 'string|empty:false',
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
            status : 'error',
            message: validation
        });
    }

    const idGuru = await Guru.findByPk(id);

    if(!idGuru){
        return res.status(404).json({
            status : 'ERROR',
            message: 'Guru not found'
        });
    }

    const {id_role, nip, name, ttl, gender, email, noHP, alamat, pass} = req.body;

    const data = await idGuru.update({id_role, nip, name, ttl, gender, email, noHP, alamat, pass});

    return res.status(200).json({
        status :'OK!',
        message: data
    });
}