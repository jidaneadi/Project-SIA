const { Angkatan } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) =>{
    const schema = {
        tahun_masuk : 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);

    if (validate.lenght){
        return res.status(400).json({
            status : 'ERROR',
            message : validate
        });
    }

    const data = {
        tahun_masuk : req.body.tahun_masuk
    }

    const craetedData = await Angkatan.create(data);

    return res.status(200).json({
        status : 'Status OK!',
        message : 'Sukses tambah data angkatan',
        data : craetedData
    })
}
