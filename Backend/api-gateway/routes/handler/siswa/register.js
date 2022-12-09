const api = require('../../apiAdapter');
const { URL_SERVICE } = process.env;
const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const siswa = await api.post('/users/siswa/register', req.body);
        return res.json(siswa.data)
    } catch (error) {
        if(error.code == 'ECONREFUSHED'){
            return res.status(500).json({
            status : 'error',
            message: 'service unvailable'
        });  
        }
        
        console.log(error);
        return res.status(404).json(error);
    }
}