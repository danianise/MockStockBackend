const Portfolio = require('../models/portfolio-schema')
const seedData = require('./portfolios.json')

Portfolio.deleteMany({})
    .then(() =>
        Portfolio.insertMany(seedData)
    )
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });