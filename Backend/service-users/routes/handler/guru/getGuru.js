const { Guru } = require('../../../models');

module.exports = async(req, res) => {
    const data = await Guru.findAll({
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
    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses mengambil semua data Guru',
        data : data
    })
}