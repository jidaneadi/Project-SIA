const { Guru } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    const idGuru = await Guru.findByPk(id);

    if(!idGuru){
        return res.status(404).json({
            status : 'ERROR',
            message: ' Guru not found'
        });
    }else{
        await idGuru.destroy();
    }

    const allData = await Guru.findAll();

    return res.status(200).json({
        status : 'OK!',
        message: allData
    });
}