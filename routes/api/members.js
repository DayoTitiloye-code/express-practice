const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../Members')

//gets all members
router.get('/', (req, res)=>res.json(members))

//get single member
router.get('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        //parseInt because id is number, req.params.id is string
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ message: `No member with id of ${req.params.id} was found`})
    }
})

//create member
router.post('/', (req,res) =>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please include a name and email'})
    }

    members.push(newMember)

    res.status(200).json(members)
})

module.exports = router;
