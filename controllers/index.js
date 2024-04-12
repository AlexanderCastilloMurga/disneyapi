const models = require("../database/models/index.js");

const createdisnapi= async (req, res) => {
try {
        const disneyapi = await models.disnapi.create(req.body);
        return res.status (201).json({
                disneyapi
        });
}catch (error){
        return res.status(500).json({ error : error.message });
}
};

const getAlldisnapis = async (req, res) => {
        try {
                const disneyapis = await models.disnapi.findAll({
                        inclde:[
			]
                });
                return res.status(200).json({ disneyapis });
        }catch(error){
               return res.status(500).send(error.message);
        }
};
module.exports = {
        createdisnapi,
        getAlldisnapis
};

