const express = require('express');
const db = require("../models")
const router = express.Router();

// Create 

router.post('/',(req,res)=>{
    const task =req.body.task;
    const post_code = req.body.post_code;
    const profile_picture = req.body.profile_picture;
    const edit_status = req.body.edit_status;
    db.task
    .create({
        task : task,post_code,profile_picture,edit_status,
    })
    .then((result)=>{
        res.status(201).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})


//Read
router.get('/',(req,res) => {
    db.task
    .findAll()
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})


//Update

router.put('/:id',(req,res)=>{

    const targetId = req.params.id;
    const updateEditStatus = req.body.edit_status;
    const updateTask = req.body.task;
    const updateProfilePicture = req.body.profile_picture;

    db.task
    .update(
        {
            task : updateTask,
            edit_status: updateEditStatus,
            profile_picture: updateProfilePicture,
        },
        {where : {id :targetId}}
    )
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})



//Delete


router.delete("/:id",(req,res)=>{
    const targetId = Number(req.params.id);
    // console.log(targetId); 
    // const targetId = Number(req.body.id);
    db.task
    .destroy({where : { id: targetId }})
    .then(result => {
        res.status(204).send()
    })
    .catch((err) => {
        res.status(400).send(err)
    })
    
})








module.exports = router;