const { Angkatan } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const schema = {
        tahun_masuk : 'string |empty:false'
    }

    const validation = v.validate(req.body, schema);

    if (validation.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message : validation
        });
    }

    const id = req.params.id;
    const angkatan = await Angkatan.findByPk(id);

    const {tahun_masuk} =req.body;

    const updateData = await angkatan.update({tahun_masuk});

    return res.status(200).json({
        status : 'OK!',
        message : ' Sukses update data angkatan',
        data : updateData
    })
}