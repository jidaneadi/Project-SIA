const { Siswa } = require('../../../models');

module.exports = async(req, res) => {

    const siswa = await Siswa.findAll({
        attributes : [
            'id',
            'id_role', 
            'id_angkatan', 
            'nisn', 
            'name', 
            'name_ortu_wali', 
            'ttl', 
            'jns_kelamin',
            'email',
            'noHp',
            'alamat']
    });

    return res.status(200).json({
        status : 'OK!',
        message: 'Berhasil ambil data semua siswa',
        data : siswa
    })

}