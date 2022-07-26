const express = require("express");
const Event = require('../models/event')
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
module.exports = router