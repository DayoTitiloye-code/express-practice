const express = require('express');
const path = require('path')
const app = express()



// const logger = require('./middleware/logger')
//initialize middleware
// app.use(logger)
//Set static html file
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(` App is running on http://localhost:${PORT}`))
 