const HeroesModel = require('../model/HeroesModel')

class HeroesController {

    async store(req, res) {
        const heroes = new HeroesModel(req.body)
        await heroes
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}
module.exports = new HeroesController()