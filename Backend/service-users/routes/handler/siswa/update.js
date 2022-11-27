const { Siswa } = require('../../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const schema ={
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

    const validation = v.validate(req.body, schema);

    if (validation.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message: validation
        });
    }

    const id = req.params.id;
    const siswa = await Siswa.findByPk(id);

    if (!siswa){
        return res.status(404).json({
            status : 'ERROR',
            message: 'Data siswa tidak ditemukan'
        });
    }

    const email = req.body.email;
    if(email){
        const checkEmail = await Siswa.findOne({
            where : {email}
        });

        //Mengecek apakah terdapat email yang sama
        if(checkEmail && email !== siswa.email ){
            return res.status(400).json({
                status : 'ERROR',
                message: 'Email already exist'
            });
        }
    }

    const password = await bcrypt.hash(req.body.pass, 10);

    const data = {
        pass : password,
        id_role : req.body.id_role,
        id_angkatan: req.body.id_angkatan,
        nisn : req.body.nisn,
        name : req.body.name,
        name_ortu_wali : req.body.name_ortu_wali,
        ttl : req.body.ttl,
        jns_kelamin : req.body.jns_kelamin,
        email : email,
        noHp : req.body.noHP,
        alamat : req.body.alamat
    }

    const createdSiswa = await siswa.update(data);

    return res.status(200).json({
        status : 'OK!',
        message: 'Berhasil update data siswa',
        data : createdSiswa
    })

}