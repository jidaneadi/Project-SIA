const { Angkatan } = require('../../../models');

module.exports = async (req, res) =>{

    const idAngkatan = req.query.angkatan_ids || [];

    const sqlOptions = {
        attributes : ['id', 'tahun_masuk']
    }

    if(idAngkatan.lenght){
        sqlOptions.where = {
            id : idAngkatan
        }
    }

    const allAngkatan = await Angkatan.findAll(sqlOptions);

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses mengambil data all angkatan',
        data : allAngkatan
    });
}