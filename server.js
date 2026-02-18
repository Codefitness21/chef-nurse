//Environment Variables
// const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})

//Dependencies
//I need to use express so I need to require it
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')


//Built in Middleware

//Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layout/main-app')
app.set('view engine', 'ejs')

//Database Connection
connectDB()

//static files
app.use(express.static('public'))
// app.use('/css', express.static(__dirname + '/public/css'))
app.use(express.urlencoded({extended: true}))
//This middleware reads Content-Type: application/json header and automatically converts the JSON string back into a JS object that you can use.
app.use(express.json())

//Route Handlers
//routes
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

//navigation
app.get('/index', (req, res)=> {
    res.render('index')
})

//removed :id
app.get('/todos', (req, res) => {
    res.render('todos')
})

// app.get('/index', (req, res) => {
//     res.sendFile('index'); 
// });

//removed :id
// app.put('/index', (req, res)=> {
//     res.redirect('index')
// })

//removed slash from todos
// app.post('/index', (req, res) => {
//     res.redirect('index'); 
// });

app.post('/index', (req, res) => {
    res.redirect('index'); 
});

app.post('/todos', (req, res) => {
    res.redirect('todos'); 
});


//Port
//listening to port 10000
app.listen(process.env.PORT, ()=> {
    console.log('listening on 10000')
})

//Here is where I serve up an index.html file page back to the browser. Use the sendFile method provided by res.
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// }) 