const { Angkatan } = require('../../../models');

module.exports = async (req, res) =>{

    const angkatan = await Angkatan.findAll({
        attributes : ['id', 'tahun_masuk']
    });

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses mengambil data all angkatan',
        data : angkatan
    });
}