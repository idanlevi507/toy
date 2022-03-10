const express = require('express')
const { getToys , saveToy } = require('./toy.controller')
const router = express.Router()

router.get('/', getToys)
router.post('/', saveToy)


module.exports = router