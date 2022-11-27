const { Siswa } = require('../../../models');

module.exports = async(req, res) => {
    const siswaIds = req.query.siswa_ids || [];

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
            'alamat']
    }

    if (siswaIds.lenght){
        sqlOptions.where = {
            id : siswaIds 
        }
    }

    const siswa = await Siswa.findAll(sqlOptions);

    return res.status(200).json({
        status : 'OK!',
        message: 'Berhasil ambil data semua siswa',
        data : siswa
    })

}