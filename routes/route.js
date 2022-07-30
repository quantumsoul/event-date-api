const express = require("express");
const Event = require('../models/event')
const EventCapacity = require('../models/eventCapacity')
const router = express.Router();
router.post("/post/event",async(req,res)=>{
    try {
        const event = new Event(req.body)
        await event.save()
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.get("/get/event",async(req,res)=>{
    try {
        const event = await Event.findById(req.query.id)
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.post("/v2/post/event",async(req,res)=>{
    try {
        const event = new EventCapacity(req.body)
        await event.save()
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.get("/v2/get/event",async(req,res)=>{
    try {
        const event = await EventCapacity.findById(req.query.id)
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.patch("/edit/event",async(req,res)=>{
    try {
        const event = await Event.findByIdAndUpdate(    
            req.query.id,
            { $set: req.body },
            { new: true }
        )
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.delete("/delete/event",async(req,res)=>{
    try {
        const event = await Event.findByIdAndDelete(req.query.id)
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.post("/v2/edit/event",async(req,res)=>{
    try {
        const event = await EventCapacity.findByIdAndUpdate(    
            req.query.id,
            { $set: req.body },
            { new: true }
        )
        await event.save()
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
router.get("/v2/delete/event",async(req,res)=>{
    try {
        const event = await EventCapacity.findByIdAndDelete(req.query.id)
        res.send(event)
    } catch (error) {
        res.status(400)
    }
});
module.exports = router