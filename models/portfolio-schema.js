const mongoose = require('../db/connection')

const portfolioSchema = new mongoose.Schema (
    {
        Username: {type: String},
        CashBalance: { type: Number },
        StockHoldings: [
            {
                Symbol: {type: String},
                Shares: { type: Number },
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