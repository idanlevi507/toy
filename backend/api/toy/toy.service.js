const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectID

const collectionName = 'pokemonNew'


async function query(filterBy) {
    //Sorting
    const criteria = null
    try {
        const collection = await dbService.getCollection(collectionName)
        let data = await collection.find(criteria).toArray()
        return data
        // return collection
    } catch (err) {
        throw err
    }
}

async function getById(toyId) {
    try {
        const collection = await dbService.getCollection(collectionName)
        const toy = await collection.findOne({ '_id': ObjectId(toyId) })
        return toy
    } catch (err) {
        throw err
    }
}

async function saveToy2(toy) {
    try {
        const collection = await dbService.getCollection('pokemonNew')
        await collection.insertOne(toy)
        console.log("toy delivered", toy);
        return toy
    } catch (err) {
        throw err
    }
}

async function remove(toyId) {
    try {
        const collection = await dbService.getCollection(collectionName)
        await collection.deleteOne({ '_id': ObjectId(toyId) })
    } catch (err) {
        throw err
    }
    //     const idx = gToys.findIndex(currToy => currToy._id === toyId)
    //     if (idx === -1) return Promise.reject('No such Toy')
    //     gToys.splice(idx, 1)
    //     return utilService.saveToysToFile(gToys, 'toy')
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        criteria.name = { $regex: filterBy.txt, $options: 'i' }
    }
    if (filterBy.inStock !== 'all') {
        criteria.inStock = { $exists: JSON.parse(filterBy.inStock) }
    }
    return criteria
}


module.exports = {
    query,
    saveToy2,
    remove,
    getById
}
