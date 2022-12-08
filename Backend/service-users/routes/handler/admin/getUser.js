const { Admin } = require('../../../models');

module.exports = async(req, res) => {
    const data = await Admin.findAll({
        attributes : {
            id_role :req.body.id_role,
            name :req.body.name,
            ttl :req.body.ttl,
            gender :req.body.gender,
            email : req.body.email,
            noHP :req.body.noHP,
            alamat :req.body.alamat,
        }
    });

    return res.status(200).json({
        status : 'Sukses',
        message: data
    })
}