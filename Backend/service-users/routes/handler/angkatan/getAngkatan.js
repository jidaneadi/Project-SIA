const { Angkatan } = require('../../../models');

module.exports = async (req, res) =>{

    const allAngkatan = req.query.angkatan_ids || [];

    const sqlOptions = {
        attributes : ['id', 'tahun_masuk']
    }

    if(allAngkatan.lenght){
        sqlOptions.where = {
            id : allAngkatan
        }
    }

    const angkatan = await Angkatan.findAll(sqlOptions);

    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses mengambil data all angkatan',
        data : angkatan
    });
}