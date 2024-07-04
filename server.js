const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    //res.send("Hello Express")
    //res.sendStatus(500) // the default status is 200
    // res.download('server.js') // when this method runs, the server.js file will be downloaded
    //res.status(200).send("We have a problem here....!")
    
    // res.json({
    //     "name": "Ayoub",
    //     "age": 26
    // })

    //Render a file [HTML file] called index.html you just passed the index
    res.render('index', {text : 'Express'})
})
app.listen(3000)