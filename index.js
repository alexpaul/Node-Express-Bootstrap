const express = require('express')

const app = express() 

const port = '3000'

app.listen(port, () => {
    console.log(`Node Server running on Port ${port}`)
})

// run `node index.js` and visit localhost:3000 to view rendered HTML page
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to our Homepage.</h1>`)
})