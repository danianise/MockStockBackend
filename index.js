const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')
app.use(cors())

// const port = 4000

const data=[
    {
        username: "genericUser",
        cashBalance: 1234.56,
        portfolioBalance: 76543.21,
        stockHoldings: [
            {
                symbol: "GOOG",
                holding: 2049.77
            },
            {
                symbol: "AAPL",
                holding: 134.76
            }
        ]
    }
]

app.get("/", (req, res) => {
    res.json(data)
})

// app.listen(port, () => {console.log(`listening on port ${port}`)})
app.listen(process.env.PORT || 4000, () => {
    console.log("app is listening")
})