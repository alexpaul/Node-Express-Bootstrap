const express = require('express')

const app = express() 

const port = '3000'

const moviesData = require('./movies.json')

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

app.get('/ron', (req, res) => {
    // destructuring an object using the ...spread operator 
    // passing movie over to the EJS page will give us access to ALL movie's properties
    const movie = { ...moviesData.results[0] } 

    // we can go a step further and destructure `movie` so we can access the properties 
    // directly without needing to write `movie.originalTitle` instead just write `originalTitle`
    res.render('ron', { ...movie })
})