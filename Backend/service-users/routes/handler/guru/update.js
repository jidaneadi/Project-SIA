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

    const enkripsiPass = await bcrypt.hash(req.body.pass, 10);
    const data = {
        id_role : req.body.id,
        nip : req.body.nip, 
        name : req.body.name, 
        ttl : req.body.ttl, 
        gender : req.body.gender, 
        email : req.body.email,
        noHP : req.body.noHP,
        alamat : req.body.alamat,
        pass : enkripsiPass }

    const updateData = await idGuru.update(data);

    return res.status(200).json({
        status :'OK!',
        message: updateData
    });
}