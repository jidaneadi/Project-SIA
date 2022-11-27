const { Siswa } = require('../../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const idSiswa = await Siswa.findByPk(id);

    if(!idSiswa){
        return res.status(400).json({
            status : 'ERROR',
            message: 'Data siswa tidak ditemukan'
        });
    } else{
        await idSiswa.destroy();
    }

    const sqlOptions = {
        attributes : [
            'id',
            'pass', 
            'id_role', 
            'id_angkatan', 
            'nisn', 
            'name', 
            'name_ortu_wali', 
            'ttl', 
            'jns_kelamin',
            'email',
            'noHp',
            'alamat'
        ]
    }

    const data = await Siswa.findAll(sqlOptions);

    return res.status(200).json({
        status : 'OK!',
        message: 'Data siswa berhasil dihapus',
        data : data
    })
}