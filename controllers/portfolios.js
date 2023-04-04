const express = require('express')
// const { update } = require('../models/portfolio-schema')
const router = express.Router()
const Portfolio = require('../models/portfolio-schema')

//Getting All Portfolios
router.get('/', async (req, res) => {
    try{
        const portfolios = await Portfolio.find()
        res.json(portfolios)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

//Getting One Portfolio
router.get('/:id', getPortfolio, (req, res) => {
    res.json(res.portfolio)
})

//Creating One Portfolio
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        Username: req.body.Username,
        CashBalance: req.body.CashBalance
    })
    try {
        const newPortfolio = await portfolio.save()
        res.status(201).json(newPortfolio)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One Portfolio
router.patch('/:id', getPortfolio, async (req, res) => {
    if(req.body.Username != null){
        res.portfolio.Username = req.body.Username
    }
    if(req.body.CashBalance != null){
        res.portfolio.CashBalance = req.body.CashBalance
    }
    if(req.body.StockHoldings != null){
        res.portfolio.StockHoldings = req.body.StockHoldings
    }
    if(req.body.Watch != null){
        res.portfolio.Watch = req.body.Watch
    }
    try {
        const updatedPortfolio = await res.portfolio.save()
        res.json(updatedPortfolio)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})

// Deleting One Portfolio
router.delete('/:id', getPortfolio, async (req, res) => {
    try {
        await res.portfolio.remove()
        res.json({message: 'Deleted Portfolio'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getPortfolio(req, res, next){
    let portfolio
    try {
        portfolio = await Portfolio.findById(req.params.id)
        if(portfolio == null){
            return res.status(404).json({message: 'Cannot find this user (find by ID)'})
        }
    } catch(err){
        return res.status(500).json({message: err.message})
    }

    res.portfolio = portfolio
    next()
}

// router.get('/', (req,res) => {
//     Portfolio.find({})
//         .then(data => res.json(data))
// })

// router.get('/:all', (req, res) => {
//     Portfolio.find({})
//         .then(data => res.json(data))
// })

// router.get('/search/:symbol', (req, res) => {
//     Portfolio.find({})
//         .then(data => res.json(data))
// })




// router.get('/watchlist', (req, res) => {
//     Portfolio.find({ Watch: { $not: { $size: 0 }} })
//         .then(data => res.json(data))
// })


// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body);
//         console.log(updatedPortfolio);
//         return res.redirect(`/portfolios`)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.put('search/:id', async (req, res, next) => {
//     try {
//         const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body);
//         console.log(updatedPortfolio);
//         return res.redirect(`/portfolios`)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.delete('/:id/', (req, res) => {
//     Portfolio.findByIdAndDelete({ _id: req.params.id })
//         .then(() => res.redirect('/portfolios'))
//         .catch(console.error)
// })

module.exports = router