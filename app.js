const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => console.log(` App is running on http://localhost:${PORT}`))
 