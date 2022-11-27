const { Guru } = require('../../../models');
const Validator = require('fastest-validator');
const bcrypt = require('bcrypt');
const v = new Validator();

module.exports = async (req, res) => {
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

    const validate = v.validate(req.body, schema);

    if (validate.length){
        return res.status(400).json({
            status : 'ERROR',
            message : validate
        });
    }

    const guru = await Guru.findOne({
        where : {email: req.body.email},
        attributes : ['id', 'name', 'email']
    });

    if (guru){
        return res.status(401).json({
            status : 'ERROR',
            message : 'Email sudah digunakan'
        });
    }

    const passwd = await bcrypt.hash(req.body.pass, 10);

    const data = {
        pass : passwd,
        id_role : req.body.id_role,
        nip : req.body.nip,
        name : req.body.name,
        ttl : req.body.ttl,
        gender : req.body.gender,
        email : req.body.email,
        noHp : req.body.noHP,
        alamat : req.body.alamat
    }

    const createdGuru = await Guru.create(data);

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses tambah data siswa',
        data : createdGuru
    });
}