const { Siswa } = require('../../../models');
const Validator = require('fastest-validator');
const bcrypt = require('bcrypt');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        id_role : 'string|empty:false',
        id_angkatan: 'string|empty:false',
        nisn : 'string|empty:false',
        name : 'string|empty:false',
        name_ortu_wali : 'string|empty:false',
        ttl : 'string|empty:false',
        jns_kelamin : 'string|empty:false',
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

    const siswa = await Siswa.findOne({
        where : {email: req.body.email},
        attributes : ['id', 'name', 'email']
    });

    if (siswa){
        return res.status(401).json({
            status : 'ERROR',
            message : 'Email sudah digunakan'
        });
    }

    const passwd = await bcrypt.hash(req.body.pass, 10);

    const data = {
        pass : passwd,
        id_role : req.body.id_role,
        id_angkatan: req.body.id_angkatan,
        nisn : req.body.nisn,
        name : req.body.name,
        name_ortu_wali : req.body.name_ortu_wali,
        ttl : req.body.ttl,
        jns_kelamin : req.body.jns_kelamin,
        email : req.body.email,
        noHp : req.body.noHP,
        alamat : req.body.alamat
    }

    const createdSiswa = await Siswa.create(data);

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses tambah data siswa',
        data : createdSiswa
    });
}