const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000;

const members = require('./Members')
const logger = require('./middleware/logger')
//initialize middleware
app.use(logger)
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//gets all members
app.get('/api/members', (req, res)=>res.json(members))

app.listen(PORT, () => console.log(` App is running on http://localhost:${PORT}`))
 