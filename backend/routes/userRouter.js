const express = require('express');
const { createLead, getLead, exportLead } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post("/leads",createLead)
userRouter.get("/getting",getLead)
userRouter.get("/export",exportLead)


module.exports={userRouter}