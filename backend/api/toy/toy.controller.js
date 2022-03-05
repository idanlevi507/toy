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


module.exports = {
    getToys
}
