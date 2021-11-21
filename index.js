const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/rate', (req, res) => {
    console.log(req)
    var rates = []
    var obj = {
        "service_name": "Powered By Shipper",
        "service_code": "SHIPPER",
        "total_price": "10000",
        "description": "Powered by shipper Description",
        "currency": "IDR",
        "min_delivery_date": "2013-04-12 14:48:45 -0400",
        "max_delivery_date": "2013-04-12 14:48:45 -0400"
    }
    rates.push(obj)
    var response = {
        rates: rates
    }

    console.log(response)
    res.send(response)
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})