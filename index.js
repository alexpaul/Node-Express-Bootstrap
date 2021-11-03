const express = require('express')

const app = express() 

const port = '3000'

const moviesData = require('./movies.json')

console.log(moviesData)

app.listen(port, () => {
    console.log(`Node Server running on Port ${port}`)
})

app.set('view engine', 'ejs')

// run `node index.js` and visit localhost:3000 to view rendered EJS page
app.get('/', (req, res) => {
    res.render('home')
})

// run `node index.js` and visit localhost:3000/frontend to view rendered EJS page
app.get('/frontend', (req, res) => {
    const technologies = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React']
    res.render('frontend', { technologies })
})

// run `node index.js` and visit localhost:3000/backend to view rendered EJS page
app.get('/backend', (req, res) => {
    const technologies = ['Node.js', 'Express.js', 'SQL', 'GO', 'MongoDB', 'Java', 'C++']
    res.render('backend', { technologies })
})