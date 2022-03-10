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


module.exports = {
    query,
    saveToy2
}
