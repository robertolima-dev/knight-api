const mongoose = require('../config/database')
const Schema = mongoose.Schema

const HeroesSchema = new Schema({

    name: {type: String, required: false},
    nickname: {type: String, required: false},
    birthday: {type: String, required: false},
    weapons: [
        {
            name:  {type: String, required: true},
            mod: {type: Number, required: true},
            attr: {type: String, required: true},
            equipped: {type: Boolean, required: true},
        }
    ],
    attributes: {
        strength: {type: Number, required: true},
        dexterity: {type: Number, required: true},
        constitution: {type: Number, required: true},
        intelligence: {type: Number, required: true},
        wisdom: {type: Number, required: true},
        charisma: {type: Number, required: true},
    },
    keyAttribute: {type: String, required: true},

})

module.exports = mongoose.model("Heroes", HeroesSchema)