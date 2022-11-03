const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000;

const members = require('./Members')
// const logger = require('./middleware/logger')
//initialize middleware
// app.use(logger)
//Set static html file
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//gets all members
app.get('/api/members', (req, res)=>res.json(members))

//get single member
app.get('/api/members/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        //parseInt because id is number, req.params.id is string
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ message: `No member with id of ${req.params.id} was found`})
    }
})

app.listen(PORT, () => console.log(` App is running on http://localhost:${PORT}`))
 