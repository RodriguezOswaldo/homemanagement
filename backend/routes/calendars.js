const express = require('express');
const router = express.Router();
const Calendar = require('../models/Question');

router.get('/', async(req, res)=>{
    try{
        const calendars = await Calendar.find();
        res.json(calendars);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

router.post('/', async(req,res)=>{
    const calendar = new Calendar({
        event: req.body.event,
        date: req.body.date
    });
    
    try{
        const newCalendar = await calendar.save();
        res.status(201).json(newCalendar);
    } catch(err){
        res.status(400).json({message:err.message})
    }
});

module.exports = router;