const express = require ('express');
const router = express.Router();
const HometoWork = require('../models/HometoWork');
const Worktolunch = require ('../models/Worktolunch');


//all route to lunch

//add all routes to work and home the database
router.post('/save', (req,res) =>{
    console.log('Body:' ,req.body);
    res.json({
        msg:'Data received!!!'
    });
});

module.exports = router;