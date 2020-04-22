const express = require('express');
const db = require("../models")
const router = express.Router();

// Create 

router.post('/',(req,res)=>{
    const task =req.body.task;
    db.task
    .create({
        task,
    })
    .then((result)=>{
        res.status(201).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})






module.exports = router;