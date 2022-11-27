const { Guru } = require('../../../models');

module.exports = async(req, res) => {
    const guruIds = req.query.guru_ids || [];
    const sqlOptions = {
        attributes : [
            'id',
            'id_role',
            'nip',
            'name',
            'ttl' ,
            'gender',
            'email',
            'noHP' ,
            'alamat' ,
            'pass'            
        ]
    }

    if(guruIds.lenght){
        sqlOptions.where ={
            id : guruIds
        }
    }

    const data = await Guru.findAll(sqlOptions);
    return res.status(200).json({
        status : 'OK!',
        message: 'Sukses mengambil semua data Guru',
        data : data
    })
}