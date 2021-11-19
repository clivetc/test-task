const Village = require ('../models/Village');

exports.getRoutes = async (req, res, next) => {
    try{
        const village = await Village.find();
    }catch(err){

    }
}