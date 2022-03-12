const toyService = require('./toy.service')

async function getToys(req, res) {
    try {
        console.log("2");
        const filterBy = { txt: req.query.txt, inStock: req.query.inStock }
        const toys = await toyService.query(filterBy)
        res.send(toys)
    } catch {
        res.status(500).send({ err: 'Failed to get toyss' })
    }
}

async function getById(req, res) {
    const { toyId } = req.params
    try {
        const toy = await toyService.getById(toyId)
        res.send(toy)
    } catch (err) {
        res.status(500).send({ err: 'faild to load toy' })
    }
}

async function saveToy(req, res) {
    console.log(req , res);
    const toyToSave = req.body
    try {
        const toy = await toyService.saveToy2(toyToSave)
        res.send(toy)
    } catch (err) {
        res.status(500).send({ err })
    }
}


module.exports = {
    getToys,
    saveToy,
    getById
}
