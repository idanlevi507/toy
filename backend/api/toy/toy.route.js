const express = require('express')
const { getToys , saveToy , getById } = require('./toy.controller')
const router = express.Router()

router.get('/', getToys)
router.post('/', saveToy)
router.get('/:toyId', getById)


module.exports = router