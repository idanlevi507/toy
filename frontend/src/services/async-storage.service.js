
export const storageService = {
    query
}

function query(entityType, delay = 0) {
    var entities = JSON.parse(localStorage.getItem(entityType))
    if (!entities) {
        entities = _seedDB(entityType)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _seedDB(entityType) {
    const data = [
        {
            _id: 'JVrvB',
            name: 'Checkers',
            category: 'board games',
            price: 50,
            createdAt: Date.now(),
            inStock: true
        },
        {
            _id: 'c6UI8',
            name: 'Monopoly',
            category: 'board games',
            price: 120,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            inStock: true
        },
        {
            _id: 'j789U',
            name: 'Talking',
            category: 'dolls',
            price: 87,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            inStock: true
        },
        {
            _id: '1122E',
            name: 'Catan',
            category: 'board games',
            price: 175,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            inStock: true
        },
    ]
    _save(entityType, data)
    return data
}