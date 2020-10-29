const KnightModel = require('../model/KnightModel')
const HeroesModel = require('../model/HeroesModel')

class KnightController {

    async index(req, res) {
        if(req.query.filter === 'heroes') {
            await HeroesModel.find()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        } else {
            await KnightModel.find()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        }
    }

    async store(req, res) {
        const knight = new KnightModel(req.body)
        await knight
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async show(req, res) {
        await KnightModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response)
            } else {
                return res.status(404).json({ error: 'Knight não encontrada' });
            }
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async update(req, res) {
        await KnightModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async destroy(req, res) {
        await KnightModel.deleteOne({ '_id': req.params.id })
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}
module.exports = new KnightController()