const { Angkatan } = require('../../../models');

module.exports = async(req, res) => {
    const id = req.params.id;

    const angkatan = await Angkatan.findByPk(id, {
        attributes : ['id', 'tahun_masuk']
    });

    if (!angkatan){
        return res.status(404).json({
            status : 'ERROR',
            message : 'Angkatan not found'
        });
    }
    
    return res.status(200).json({
        status : 'OK!',
        message : 'Berhasi ambil data angkatan dengan ID',
        data : angkatan
    });
}