const express = require('express')
const router = express.Router()

const KnightController = require('../controller/KnightController')

router.get("/", KnightController.index);
router.post("/", KnightController.store);
router.get("/:id", KnightController.show);
router.put("/:id", KnightController.update);
router.delete("/:id", KnightController.destroy);

module.exports = router