const apiAdapter = require('../../apiAdapter');
const {URL_SERVICE_SISWA} = process.env;
const api = apiAdapter(URL_SERVICE_SISWA);

module.exports = async(req, res) => {
    try{
        const id = req.params.id;
        const siswa = await api.get(`/users/siswa/${id}`, req.body);
        return res.json(siswa.data);
    }catch(error){
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