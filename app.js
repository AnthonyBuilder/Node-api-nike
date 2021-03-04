const express = require('express')
const ngrok = require('ngrok')

const app = express()

app.get('/shoes', (req, res) => {
    res.json([
        { "id": 0, "title": "Lebron Withnes 4", "image": "nike-air", "category": "Tenis de basquete", "heading": "LeBron Witness 4" },
        { "id": 1, "title": "Lebron Withnes 4", "image": "nike-air-max", "category": "Tenis de basquete", "heading": "AirMax 270 React" }
    ])
})

app.listen(3000, function () {
    console.log('Example with express js in port 3000')
})

ngrok.connect({
    proto: 'http',
    addr : process.env.PORT,
}, (err, url) => {
    if (err) {
        console.error('Error while connectiong ngrok', err)
        return new Error('Ngrok failed')
    }
})