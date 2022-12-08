const { Admin } = require('../../../models');

module.exports = async(req, res) => {

    const id = req.params.id;
    const adminPk = await Admin.findByPk(id);

    if(!adminPk){
        return res.status(404).json({
            status :'error',
            message: 'User not found'
        });
    }else{
        await adminPk.destroy();
    }

    const allData = await Admin.findAll({
        attributes: ['id','id_role', 'name', 'ttl', 'alamat' ]
    });

    return res.status(200).json({
        status : 'OK!',
        message: 'Succes delete data',
        data : allData
    });
}