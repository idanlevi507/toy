const express = require('express')
const { getToys } = require('./toy.controller')
const router = express.Router()

router.get('/', getToys)


module.exports = router