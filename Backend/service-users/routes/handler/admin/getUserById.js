const { Admin } = require('../../../models');

module.exports = async(req, res) => {

    const id = req.params.id;
    const data = await Admin.findByPk(id, {
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

    if(!data){
        return res.status(404).json({
            status : 'error',
            message: 'Admin not found'
        });
    } else {
        return res.status(200).json({
            status : 'OK!',
            message: data
        });
    }
}