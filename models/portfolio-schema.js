const mongoose = require('../db/connection')

const portfolioSchema = new mongoose.Schema (
    {
        Username: {type: String},
        CashBalance: { type: Number },
        StockHoldings: [
            {
                Symbol: {type: String},
                Shares: { 
                    type: Number,
                    get: v => Math.round(v),
                    set: v => Math.round(v)  
                },
                Cost: { type: Number }
            }
        ],
        Watch: [
            {
                Symbol: {type: String}
            }
        ]
    }

)


const Portfolio = mongoose.model("portfolio", portfolioSchema);
module.exports = Portfolio