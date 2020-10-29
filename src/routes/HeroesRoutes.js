const express = require('express')
const router = express.Router()

const HeroesController = require('../controller/HeroesController')

router.post("/", HeroesController.store);

module.exports = router