# Node, Express, EJS and Bootstrap

Using Node, Express, EJS and Bootstrap to demo the following: 
* running a [node server](https://nodejs.org/en/docs/guides/getting-started-guide/)
* setting up routes using [express](http://expressjs.com/en/guide/routing.html)
* navigation using a [Bootstrap Nav Bar](https://getbootstrap.com/docs/4.0/components/navbar/)
* passing data from a route to an [EJS page](https://ejs.co/#docs)
* using EJS, using EJS includes [(partials)](https://sailsjs.com/documentation/concepts/views/partials)

## Installation 

1. Clone this repo. 
2. Run `npm install` from within the Project folder in a Terminal window or VSCode. 
3. Run the node server `node index.js` and navigate to `localhost:3000` in your browser to view this project. View should be similar to the screenshot below.  

![Screen Shot 2021-11-03 at 8 54 56 PM](https://user-images.githubusercontent.com/1819208/140239427-88a2535f-ce54-49f5-add3-596ebffe7af2.png)


## Destructuring an Object 

```ejs
app.get('/ron', (req, res) => {
    // destructuring an object using the ...spread operator 
    // passing movie over to the EJS page will give us access to ALL movie's properties
    const movie = { ...moviesData.results[0] } 

    // we can go a step further and destructure `movie` so we can access the properties 
    // directly without needing to write `movie.originalTitle` instead just write `originalTitle`
    res.render('ron', { ...movie })
})
```
