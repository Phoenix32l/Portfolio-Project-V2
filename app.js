// imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', {text: 'Projects'})
})



// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))