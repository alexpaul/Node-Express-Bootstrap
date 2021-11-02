const express = require('express')

const app = express() 

const port = '3000'

app.listen(port, () => {
    console.log(`Node Server running on Port ${port}`)
})

app.set('view engine', 'ejs')

// run `node index.js` and visit localhost:3000 to view rendered EJS page
app.get('/', (req, res) => {
    res.render('home')
})

// run `node index.js` and visit localhost:3000/webstack to view rendered EJS page
app.get('/webstack', (req, res) => {
    res.render('webstack')
})