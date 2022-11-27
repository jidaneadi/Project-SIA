const { Siswa } = require('../../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const siswa = await Siswa.findByPk(id, {
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
    });

    if (!siswa){
        return res.status(404).json({
            status : 'ERROR',
            message : 'Data siswa tidak ditemukan'
        });
    }

    return res.status(200).json({
        status : 'OK!',
        message: 'Berhasil mengambil data siswa dengan ID',
        data : siswa
    });

}