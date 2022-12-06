const { Angkatan } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    const idAngkatan = await Angkatan.findByPk(id);

    if(!idAngkatan){
        return res.status(404).json({
            status : 'ERROR',
            message: 'User not found'
        });
    }else{
        await idAngkatan.destroy();
    }

    const allData = await Angkatan.findAll();

    return res.status(200).json({
        status : 'OK!',
        message: allData
    })
}