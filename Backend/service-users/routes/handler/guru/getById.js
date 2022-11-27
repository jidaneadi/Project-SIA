const { Guru } = require('../../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const idGuru = await Guru.findByPk(id, {
        attributes : [
            'id',
            'id_role',
            'nip',
            'name',
            'ttl' ,
            'gender',
            'email',
            'noHP' ,
            'alamat' ,
            'pass'  
        ]
    });

    if (!idGuru) {
        return res.status(404).json({
            status : 'ERROR',
            message: 'Data guru tidak ditemukan'
        });
    }

    return res.status(200).json({
        status : 'OK!',
        message: 'Berhasil mengambil data Guru dengan ID',
        data : idGuru
    })
}