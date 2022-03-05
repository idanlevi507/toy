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


module.exports = {
    query
}
